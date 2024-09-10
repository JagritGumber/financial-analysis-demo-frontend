import { CellProps, TableItem } from "@/types";

/**
 * A Material-React-Table cell renderer that renders a number
 * as a string, with a minimum of 2 and a maximum of 2 decimal places.
 *
 * The number is right-aligned in a full-width div.
 */
const BasicCell = ({ cell }: CellProps<TableItem>): React.ReactNode => {
  const number = Number.parseFloat(cell.getValue() as string).toLocaleString(
    "en-US",
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
  );
  return (
    <div
      className={`w-full p-2 text-end ${cell.row.index % 2 === 0 ? "bg-[#f5f5f5]" : "bg-[#efefef]"} `}
    >
      {number}
    </div>
  );
};

export { BasicCell };
