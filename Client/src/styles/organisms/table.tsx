import React from "react";

type Props = {
  headers?: any[];
  data: any[];
};

export const Table = ({ headers, data }: Props) => (
  <table>
    <thead>
      <tr>
        {headers &&
          headers.map(header => <td key={header.id}>{header.label}</td>)}
      </tr>
    </thead>
    <tbody>
      {data.map(item => (
        <tr>
          {Object.values(item).map((datum: any, i) => (
            <td key={i}>{datum}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
