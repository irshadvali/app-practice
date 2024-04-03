import React, { useState } from "react";
// import { Data } from "h"; // Assuming you have a types file with the Data type

function Shorttable() {
   const [data, setData] = useState<any[]>([]);
  const [order, setOrder] = useState<"ASC" | "DSC">("ASC");

  const sorting = (col: any) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) => {
        if (col === "est_date") {
          const dateA = new Date(a[col]).toLocaleString("en-US", {
            timeZone: "America/New_York", // EST timezone
          });
          const dateB = new Date(b[col]).toLocaleString("en-US", {
            timeZone: "America/New_York", // EST timezone
          });
          return dateA > dateB ? 1 : -1;
        } else {
          return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1;
        }
      });
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) => {
        if (col === "est_date") {
          const dateA = new Date(a[col]).toLocaleString("en-US", {
            timeZone: "America/New_York", // EST timezone
          });
          const dateB = new Date(b[col]).toLocaleString("en-US", {
            timeZone: "America/New_York", // EST timezone
          });
          return dateA < dateB ? 1 : -1;
        } else {
          return a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1;
        }
      });
      setData(sorted);
      setOrder("ASC");
    }
  };

  return (
    <div className="container">
      <table className="table with border">
        <thead>
          <tr>
            <th onClick={() => sorting("first_name")}>First Name</th>
            <th onClick={() => sorting("last_name")}>Last Name</th>
            <th onClick={() => sorting("email")}>Email</th>
            <th onClick={() => sorting("gender")}>Gender</th>
            <th onClick={() => sorting("est_date")}>EST Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x) => (
            <tr key={x.id}>
              <td>{x.first_name}</td>
              <td>{x.last_name}</td>
              <td>{x.email}</td>
              <td>{x.gender}</td>
              <td>{new Date(x.est_date).toLocaleString("en-US", {
                timeZone: "America/New_York", // EST timezone
              })}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Shorttable;
