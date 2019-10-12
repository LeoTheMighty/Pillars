import { convertHexToRGB, convertHSLToHSV, convertHSVToHSL, convertRGBToHSL } from '../ColorHelper';

describe('Color Helper', () => {
  describe('convertHexToRGB', () => {
    test('convert hex to rgb black', () => {
      expect(convertHexToRGB('#000000')).toEqual([0, 0, 0]);
    });
    test('convert hex to rgb white', () => {
      expect(convertHexToRGB('#ffffff')).toEqual([255, 255, 255]);
    });
    test('convert hex to rgb blue', () => {
      expect(convertHexToRGB('#0000ff')).toEqual([0, 0, 255]);
    });
    test('convert hex to rgb complex', () => {
      expect(convertHexToRGB('#7dffd5')).toEqual([125, 255, 213]);
    });
    test('convert hex to rgb complex capital letters', () => {
      expect(convertHexToRGB('#7DFFD5')).toEqual([125, 255, 213]);
    });
  });

  describe('convertRGBToHSL', () => {
    const color = '#805a32';

    test('convert rgb to hsl black', () => {
      expect(convertRGBToHSL([0, 0, 0])).toEqual([0, 0, 0]);
    });
    test('convert rgb to hsl white', () => {
      expect(convertRGBToHSL([255, 255, 255])).toEqual([0, 0, 100]);
    });
    test('convert rgb to hsl blue', () => {
      expect(convertRGBToHSL([0, 0, 255])).toEqual([240, 100, 100]);
    });
    test('convert rgb to hsl complex', () => {
      expect(convertHSLToHSV(convertRGBToHSL([128, 90, 50]))).toEqual([31, 61, 50]);
    });
  });

  describe('convertHSVToHSL', () => {
    test('convert HSV to HSL black', () => {
      expect(convertHSVToHSL([0, 0, 0])).toEqual([0, 0, 0]);
    });
    test('convert HSV to HSL white', () => {
      expect(convertHSVToHSL([0, 0, 100])).toEqual([0, 0, 100]);
    });
  });
  describe('convertHSVToHSL', () => {
    test('convert HSL to HSV black', () => {
      expect(convertHSLToHSV([0, 0, 0])).toEqual([0, 0, 0]);
    });
    test('convert HSL to HSV white', () => {
      expect(convertHSLToHSV([0, 0, 100])).toEqual([0, 0, 100]);
    });
  });
});
