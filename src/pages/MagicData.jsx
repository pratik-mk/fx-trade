import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MagicDataTable from "../components/MagicDataTable/MagicDataTable";
import { BASE_URL } from "../constant";

const MagicData = () => {
  let { acc_no } = useParams();
  const [magicNumData, setMagicNumData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `/api/data/account/magic_nos?account=${acc_no}`
      );
      // console.log('RES 1', response.data.data.magic_numbers)

      // Wait for magicData to be updated
      await Promise.all(
        response.data.data.magic_numbers.map(async (magicNumber, index) => {
          try {
            const response = await axios.get(
              `/api/data/account/trades_stats?account=${acc_no}&magic_no=${magicNumber}`
            );
            // console.log(`RES ${index + 2}`, response)
            setMagicNumData((prevData) => [...prevData, response.data.data]);
            // Handle response here if needed
          } catch (error) {
            console.log(error.response);
          }
        })
      );
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, [acc_no]);

  return (
    <div>
      <MagicDataTable data={magicNumData} />
    </div>
  );
};

export default MagicData;
