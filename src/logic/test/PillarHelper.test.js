import { getCurrentPillarValue, _randomPillars } from '../PillarHelper';
import { convertToISOString, daysBefore, now} from '../TimeHelper';
import type Pillar from '../../types/Pillar';

const booleanPillar: Pillar = {
  color: 'red',
  name: '',
  type: null,
  submissions: [
    {
      value: 1,
      time_submitted: convertToISOString(daysBefore(0)),
    },
  ],
};

describe('Pillar Helper', () => {
  describe('Get Pillar Value', () => {
    test('should get perfect pillar score', () => {
      const nowDate = now();
      const pillar = { color: 'red', name: 'Name', submissions: [] };
      for (let i = 0; i < 7; i += 1) {
        pillar.submissions.push({
          value: 1,
          time_submitted: convertToISOString(daysBefore(i, nowDate)),
        });
      }
      expect(getCurrentPillarValue(pillar, 'week', 1, nowDate)).toEqual(1);
    });
    test('should get worst pillar score', () => {
      const pillar = { color: 'red', name: 'Name', submissions: [] };
      expect(getCurrentPillarValue(pillar, 'week', 1)).toEqual(0);
    });
    test('get measured worst pillar score', () => {
      const nowDate = now();
      const pillar = { color: 'red', name: 'Name', submissions: [] };
      for (let i = 0; i < 7; i += 1) {
        pillar.submissions.push({
          value: 0,
          time_submitted: convertToISOString(daysBefore(i, nowDate)),
        });
      }
      expect(getCurrentPillarValue(pillar, 'week', 1, nowDate)).toEqual(0);
    });
  });
  test('should calculate current pillar value correctly', () => {
    expect(getCurrentPillarValue(booleanPillar)).toBeTruthy();
  });
  describe('Random Pillars', () => {
    test('should make 1 random pillar correctly', () => {
      const pillars = _randomPillars(1);
      expect(pillars).toHaveLength(1);
    });
  });
});
