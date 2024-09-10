import { CellProps, TableItem } from "@/types";

/**
 * A Material-React-Table cell renderer that renders a colored
 * div with a string representation of the cell value.
 *
 * The div is colored darker yellow if the value is positive, and light yellow if
 * it is negative.
 */
const ColoredCell = ({ cell }: CellProps<TableItem>): React.ReactNode => {
  const isPositive = Number.parseFloat(cell.getValue() as string) >= 0;
  const number = Number.parseFloat(cell.getValue() as string).toLocaleString(
    "en-US",
    {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    },
  );
  return (
    <div
      className={`w-full p-2 text-end ${
        isPositive ? "bg-[#ffe0b1]" : "bg-[#fffbd6]"
      }`}
    >
      {number}
    </div>
  );
};

export { ColoredCell };
