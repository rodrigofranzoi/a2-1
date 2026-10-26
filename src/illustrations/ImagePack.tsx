import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { colors } from '../theme/colors';
import {
  AlarmIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowStraightIcon,
  BathIcon,
  BedIcon,
  BusIcon,
  CloudIcon,
  CoatIcon,
  CoffeeIcon,
  DressIcon,
  FogIcon,
  FrownIcon,
  HatIcon,
  HouseIcon,
  KitchenIcon,
  MountainIcon,
  PantsIcon,
  ParkIcon,
  RainIcon,
  RainbowIcon,
  ShirtIcon,
  ShoeIcon,
  ShopIcon,
  SkirtIcon,
  SmileIcon,
  SnowIcon,
  StormIcon,
  SunIcon,
  SweaterIcon,
  WindIcon,
} from './icons';

export type PackName =
  | 'routine'
  | 'vetements'
  | 'meteo'
  | 'lieux'
  | 'directions'
  | 'pieces'
  | 'caractere'
  | 'pays';

type Item = { label: string; node: React.ReactNode };

const PACKS: Record<PackName, Item[]> = {
  routine: [
    { label: 'Se réveiller', node: <AlarmIcon /> },
    { label: 'Prendre un café', node: <CoffeeIcon /> },
    { label: 'Prendre le bus', node: <BusIcon /> },
  ],
  vetements: [
    { label: 'Une chemise', node: <ShirtIcon /> },
    { label: 'Un pull', node: <SweaterIcon /> },
    { label: 'Une robe', node: <DressIcon /> },
    { label: 'Un pantalon', node: <PantsIcon /> },
    { label: 'Une jupe', node: <SkirtIcon /> },
    { label: 'Un manteau', node: <CoatIcon /> },
    { label: 'Des baskets', node: <ShoeIcon /> },
    { label: 'Un chapeau', node: <HatIcon /> },
  ],
  meteo: [
    { label: 'Il y a du soleil', node: <SunIcon /> },
    { label: 'Il y a des nuages', node: <CloudIcon /> },
    { label: 'Il pleut', node: <RainIcon /> },
    { label: 'Il neige', node: <SnowIcon /> },
    { label: 'Il y a de l’orage', node: <StormIcon /> },
    { label: 'Il y a du vent', node: <WindIcon /> },
    { label: 'Il y a du brouillard', node: <FogIcon /> },
    { label: 'Un arc-en-ciel', node: <RainbowIcon /> },
  ],
  lieux: [
    { label: 'Une boutique', node: <ShopIcon /> },
    { label: 'Un parc', node: <ParkIcon /> },
    { label: 'Une maison', node: <HouseIcon /> },
  ],
  directions: [
    { label: 'Tout droit', node: <ArrowStraightIcon /> },
    { label: 'À gauche', node: <ArrowLeftIcon /> },
    { label: 'À droite', node: <ArrowRightIcon /> },
  ],
  pieces: [
    { label: 'La cuisine', node: <KitchenIcon /> },
    { label: 'La chambre', node: <BedIcon /> },
    { label: 'La salle de bain', node: <BathIcon /> },
    { label: 'Le logement', node: <HouseIcon /> },
  ],
  caractere: [
    { label: 'Optimiste', node: <SmileIcon /> },
    { label: 'Pessimiste', node: <FrownIcon /> },
  ],
  pays: [
    { label: 'La montagne', node: <MountainIcon /> },
    { label: 'La forêt / le parc', node: <ParkIcon /> },
    { label: 'La ville', node: <ShopIcon /> },
  ],
};

type Props = {
  pack: PackName;
  title?: string;
};

export function ImagePack({ pack, title }: Props) {
  const { width } = useWindowDimensions();
  const items = PACKS[pack];
  const columns = width >= 900 ? 4 : width >= 600 ? 3 : 2;
  const gap = 12;
  const cardWidth = Math.floor((Math.min(width, 960) - 32 - gap * (columns - 1)) / columns);

  return (
    <View style={styles.wrap}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <View style={styles.grid}>
        {items.map((item) => (
          <View key={item.label} style={[styles.card, { width: cardWidth }]}>
            <View style={styles.iconBox}>{item.node}</View>
            <Text style={styles.label}>{item.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginVertical: 8 },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  card: {
    backgroundColor: colors.bgCard,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 14,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  iconBox: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  label: {
    textAlign: 'center',
    color: colors.text,
    fontSize: 14,
    fontWeight: '600',
  },
});
