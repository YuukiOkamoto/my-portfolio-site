import Color from 'color';

export const addOpacity = (color, opacity) =>
  Color(color)
    .fade(1 - opacity)
    .rgb()
    .string();

export const generateAlphaColors = color => ({
  900: addOpacity(color, 0.92),
  800: addOpacity(color, 0.8),
  700: addOpacity(color, 0.6),
  600: addOpacity(color, 0.48),
  500: addOpacity(color, 0.38),
  400: addOpacity(color, 0.24),
  300: addOpacity(color, 0.16),
  200: addOpacity(color, 0.12),
  100: addOpacity(color, 0.08),
  50: addOpacity(color, 0.04),
});
