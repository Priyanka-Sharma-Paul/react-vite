import React from "react";
import CsvDownload from "react-csv-downloader";
import { toast } from "react-toastify";

const ExportFile = ({ items }) => {
  const transformData = () => {
    const newData = items.map((item) => {
      return {
        Date: item.date,
        Task: item.name,
        Status: item.completed ? "Done" : "Not Completed",
      };
    });

    return newData;
  };

  const handleEmptyData = () => {
    toast.error("No data to export", { position: "top-center" });
  };

  return (
    <CsvDownload
      datas={transformData}
      handleEmpty={handleEmptyData}
      filename={"To-do-"+new Date().toLocaleString() + "-data.csv"}
    >
      <button className='export-btn'>Export Data</button>
    </CsvDownload>
  );
};

export default ExportFile;
