import { getCurrentPillarValue } from '../PillarHelper';
import { convertToISOString } from '../TimeHelper';
import type Pillar from '../../types/Pillar';

const booleanPillar: Pillar = {
  color: 'red',
  name: '',
  type: null,
  submissions: [
    {
      value: 1,
      time_submitted: convertToISOString(new Date()),
    },
    {},
  ],
};

describe('Pillar Helper', () => {
  test('should calculate current pillar value correctly', () => {
    expect(getCurrentPillarValue(booleanPillar)).toBeTruthy();
  });
});
