import { CellProps, TableItem } from "@/types";
import { ColoredCell, ColoredPercentageCell } from "../Cell";
import { BasicHeader, BrokenHeader, DividedHeader } from "../Header";

const getColumns = (maxSigmaRiskValue: number) => [
  {
    header: "Strike",
    accessorKey: "strike",
    size: 110,
    Header: <BasicHeader value="Strike" />,
  },
  {
    header: "% In/Out Money",
    accessorKey: "percent_in_out_money",
    size: 130,
    Header: <BrokenHeader value="% In/Out Money" />,
    filterSelectOptions: ["In", "Out"],
    Cell: ColoredCell,
  },
  {
    header: "% Max Risk",
    accessorKey: "percent_max_risk",
    size: 120,
    Header: <BrokenHeader value="% Max Risk" />,
  },
  {
    header: "% Cost To Insure",
    accessorKey: "percent_cost_to_insure",
    size: 120,
    Header: <BrokenHeader value="% Cost To Insure" />,
  },
  {
    header: "Sigma Break Even",
    accessorKey: "sigma_break_even",
    size: 130,
    Header: <BrokenHeader value="Sigma Break Even" />,
  },
  {
    header: "% To Dbl",
    accessorKey: "percent_to_dbl",
    size: 100,
    Header: <BrokenHeader value="% To Dbl" />,
  },
  {
    header: "Prob Above",
    accessorKey: "prob_above",
    size: 130,
    Header: <BrokenHeader value="Prob Above" />,
  },
  {
    header: "Opt Mid Price",
    accessorKey: "opt_mid_price",
    size: 120,
    Header: <BrokenHeader value="Opt Mid Price" />,
  },
  {
    header: "% Ask Time Value",
    accessorKey: "percent_ask_time_value",
    size: 120,
    Header: <BrokenHeader value="% Ask Time Value" />,
  },
  {
    header: "Delta",
    accessorKey: "delta",
    size: 120,
    Header: <BasicHeader value="Delta" />,
  },
  {
    header: "Opt Open Int",
    accessorKey: "opt_open_int",
    size: 120,
    Header: <BrokenHeader value="Opt Open Int" />,
  },
  {
    header: "Black Scholes Ratio (SIV)",
    accessorKey: "black_scholes_ratio_siv",
    size: 140,
    Header: <BrokenHeader value="Black Scholes Ratio (SIV)" />,
  },
  {
    header: "Black Scholes Ratio (50 Day)",
    accessorKey: "black_scholes_ratio_50_day",
    size: 150,
    Header: <BrokenHeader value="Black Scholes Ratio (50 Day)" />,
  },
  {
    header: "IV/HV",
    accessorKey: "iv_hv",
    size: 120,
    Header: <BasicHeader value="IV/HV" />,
  },
  {
    header: "% Bid-Ask Spread",
    accessorKey: "percent_bid_ask_spread",
    size: 140,
    Header: <BrokenHeader value="% Bid-Ask Spread" />,
  },
  {
    header: "% Return 1 σ",
    accessorKey: "percent_return_1_sigma_max_risk",
    size: 160,
    Header: <DividedHeader value="% Return 1 σ/% Max Risk" />,
    Cell: (props: CellProps<TableItem>) => (
      <ColoredPercentageCell {...props} maxValue={maxSigmaRiskValue} />
    ),
  },
];

export { getColumns }