import { TableItem } from "@/types";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { useMemo } from "react";
import { BasicCell } from "@/components/Cell";
import { getColumns } from "./columns";

interface TableProps {
  data: TableItem[];
}

const Table: React.FC<Readonly<TableProps>> = ({ data }): JSX.Element => {
  const percentMaxSigmaRiskValuesArray = data.map(
    (item) => item.percent_return_1_sigma_max_risk,
  );
  const maxSigmaRiskValue = Math.max(...percentMaxSigmaRiskValuesArray);
  const columns = useMemo<MRT_ColumnDef<TableItem>[]>(
    () => getColumns(maxSigmaRiskValue),
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data,
    // Important settings to setup all the options we need and don't need
    enableDensityToggle: false,
    enableEditing: false,
    enableGlobalFilter: false,
    enableHiding: false,
    enableFullScreenToggle: false,
    enableColumnFilters: true,
    enablePagination: false,
    enableTableFooter: false,
    // Needed to give a fixed width to our columns
    layoutMode: "grid-no-grow",

    // Removes the Shadow from the table
    muiTablePaperProps: {
      elevation: 0,
    },
    // The actual styles for the table Container
    muiTableContainerProps: {
      sx: {
        borderRadius: "0.5rem",
        border: "1px solid #e4e4e7",
        maxHeight: "calc(100vh - 9rem)",
      },
    },

    defaultColumn: {
      muiTableHeadCellProps: {
        sx: {
          backgroundColor: "#0f172a",
          color: "#fff",
          font: "'Inter' 700 14px 1.42",
          padding: "0.5rem",
          textAlign: "center",
          "&:not(:last-of-type)": {
            borderRight: "1px solid #929292",
          },
          "& input, & svg": {
            color: "#fff",
            fill: "#fff",
          },
          "& .MuiFormControl-root": {
            minWidth: 0,
          },
          "& .MuiFormControl-root .MuiInputBase-root": {
            color: "#fff",
          },
        },
      },
      // Style resetting for custom components and addition of borders
      muiTableBodyCellProps: {
        sx: {
          padding: "0",
          fontFamily: "Roboto Mono",
          borderRight: "1px solid #b7b7b7",
          borderBottom: "1px solid #b7b7b7",
        },
      },
      Cell: BasicCell,
    },
    // Mostly style resetting
    muiTopToolbarProps: {
      sx: {
        "& .MuiBox-root": {
          padding: 0,
        },
        // This one for the svg icons on the top right
        "& .MuiBox-root > .MuiBox-root > .MuiBox-root": {
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
        },
      },
    },
  });
  return (
    <div className="relative overflow-hidden">
      <h3 className="absolute z-10 w-3/4 select-none text-lg font-semibold sm:w-5/6 sm:py-4 md:text-xl lg:py-2 lg:text-2xl">
        Apple Inc. (AAPL) &nbsp; $214.29 &nbsp;
        <span className="text-[#962121]">($-2.38) -1.1%</span>
      </h3>
      <MaterialReactTable table={table} />
    </div>
  );
};

export default Table;
