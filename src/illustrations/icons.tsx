import React from 'react';
import Svg, { Circle, Ellipse, Line, Path, Rect } from 'react-native-svg';

type IconProps = { size?: number; color?: string };

export function SunIcon({ size = 64, color = '#F4A261' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Circle cx="32" cy="32" r="12" fill={color} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 32 + Math.cos(rad) * 18;
        const y1 = 32 + Math.sin(rad) * 18;
        const x2 = 32 + Math.cos(rad) * 26;
        const y2 = 32 + Math.sin(rad) * 26;
        return (
          <Line
            key={deg}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
          />
        );
      })}
    </Svg>
  );
}

export function CloudIcon({ size = 64, color = '#7A9EAE' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Ellipse cx="28" cy="34" rx="16" ry="12" fill={color} />
      <Ellipse cx="40" cy="32" rx="14" ry="11" fill={color} />
      <Ellipse cx="34" cy="28" rx="10" ry="8" fill={color} />
    </Svg>
  );
}

export function RainIcon({ size = 64, color = '#4A90A4' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Ellipse cx="28" cy="26" rx="14" ry="10" fill={color} />
      <Ellipse cx="40" cy="24" rx="12" ry="9" fill={color} />
      <Line x1="22" y1="40" x2="18" y2="52" stroke="#4A90A4" strokeWidth="3" strokeLinecap="round" />
      <Line x1="32" y1="40" x2="28" y2="52" stroke="#4A90A4" strokeWidth="3" strokeLinecap="round" />
      <Line x1="42" y1="40" x2="38" y2="52" stroke="#4A90A4" strokeWidth="3" strokeLinecap="round" />
    </Svg>
  );
}

export function SnowIcon({ size = 64, color = '#8FB8C9' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Ellipse cx="30" cy="24" rx="14" ry="10" fill={color} />
      <Ellipse cx="40" cy="22" rx="11" ry="9" fill={color} />
      <Circle cx="22" cy="44" r="3" fill="#B8D4E0" />
      <Circle cx="34" cy="48" r="3" fill="#B8D4E0" />
      <Circle cx="44" cy="42" r="3" fill="#B8D4E0" />
      <Circle cx="28" cy="54" r="2.5" fill="#B8D4E0" />
    </Svg>
  );
}

export function StormIcon({ size = 64, color = '#5C6B73' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Ellipse cx="28" cy="24" rx="14" ry="10" fill={color} />
      <Ellipse cx="40" cy="22" rx="12" ry="9" fill={color} />
      <Path d="M30 34 L24 46 L30 46 L26 56 L40 40 L32 40 L36 34 Z" fill="#F4D35E" />
    </Svg>
  );
}

export function WindIcon({ size = 64, color = '#6B8F9E' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Path d="M10 24 H42 C48 24 48 16 42 16" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
      <Path d="M10 34 H48 C54 34 54 26 48 26" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
      <Path d="M10 44 H36 C42 44 42 52 36 52" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
    </Svg>
  );
}

export function FogIcon({ size = 64, color = '#9AABB2' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Line x1="12" y1="22" x2="52" y2="22" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <Line x1="16" y1="32" x2="48" y2="32" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <Line x1="12" y1="42" x2="52" y2="42" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </Svg>
  );
}

export function RainbowIcon({ size = 64 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Path d="M8 44 A24 24 0 0 1 56 44" stroke="#E63946" strokeWidth="4" fill="none" />
      <Path d="M12 44 A20 20 0 0 1 52 44" stroke="#F4A261" strokeWidth="4" fill="none" />
      <Path d="M16 44 A16 16 0 0 1 48 44" stroke="#F4D35E" strokeWidth="4" fill="none" />
      <Path d="M20 44 A12 12 0 0 1 44 44" stroke="#2A9D8F" strokeWidth="4" fill="none" />
      <Path d="M24 44 A8 8 0 0 1 40 44" stroke="#457B9D" strokeWidth="4" fill="none" />
    </Svg>
  );
}

