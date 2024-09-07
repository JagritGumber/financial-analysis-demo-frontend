import { describe, expect, it } from "@jest/globals";
import { getTableData } from "./api";
import { TableItem } from "@/types";
import axios from "axios";

describe("Api Tests", () => {
  // The perfect scenario
  it("Should be an array and have items", async () => {
    const data = await getTableData();
    if ("message" in data) {
      expect(data).toEqual(
        expect.objectContaining({ message: expect.any(String) })
      );
      return;
    }
    expect((data as TableItem[]).length).toBeGreaterThan(0);
  });

  // The perfect scenario confirmation
  it("Should contain TableItems", async () => {
    const data = await getTableData();
    if ("message" in data) {
      expect(data).toEqual(
        expect.objectContaining({ message: expect.any(String) })
      );
      return;
    }
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          strike: expect.any(Number),
          percent_in_out_money: expect.any(Number),
          percent_max_risk: expect.any(Number),
          percent_cost_to_insure: expect.any(Number),
          sigma_break_even: expect.any(Number),
          percent_to_dbl: expect.any(Number),
          prob_above: expect.any(Number),
          opt_mid_price: expect.any(Number),
          percent_ask_time_value: expect.any(Number),
          delta: expect.any(Number),
          opt_open_int: expect.any(Number),
          black_scholes_ratio_siv: expect.any(Number),
          black_scholes_ratio_50_day: expect.any(Number),
          iv_hv: expect.any(Number),
          percent_bid_ask_spread: expect.any(Number),
          percent_return_1_sigma_max_risk: expect.any(Number),
        }),
      ])
    );
  });

  // Seeing if errors are handled correctly
  it("Should give an API Error", async () => {
    jest
      .spyOn(axios, "get")
      .mockImplementation(() => Promise.reject(new Error("API error")));
    const data = await getTableData();
    if ("message" in data) {
      expect(data).toEqual(
        expect.objectContaining({ message: expect.any(String) })
      );
      return;
    }
    expect(data).toEqual({ message: "API error" });
  });

  // If we got an empty array
  it("Should return an empty array", async () => {
    jest
      .spyOn(axios, "get")
      .mockImplementation(() => Promise.resolve({ data: [] }));
    const data = await getTableData();
    expect(data).toEqual([]);
  });

  // if somehow we got a non array response
  it("Should return an error for non-array response", async () => {
    jest
      .spyOn(axios, "get")
      .mockImplementation(() => Promise.resolve({ data: "not an array" }));
    const data = await getTableData();
    expect(data).toEqual({ message: "API error" });
  });

  // if somehow we got an object with invalid properties
  it("Should return an error for missing properties", async () => {
    jest
      .spyOn(axios, "get")
      .mockImplementation(() => Promise.resolve({ data: [{ strike: 1 }] }));
    const data = await getTableData();
    expect(data).toEqual({ message: "API error" });
  });

  // if the request somehow got timed out
  it("Should return an error for API timeout or network error", async () => {
    jest
      .spyOn(axios, "get")
      .mockImplementation(() => Promise.reject(new Error("timeout")));
    const data = await getTableData();
    expect(data).toEqual({ message: "timeout" });
  });
});
