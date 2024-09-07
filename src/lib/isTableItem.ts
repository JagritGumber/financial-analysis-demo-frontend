const isTableItem = (item: any) => {
  return (
    "strike" in item &&
    "percent_in_out_money" in item &&
    "percent_max_risk" in item &&
    "percent_cost_to_insure" in item &&
    "sigma_break_even" in item &&
    "percent_to_dbl" in item &&
    "prob_above" in item &&
    "opt_mid_price" in item &&
    "percent_ask_time_value" in item &&
    "delta" in item &&
    "opt_open_int" in item &&
    "black_scholes_ratio_siv" in item &&
    "black_scholes_ratio_50_day" in item &&
    "iv_hv" in item &&
    "percent_bid_ask_spread" in item &&
    "percent_return_1_sigma_max_risk" in item
  );
};

export { isTableItem };
