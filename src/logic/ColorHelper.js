/**
 * Converts a color from Hex to RGB.
 *
 * @param {string} hex The hex string representation of the color.
 * @return {[number]} The R, G, B values respectively.
 */
export const convertHexToRGB = (hex) => {
  if (hex[0] !== '#') {
    throw new Error('Improperly formatted hex-string');
  }
  let r = 0;
  let g = 0;
  let b = 0;

  // 3 digits
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);

    // 6 digits
  } else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return [r, g, b];
};

export const convertRGBToHSL = (rgb) => {
  if (rgb.length !== 3) {
    throw new Error('Malformed RGB array!');
  }
  // Make r, g, and b fractions of 1
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;

  // Find greatest and smallest channel values
  const colorMin = Math.min(r, g, b);
  const colorMax = Math.max(r, g, b);
  const delta = colorMax - colorMin;
  let h = 0;
  let s = 0;
  let l = 0;

  // Calculate hue
  // No difference
  if (delta === 0) h = 0;
  // Red is max
  else if (colorMax === r) h = ((g - b) / delta) % 6;
  // Green is max
  else if (colorMax === g) h = (b - r) / delta + 2;
  // Blue is max
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0) h += 360;

  // Calculate lightness
  l = (colorMax + colorMin) / 2;

  // Calculate saturation
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return [h, s, l];
};

export const convertHSVToHSL = (hsv) => {
  if (hsv.length !== 3) {
    throw new Error('Malformed RGB array!');
  }
  const l = ((200 - hsv[1]) * hsv[2]) / 2;
  const s =
    l && l < 100 ? (hsv[1] * hsv[2]) / (l < 50 ? l * 2 : 200 - l * 2) : hsv[1];
  return [hsv[0], s, l];
};

export const convertHSLToHSV = (hsl) => {
  if (hsl.length !== 3) {
    throw new Error('Malformed RGB array!');
  }
  const t = hsl[1] * (hsl[2] < 50 ? hsl[2] : 100 - hsl[2]);
  const v = hsl[2] + t;
  const s = hsl[2] > 0 ? (2 * t) / v : hsl[1];
  return [hsl[0], s, v];
};
