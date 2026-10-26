import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { ModuleCard } from '../components/ModuleCard';
import { modules } from '../data/modules';
import { colors } from '../theme/colors';
import { RootStackParamList } from '../navigation/types';

export function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { width } = useWindowDimensions();
  const maxWidth = Math.min(width, 960);
  const pad = 16;
  const gap = 12;
  const columns = width >= 900 ? 3 : width >= 600 ? 2 : 1;
  const cardWidth =
    (maxWidth - pad * 2 - gap * (columns - 1)) / columns;

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={[styles.inner, { width: maxWidth }]}>
        <View style={styles.hero}>
          <Text style={styles.brand}>Français A2.1</Text>
          <Text style={styles.subtitle}>
            Résumés des cours et exercices pour réviser : choix multiple et
            écriture.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Modules</Text>
        <View style={styles.grid}>
          {modules.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              width={cardWidth}
              onPress={() =>
                navigation.navigate('Module', { moduleId: module.id })
              }
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  content: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
    paddingBottom: 48,
  },
  inner: { maxWidth: 960 },
  hero: {
    marginBottom: 28,
    padding: 20,
    borderRadius: 20,
    backgroundColor: colors.primary,
  },
  brand: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.white,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: '#D7ECE8',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 14,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
});
