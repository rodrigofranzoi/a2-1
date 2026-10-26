import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ChoiceExercise as ChoiceExerciseType } from '../data/types';
import { colors } from '../theme/colors';

type Props = {
  exercise: ChoiceExerciseType;
  onResult: (correct: boolean) => void;
};

export function ChoiceExercise({ exercise, onResult }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const revealed = selected !== null;
  const isCorrect = selected === exercise.answer;

  return (
    <View>
      <Text style={styles.prompt}>{exercise.prompt}</Text>
      <View style={styles.options}>
        {exercise.options.map((option) => {
          const isSelected = selected === option;
          const showGood = revealed && option === exercise.answer;
          const showBad = revealed && isSelected && option !== exercise.answer;
          return (
            <Pressable
              key={option}
              disabled={revealed}
              onPress={() => {
                setSelected(option);
                onResult(option === exercise.answer);
              }}
              style={[
                styles.option,
                showGood && styles.optionGood,
                showBad && styles.optionBad,
                isSelected && !revealed && styles.optionSelected,
              ]}
            >
              <Text
                style={[
                  styles.optionText,
                  (showGood || showBad) && styles.optionTextBold,
                ]}
              >
                {option}
              </Text>
            </Pressable>
          );
        })}
      </View>
      {revealed ? (
        <View
          style={[
            styles.feedback,
            isCorrect ? styles.feedbackGood : styles.feedbackBad,
          ]}
        >
          <Text style={styles.feedbackText}>
            {isCorrect
              ? 'Correct !'
              : `Incorrect. Réponse correcte : ${exercise.answer}`}
          </Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  prompt: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
    lineHeight: 26,
  },
  options: { gap: 10 },
  option: {
    backgroundColor: colors.bgCard,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 14,
    minHeight: 52,
    justifyContent: 'center',
  },
  optionSelected: { borderColor: colors.primary },
  optionGood: {
    borderColor: colors.success,
    backgroundColor: colors.successSoft,
  },
  optionBad: {
    borderColor: colors.error,
    backgroundColor: colors.errorSoft,
  },
  optionText: { fontSize: 16, color: colors.text },
  optionTextBold: { fontWeight: '700' },
  feedback: {
    marginTop: 16,
    borderRadius: 12,
    padding: 12,
  },
  feedbackGood: { backgroundColor: colors.successSoft },
  feedbackBad: { backgroundColor: colors.errorSoft },
  feedbackText: { fontSize: 15, color: colors.text, fontWeight: '600' },
});
