/**
 * The contract the copied muscle map art satisfies. Region names stay plain
 * strings: the art decides what is drawn, and a region it does not draw lights nothing.
 */
export interface MuscleMapArt {
  viewBox: { front: string, back: string }
  /** Hands, feet, head, knees and any other never-lit shape. */
  base: { front: readonly string[], back: readonly string[] }
  regions: { front: Record<string, readonly string[]>, back: Record<string, readonly string[]> }
}