export function ShirtIcon({ size = 64, color = '#4A90A4' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Path
        d="M20 14 L32 20 L44 14 L54 22 L48 28 L48 52 L16 52 L16 28 L10 22 Z"
        fill={color}
      />
      <Path d="M26 14 Q32 22 38 14" fill="#F0F7F4" />
    </Svg>
  );
}

export function PantsIcon({ size = 64, color = '#2C5F7A' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Path d="M20 12 H44 V30 L40 56 H30 L32 30 L28 56 H18 L22 30 Z" fill={color} />
    </Svg>
  );
}

export function DressIcon({ size = 64, color = '#E07A5F' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Path d="M26 10 H38 L42 22 L52 50 H12 L22 22 Z" fill={color} />
      <Rect x="28" y="6" width="8" height="6" rx="2" fill={color} />
    </Svg>
  );
}

export function CoatIcon({ size = 64, color = '#3D5A80' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Path d="M18 14 L32 22 L46 14 L56 24 L50 30 V54 H14 V30 L8 24 Z" fill={color} />
      <Line x1="32" y1="22" x2="32" y2="54" stroke="#F0F7F4" strokeWidth="2" />
    </Svg>
  );
}

export function ShoeIcon({ size = 64, color = '#6D4C41' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Path d="M10 36 H34 L42 42 H54 V48 H10 Z" fill={color} />
      <Path d="M10 36 Q18 24 30 28 L34 36" fill={color} />
    </Svg>
  );
}

export function HatIcon({ size = 64, color = '#8D6E63' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Ellipse cx="32" cy="42" rx="24" ry="6" fill={color} />
      <Path d="M18 42 Q18 22 32 20 Q46 22 46 42" fill={color} />
    </Svg>
  );
}

export function SkirtIcon({ size = 64, color = '#9B5DE5' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Path d="M24 14 H40 L48 48 H16 Z" fill={color} />
    </Svg>
  );
}

export function SweaterIcon({ size = 64, color = '#E9C46A' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Path d="M18 16 L32 22 L46 16 L56 26 L48 32 V52 H16 V32 L8 26 Z" fill={color} />
      <Rect x="26" y="12" width="12" height="10" rx="4" fill={color} />
    </Svg>
  );
}

export function AlarmIcon({ size = 64, color = '#1A5F7A' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Circle cx="32" cy="34" r="16" fill={color} />
      <Circle cx="32" cy="34" r="12" fill="#F0F7F4" />
      <Line x1="32" y1="34" x2="32" y2="26" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <Line x1="32" y1="34" x2="40" y2="34" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <Line x1="18" y1="16" x2="12" y2="10" stroke={color} strokeWidth="3" />
      <Line x1="46" y1="16" x2="52" y2="10" stroke={color} strokeWidth="3" />
    </Svg>
  );
}

export function CoffeeIcon({ size = 64, color = '#6D4C41' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Rect x="14" y="20" width="28" height="28" rx="4" fill={color} />
      <Path d="M42 26 H50 A6 6 0 0 1 50 42 H42" stroke={color} strokeWidth="4" fill="none" />
      <Ellipse cx="28" cy="20" rx="14" ry="4" fill="#8D6E63" />
    </Svg>
  );
}

export function BusIcon({ size = 64, color = '#E76F51' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Rect x="8" y="16" width="48" height="28" rx="6" fill={color} />
      <Rect x="14" y="22" width="12" height="10" fill="#F0F7F4" />
      <Rect x="30" y="22" width="12" height="10" fill="#F0F7F4" />
      <Circle cx="18" cy="46" r="5" fill="#1C2B2D" />
      <Circle cx="46" cy="46" r="5" fill="#1C2B2D" />
    </Svg>
  );
}

