import { getCurrentPillarValue } from '../PillarHelper';
import { convertToISOString } from "../TimeHelper";
import type Pillar from "../../types/Pillar";

const pillar: Pillar = {
  color: 'red',
  name: '',
  type: null,
  submissions: [{
    time_submitted:
  }, {

  }],
};
pillar.submissions[0].

describe('Pillar Helper', () => {
  test('should calculate current pillar value correctly', () => {
    expect(getCurrentPillarValue(pillar)).toBe
  });
});