import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { WriteExercise as WriteExerciseType } from '../data/types';
import { colors } from '../theme/colors';
import { gradeAnswer, GradeResult } from '../utils/normalizeAnswer';

type Props = {
  exercise: WriteExerciseType;
  onResult: (correct: boolean) => void;
};

export function WriteExercise({ exercise, onResult }: Props) {
  const [value, setValue] = useState('');
  const [result, setResult] = useState<GradeResult | null>(null);

  const submit = () => {
    if (result) return;
    const graded = gradeAnswer(value, exercise.answer, exercise.accepted);
    setResult(graded);
    onResult(graded.status !== 'faux');
  };

  return (
    <View>
      <Text style={styles.prompt}>{exercise.prompt}</Text>
      {exercise.hint ? <Text style={styles.hint}>Indice : {exercise.hint}</Text> : null}
      <TextInput
        value={value}
        onChangeText={setValue}
        editable={!result}
        placeholder="Écrivez votre réponse…"
        placeholderTextColor={colors.textMuted}
        style={styles.input}
        autoCapitalize="sentences"
        autoCorrect={false}
        onSubmitEditing={submit}
      />
      {!result ? (
        <Pressable
          onPress={submit}
          disabled={!value.trim()}
          style={[styles.button, !value.trim() && styles.buttonDisabled]}
        >
          <Text style={styles.buttonText}>Vérifier</Text>
        </Pressable>
      ) : (
        <View
          style={[
            styles.feedback,
            result.status === 'faux'
              ? styles.feedbackBad
              : result.status === 'proche'
                ? styles.feedbackNear
                : styles.feedbackGood,
          ]}
        >
          <Text style={styles.feedbackTitle}>
            {result.status === 'exact'
              ? 'Correct !'
              : result.status === 'proche'
                ? 'Accepté (petite faute ou orthographe proche)'
                : 'Incorrect'}
          </Text>
          {result.status !== 'exact' ? (
            <Text style={styles.feedbackBody}>
              Réponse correcte : {result.canonical}
            </Text>
          ) : null}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  prompt: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
    lineHeight: 26,
  },
  hint: {
    fontSize: 14,
    color: colors.textMuted,
    marginBottom: 10,
  },
  input: {
    backgroundColor: colors.bgCard,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 16,
    color: colors.text,
    minHeight: 52,
  },
  button: {
    marginTop: 12,
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonDisabled: { opacity: 0.45 },
  buttonText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
  feedback: {
    marginTop: 16,
    borderRadius: 12,
    padding: 12,
  },
  feedbackGood: { backgroundColor: colors.successSoft },
  feedbackNear: { backgroundColor: colors.warningSoft },
  feedbackBad: { backgroundColor: colors.errorSoft },
  feedbackTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  feedbackBody: {
    fontSize: 15,
    color: colors.text,
  },
});
