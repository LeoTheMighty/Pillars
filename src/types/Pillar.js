import type PillarSubmission from "./PillarSubmission";

/**
 * A demonstration of the extent to which one has achieved a goal. Stores all historical information about the goal
 * achievement as well.
 */
type Pillar = {
  index: number,
  name: string,
  color: string,
  type: string,
  submissions: [PillarSubmission],
}

export default Pillar;