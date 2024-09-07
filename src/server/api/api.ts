import { isTableItem } from "../../lib";
import { ApiError, TableItem } from "@/types";
import axios from "axios";

const getTableData = async (): Promise<TableItem[] | ApiError> => {
  try {
    const res = await axios.get(
      "https://frontendassignment-algo-one.netlify.app/table_data"
    );

    if (!(res.data instanceof Array)) {
      return {
        message: "API error",
      } as ApiError;
    }

    for (const item of res.data) {
      if (!isTableItem(item)) {
        return {
          message: "API error",
        } as ApiError;
      }
    }

    if (res.data) {
      return res.data as TableItem[];
    }

    return {
      message: "Something went wrong",
    } as ApiError;
    //
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : "API error",
    } as ApiError;
  }
};

export { getTableData };
