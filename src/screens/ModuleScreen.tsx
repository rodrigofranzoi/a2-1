import React from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getModule } from '../data/modules';
import { ImagePack } from '../illustrations/ImagePack';
import { colors } from '../theme/colors';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Module'>;

export function ModuleScreen({ route, navigation }: Props) {
  const module = getModule(route.params.moduleId);
  const { width } = useWindowDimensions();
  const maxWidth = Math.min(width, 800);

  if (!module) {
    return (
      <View style={styles.missing}>
        <Text style={styles.missingText}>Module introuvable.</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={[styles.inner, { width: maxWidth }]}>
        <Text style={styles.eyebrow}>Cours {module.number}</Text>
        <Text style={styles.title}>{module.title}</Text>
        <Text style={styles.objectif}>{module.objectif}</Text>
        <Text style={styles.summary}>{module.summary}</Text>

        {module.imagePack ? (
          <ImagePack
            pack={module.imagePack}
            title="Illustrations pour retenir"
          />
        ) : null}

        {module.sections.map((section) => (
          <View key={section.title} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.bullets.map((bullet) => (
              <View key={bullet} style={styles.bulletRow}>
                <Text style={styles.bulletMark}>•</Text>
                <Text style={styles.bulletText}>{bullet}</Text>
              </View>
            ))}
            {section.examples?.length ? (
              <View style={styles.examples}>
                <Text style={styles.examplesTitle}>Exemples</Text>
                {section.examples.map((example) => (
                  <Text key={example} style={styles.example}>
                    « {example} »
                  </Text>
                ))}
              </View>
            ) : null}
          </View>
        ))}

        <Pressable
          style={styles.cta}
          onPress={() =>
            navigation.navigate('Exercise', { moduleId: module.id })
          }
        >
          <Text style={styles.ctaText}>
            Faire les exercices ({module.exercises.length})
          </Text>
        </Pressable>
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
  inner: { maxWidth: 800 },
  missing: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg,
  },
  missingText: { color: colors.text, fontSize: 16 },
  eyebrow: {
    color: colors.accent,
    fontWeight: '700',
    marginBottom: 6,
    fontSize: 14,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 8,
  },
  objectif: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: '600',
    marginBottom: 10,
    lineHeight: 24,
  },
  summary: {
    fontSize: 16,
    color: colors.textMuted,
    lineHeight: 24,
    marginBottom: 16,
  },
  section: {
    backgroundColor: colors.bgCard,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    marginTop: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 10,
  },
  bulletRow: { flexDirection: 'row', marginBottom: 8 },
  bulletMark: {
    width: 18,
    color: colors.accent,
    fontSize: 16,
    fontWeight: '700',
  },
  bulletText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
    color: colors.text,
  },
  examples: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  examplesTitle: {
    fontWeight: '700',
    color: colors.textMuted,
    marginBottom: 6,
    fontSize: 13,
    textTransform: 'uppercase',
  },
  example: {
    fontSize: 15,
    fontStyle: 'italic',
    color: colors.text,
    marginBottom: 6,
    lineHeight: 22,
  },
  cta: {
    marginTop: 24,
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
  },
  ctaText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
});
