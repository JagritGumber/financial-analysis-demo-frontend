interface TableItem {
  strike: number;
  percent_in_out_money: number;
  percent_max_risk: number;
  percent_cost_to_insure: number;
  sigma_break_even: number;
  percent_to_dbl: number;
  prob_above: number;
  opt_mid_price: number;
  percent_ask_time_value: number;
  delta: number;
  opt_open_int: number;
  black_scholes_ratio_siv: number;
  black_scholes_ratio_50_day: number;
  iv_hv: number;
  percent_bid_ask_spread: number;
  percent_return_1_sigma_max_risk: number;
}

export type { TableItem };
