import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator"

export const productsGenerator = quantity => {
    const items = [];
    for (let i = 0; i < quantity; i++) {
      items.push({ id: i, name: `Item name ${i}`, price: 2100 + i });
    }
    return items;
  };
  
  const products = productsGenerator(100);
  
  const columns = [];
  
  export default function TableName() {
    return (
      <div className="App">
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={products}
          columns={columns}
          pagination={paginationFactory({ sizePerPage: 5 })}
        />
      </div>
    );
  }