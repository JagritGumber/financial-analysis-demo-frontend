import { CustomSlider, Table } from "@/components";
import { fetchTable } from "@/features/table";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getObjArraySlice } from "@/lib";
import { TableItem } from "@/types";
import { useEffect, useState } from "react";

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const [numberOfEntries, setNumberOfEntries] = useState(10);
  const { tableData } = useAppSelector((state) => state.table);

  const [data, setData] = useState<TableItem[] | null>(null);

  useEffect(() => {
    dispatch(fetchTable());
  }, []);

  useEffect(() => {
    if (!tableData) {
      return;
    }

    setData(getObjArraySlice(tableData, numberOfEntries, "strike", 214.29));
  }, [tableData, numberOfEntries]);

  if (!data || !tableData) {
    return null;
  }

  return (
    <div className="flex max-h-screen flex-col gap-2 overflow-hidden p-2 md:p-4">
      <div>
        <label className="font-['Inter'] text-sm font-medium">Filter</label>
          <CustomSlider
            maxLimit={tableData.length}
            numberOfEntries={numberOfEntries}
            setNumberOfEntries={setNumberOfEntries}
          />
      </div>
      <Table data={data} />
    </div>
  );
};

export default Main;
