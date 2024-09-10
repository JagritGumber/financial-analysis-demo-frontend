import { CellProps, TableItem } from "@/types";

/**
 * A cell that displays a number as a percentage of maxValue, with a
 * background color that changes based on the percentage.
 *
 * The background color is a gradient, with:
 * - 0-10%: pinkRed (#ffd6d6)
 * - 10-50%: yellow (#ffeeae)
 * - 50-100%: green (#a6f5bc)
 *
 * The number is displayed as a string, with a maximum of 2 decimal places
 * and a minimum of 2 decimal places.
 *
 * The percentage is calculated as (number / maxValue) * 100
 *
 * @example
 * Cell: ({ cell }) => <ColoredPercentageCell cell={cell} maxValue={maxValue} />
 *
 */
const ColoredPercentageCell = ({
  cell,
  maxValue,
}: CellProps<TableItem> & { maxValue: number }): React.ReactNode => {
  const number = Number.parseFloat(cell.getValue() as string);
  const displayNum = number.toLocaleString("en-US", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

  const percentage = (number / maxValue) * 100;

  return (
    <div className="root relative w-full">
      <div
        className={`back absolute h-full ${
          percentage > 50
            ? "bg-[#a6f5bc]"
            : percentage > 10
              ? "bg-[#ffeeae]"
              : "bg-[#ffd6d6]"
        }`}
        style={{ width: `${percentage}%` }}
      ></div>
      <div
        style={{ width: `${100 - percentage}%` }}
        className={`absolute right-0 h-full ${cell.row.index % 2 === 0 ? "bg-[#f5f5f5]" : "bg-[#efefef]"}`}
      ></div>
      <div className={`front relative z-10 w-full p-2 text-end`}>
        {displayNum}
      </div>
    </div>
  );
};

export { ColoredPercentageCell };
