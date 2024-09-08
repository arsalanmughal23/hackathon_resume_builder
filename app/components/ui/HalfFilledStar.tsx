import { StarIcon } from "@heroicons/react/16/solid";

export type FillType = "empty" | "half" | "full";
type FilledStarType = {
  fill?: FillType,
  color?: string,
  className?: string
}

export default function FilledStar({
  fill="empty",
  color="primary",
  className,
}: FilledStarType) {

  const starFillClass = fill === "full" ? 'w-full' : (fill === "half" ? 'w-1/2' : 'w-0');

  return (
    <div className={`${className} relative inline-block w-5 h-5`}>
      {/* Full star as the base (outline star effect using a lighter color) */}
      <StarIcon className={`w-5 h-5 text-transparent stroke-${color}`} />

      {/* Half-filled star on top, masked to show only half */}
      <div className={`${ starFillClass } absolute top-0 left-0 h-full overflow-hidden`}>
        <StarIcon className={`w-5 h-5 text-${color}`} />
      </div>
    </div>
  );
}