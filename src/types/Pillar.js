import type PillarSubmission from "./PillarSubmission";

/**
 * A demonstration of the extent to which one has achieved a goal. Stores all historical information about the goal
 * achievement as well.
 */
type Pillar = {
  /** The name of the Pillar to work toward. */
  name: string,
  /** The color of the Pillar to display. */
  color: string,
  /** The special type of the Pillar, to handle differently in submissions/details. */
  type: string,
  /** The array of historical submissions done for the pillar. */
  submissions: [PillarSubmission],
}

export default Pillar;