export function ArrowStraightIcon({ size = 64, color = '#1A5F7A' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Line x1="32" y1="50" x2="32" y2="16" stroke={color} strokeWidth="5" strokeLinecap="round" />
      <Path d="M20 28 L32 14 L44 28" stroke={color} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function ArrowLeftIcon({ size = 64, color = '#1A5F7A' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Path d="M44 16 V36 H20" stroke={color} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M30 24 L18 36 L30 48" stroke={color} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function ArrowRightIcon({ size = 64, color = '#1A5F7A' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Path d="M20 16 V36 H44" stroke={color} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M34 24 L46 36 L34 48" stroke={color} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function HouseIcon({ size = 64, color = '#1A5F7A' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Path d="M8 30 L32 10 L56 30 V54 H8 Z" fill={color} />
      <Rect x="26" y="36" width="12" height="18" fill="#F0F7F4" />
      <Rect x="14" y="34" width="10" height="10" fill="#D4EFEA" />
      <Rect x="40" y="34" width="10" height="10" fill="#D4EFEA" />
    </Svg>
  );
}

export function KitchenIcon({ size = 64, color = '#159895' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Rect x="10" y="18" width="44" height="36" rx="4" fill={color} />
      <Rect x="16" y="24" width="14" height="12" fill="#F0F7F4" />
      <Circle cx="42" cy="30" r="6" fill="#F0F7F4" />
      <Rect x="16" y="42" width="32" height="6" fill="#0D7377" />
    </Svg>
  );
}

export function BedIcon({ size = 64, color = '#3D5A80' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Rect x="8" y="30" width="48" height="16" rx="3" fill={color} />
      <Rect x="12" y="20" width="16" height="12" rx="3" fill="#8E9AAF" />
      <Line x1="12" y1="46" x2="12" y2="54" stroke={color} strokeWidth="4" />
      <Line x1="52" y1="46" x2="52" y2="54" stroke={color} strokeWidth="4" />
    </Svg>
  );
}

export function BathIcon({ size = 64, color = '#4A90A4' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Path d="M12 30 H52 V42 A10 10 0 0 1 42 52 H22 A10 10 0 0 1 12 42 Z" fill={color} />
      <Line x1="18" y1="20" x2="18" y2="30" stroke={color} strokeWidth="3" />
      <Circle cx="18" cy="16" r="3" fill={color} />
    </Svg>
  );
}

export function ShopIcon({ size = 64, color = '#E76F51' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Rect x="12" y="24" width="40" height="30" fill={color} />
      <Path d="M10 24 L32 10 L54 24 Z" fill="#C45C26" />
      <Rect x="26" y="36" width="12" height="18" fill="#F0F7F4" />
    </Svg>
  );
}

export function ParkIcon({ size = 64, color = '#2A9D8F' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Circle cx="32" cy="26" r="14" fill={color} />
      <Rect x="28" y="36" width="8" height="18" fill="#6D4C41" />
      <Ellipse cx="32" cy="56" rx="18" ry="4" fill="#A8D5C2" />
    </Svg>
  );
}

export function MountainIcon({ size = 64, color = '#3D5A80' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Path d="M4 52 L22 20 L32 36 L42 16 L60 52 Z" fill={color} />
      <Path d="M22 20 L28 30 L18 30 Z" fill="#F0F7F4" />
      <Path d="M42 16 L46 26 L38 26 Z" fill="#F0F7F4" />
    </Svg>
  );
}

export function SmileIcon({ size = 64, color = '#F4A261' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Circle cx="32" cy="32" r="22" fill={color} />
      <Circle cx="24" cy="26" r="3" fill="#1C2B2D" />
      <Circle cx="40" cy="26" r="3" fill="#1C2B2D" />
      <Path d="M22 38 Q32 48 42 38" stroke="#1C2B2D" strokeWidth="3" fill="none" strokeLinecap="round" />
    </Svg>
  );
}

export function FrownIcon({ size = 64, color = '#8E9AAF' }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      <Circle cx="32" cy="32" r="22" fill={color} />
      <Circle cx="24" cy="26" r="3" fill="#1C2B2D" />
      <Circle cx="40" cy="26" r="3" fill="#1C2B2D" />
      <Path d="M22 44 Q32 36 42 44" stroke="#1C2B2D" strokeWidth="3" fill="none" strokeLinecap="round" />
    </Svg>
  );
}
