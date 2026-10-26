export type GradeResult = {
  status: 'exact' | 'proche' | 'faux';
  canonical: string;
};

function stripDiacritics(value: string): string {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

/** Normalize for fuzzy compare: lower case, no accents, no punctuation/spaces. */
export function normalizeAnswer(value: string): string {
  return stripDiacritics(value)
    .toLowerCase()
    .replace(/[''`´]/g, '')
    .replace(/[-–—_/.,;:!?\u00ab\u00bb"()\s]+/g, '')
    .trim();
}

export function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  const rows = a.length + 1;
  const cols = b.length + 1;
  const matrix: number[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(0),
  );

  for (let i = 0; i < rows; i += 1) matrix[i][0] = i;
  for (let j = 0; j < cols; j += 1) matrix[0][j] = j;

  for (let i = 1; i < rows; i += 1) {
    for (let j = 1; j < cols; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost,
      );
    }
  }

  return matrix[a.length][b.length];
}

function maxAllowedDistance(length: number): number {
  if (length <= 4) return 1;
  if (length <= 12) return 2;
  return 3;
}

/**
 * Grade a free-text answer against the canonical form (and optional aliases).
 * Accepts missing apostrophes (cest ≈ c'est) and small typos.
 */
export function gradeAnswer(
  userInput: string,
  canonical: string,
  accepted: string[] = [],
): GradeResult {
  const trimmed = userInput.trim();
  if (!trimmed) {
    return { status: 'faux', canonical };
  }

  const candidates = [canonical, ...accepted];
  const normalizedUser = normalizeAnswer(trimmed);

  for (const candidate of candidates) {
    if (trimmed === candidate) {
      return { status: 'exact', canonical };
    }
  }

  for (const candidate of candidates) {
    if (normalizeAnswer(candidate) === normalizedUser) {
      const exactIgnoringCase =
        stripDiacritics(trimmed).toLowerCase() ===
        stripDiacritics(candidate).toLowerCase();
      return {
        status: exactIgnoringCase && trimmed.includes("'") === candidate.includes("'")
          ? 'exact'
          : 'proche',
        canonical,
      };
    }
  }

  let best = Number.POSITIVE_INFINITY;
  for (const candidate of candidates) {
    const dist = levenshtein(normalizedUser, normalizeAnswer(candidate));
    if (dist < best) best = dist;
  }

  const threshold = maxAllowedDistance(normalizedUser.length);
  if (best <= threshold) {
    return { status: 'proche', canonical };
  }

  return { status: 'faux', canonical };
}
