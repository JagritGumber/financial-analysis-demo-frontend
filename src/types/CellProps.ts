import {
  MRT_Cell,
  MRT_Column,
  MRT_Row,
  MRT_RowData,
  MRT_TableInstance,
} from "material-react-table";

interface CellProps<TData extends MRT_RowData, TValue = unknown> {
  cell: MRT_Cell<TData, TValue>;
  column: MRT_Column<TData, TValue>;
  renderedCellValue: React.ReactNode;
  row: MRT_Row<TData>;
  rowRef?: React.RefObject<HTMLTableRowElement>;
  staticColumnIndex?: number;
  staticRowIndex?: number;
  table: MRT_TableInstance<TData>;
}

export type { CellProps };
