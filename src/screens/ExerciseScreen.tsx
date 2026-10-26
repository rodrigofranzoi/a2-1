import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ChoiceExercise } from '../components/ChoiceExercise';
import { WriteExercise } from '../components/WriteExercise';
import { getModule } from '../data/modules';
import { Exercise } from '../data/types';
import { colors } from '../theme/colors';
import { RootStackParamList } from '../navigation/types';
import { shuffle } from '../utils/shuffle';

type Props = NativeStackScreenProps<RootStackParamList, 'Exercise'>;

function newSession(pool: readonly Exercise[]): Exercise[] {
  return shuffle(pool);
}

export function ExerciseScreen({ route, navigation }: Props) {
  const moduleId = route.params.moduleId;
  const module = getModule(moduleId);
  const { width } = useWindowDimensions();
  const maxWidth = Math.min(width, 720);

  const pool = module?.exercises ?? [];
  const [exercises, setExercises] = useState<Exercise[]>(() =>
    newSession(pool),
  );
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  const restart = useCallback(() => {
    setExercises(newSession(pool));
    setIndex(0);
    setScore(0);
    setAnswered(false);
    setFinished(false);
  }, [pool]);

  useEffect(() => {
    setExercises(newSession(getModule(moduleId)?.exercises ?? []));
    setIndex(0);
    setScore(0);
    setAnswered(false);
    setFinished(false);
  }, [moduleId]);

  const current = exercises[index];
  const progressLabel = useMemo(
    () => `${Math.min(index + 1, exercises.length)} / ${exercises.length}`,
    [index, exercises.length],
  );

  if (!module || exercises.length === 0 || !current) {
    return (
      <View style={styles.missing}>
        <Text style={styles.missingText}>Exercices introuvables.</Text>
      </View>
    );
  }

  if (finished) {
    const percent = Math.round((score / exercises.length) * 100);
    return (
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.scoreContent}
      >
        <View style={[styles.scoreCard, { width: maxWidth }]}>
          <Text style={styles.scoreTitle}>Résultat</Text>
          <Text style={styles.scoreModule}>{module.title}</Text>
          <Text style={styles.scoreNumber}>
            {score} / {exercises.length}
          </Text>
          <Text style={styles.scorePercent}>{percent} %</Text>
          <Text style={styles.scoreMessage}>
            {percent >= 80
              ? 'Très bien ! Continuez comme ça.'
              : percent >= 50
                ? 'Bon travail. Relisez la leçon puis réessayez.'
                : 'Relisez le résumé du module, puis recommencez.'}
          </Text>
          <Pressable style={styles.primaryBtn} onPress={restart}>
            <Text style={styles.primaryBtnText}>Recommencer</Text>
          </Pressable>
          <Pressable
            style={styles.secondaryBtn}
            onPress={() => navigation.navigate('Module', { moduleId: module.id })}
          >
            <Text style={styles.secondaryBtnText}>Retour à la leçon</Text>
          </Pressable>
          <Pressable
            style={styles.secondaryBtn}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.secondaryBtnText}>Tous les modules</Text>
          </Pressable>
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <View style={[styles.inner, { width: maxWidth }]}>
        <View style={styles.progressRow}>
          <Text style={styles.progressText}>{progressLabel}</Text>
          <View style={styles.typeBadge}>
            <Text style={styles.typeBadgeText}>
              {current.type === 'choix' ? 'Choix multiple' : 'Écriture'}
            </Text>
          </View>
        </View>
        <View style={styles.progressBarTrack}>
          <View
            style={[
              styles.progressBarFill,
              {
                width: `${((index + (answered ? 1 : 0)) / exercises.length) * 100}%`,
              },
            ]}
          />
        </View>

        <View style={styles.card}>
          {current.type === 'choix' ? (
            <ChoiceExercise
              key={current.id}
              exercise={current}
              onResult={(correct) => {
                if (!answered) {
                  setAnswered(true);
                  if (correct) setScore((s) => s + 1);
                }
              }}
            />
          ) : (
            <WriteExercise
              key={current.id}
              exercise={current}
              onResult={(correct) => {
                if (!answered) {
                  setAnswered(true);
                  if (correct) setScore((s) => s + 1);
                }
              }}
            />
          )}
        </View>

        {answered ? (
          <Pressable
            style={styles.primaryBtn}
            onPress={() => {
              if (index + 1 >= exercises.length) {
                setFinished(true);
              } else {
                setIndex((i) => i + 1);
                setAnswered(false);
              }
            }}
          >
            <Text style={styles.primaryBtnText}>
              {index + 1 >= exercises.length
                ? 'Voir le score'
                : 'Question suivante'}
            </Text>
          </Pressable>
        ) : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  content: {
    alignItems: 'center',
    padding: 16,
    paddingBottom: 48,
  },
  scoreContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  inner: { maxWidth: 720 },
  missing: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg,
  },
  missingText: { color: colors.text, fontSize: 16 },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressText: {
    fontWeight: '700',
    color: colors.text,
    fontSize: 15,
  },
  typeBadge: {
    backgroundColor: colors.accentSoft,
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  typeBadgeText: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 12,
  },
  progressBarTrack: {
    height: 8,
    borderRadius: 8,
    backgroundColor: colors.border,
    marginBottom: 16,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: 8,
    backgroundColor: colors.accent,
  },
  card: {
    backgroundColor: colors.bgCard,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
  },
  primaryBtn: {
    marginTop: 16,
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
  },
  primaryBtnText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
  secondaryBtn: {
    marginTop: 10,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: colors.border,
    backgroundColor: colors.bgCard,
  },
  secondaryBtnText: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 15,
  },
  scoreCard: {
    backgroundColor: colors.bgCard,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 24,
    alignItems: 'center',
  },
  scoreTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.text,
  },
  scoreModule: {
    marginTop: 6,
    color: colors.textMuted,
    textAlign: 'center',
    fontSize: 15,
  },
  scoreNumber: {
    marginTop: 18,
    fontSize: 40,
    fontWeight: '800',
    color: colors.primary,
  },
  scorePercent: {
    fontSize: 18,
    color: colors.accent,
    fontWeight: '700',
    marginBottom: 12,
  },
  scoreMessage: {
    textAlign: 'center',
    color: colors.text,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
});
