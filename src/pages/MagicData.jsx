import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import MagicDataTable from "../components/MagicDataTable/MagicDataTable";
import { getAllTrades } from "../services/api";

const MagicData = () => {
  let { acc_no } = useParams();
  const [magicNumData, setMagicNumData] = useState([]);

  const fetchAllTrades = useCallback(async () => {
    const response = await getAllTrades(acc_no);
    setMagicNumData(response.data.data.data);
  }, [acc_no]);

  useEffect(() => {
    fetchAllTrades();
  }, [fetchAllTrades]);

  return (
    <div>
      <MagicDataTable data={magicNumData} />
    </div>
  );
};

export default MagicData;
