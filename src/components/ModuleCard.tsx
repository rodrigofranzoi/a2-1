import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ModuleData } from '../data/types';
import { colors } from '../theme/colors';

type Props = {
  module: ModuleData;
  width: number;
  onPress: () => void;
};

export function ModuleCard({ module, width, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        { width },
        pressed && styles.pressed,
      ]}
      accessibilityRole="button"
      accessibilityLabel={`Module ${module.number} : ${module.title}`}
    >
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{module.number}</Text>
      </View>
      <Text style={styles.title} numberOfLines={3}>
        {module.title}
      </Text>
      <Text style={styles.objectif} numberOfLines={3}>
        {module.objectif}
      </Text>
      <Text style={styles.cta}>Voir la leçon →</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.bgCard,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    minHeight: 168,
  },
  pressed: { opacity: 0.88, transform: [{ scale: 0.99 }] },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.accentSoft,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 10,
  },
  badgeText: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 13,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  objectif: {
    fontSize: 14,
    color: colors.textMuted,
    lineHeight: 20,
    flexGrow: 1,
  },
  cta: {
    marginTop: 12,
    color: colors.accent,
    fontWeight: '700',
    fontSize: 14,
  },
});
