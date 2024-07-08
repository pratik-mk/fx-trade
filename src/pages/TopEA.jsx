import React from "react";
import DashboardLayout from "../components/Layout/DashboardLayout";
import data from "../mockData/topEAResponse.json";
import { TOP_EA_COLUMNS } from "../utils/constant";
import EATable from "../components/Table/EATable/EATable";

const TopEA = () => {
  return (
    <DashboardLayout title={"Find Top EAs"}>
      {Object.keys(data.data.data).map((rowData, i) => (
        <div>
          <EATable
            key={i}
            rows={data.data.data[rowData].data}
            columns={TOP_EA_COLUMNS}
            isEven={rowData.split("-")[1] % 2 === 0 ? true : false}
            rowData={rowData}
          />
        </div>
      ))}
    </DashboardLayout>
  );
};

export default TopEA;
