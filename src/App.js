import React, { useState } from "react"
import './App.css';

const TableContent = () => {

  const [rowsNumber, setRowsNumber] = useState(5)
  const [colNumber, setColNumber] = useState(5)

  return (
    <div className='container pt-5'>
      <div className="row">
        <div className="col-12 col-md-6">
          <span>ROWS:</span>  <input value={rowsNumber} type='number' onChange={e => setRowsNumber(e.target.value)} />
        </div>
        <div className="col-12 col-md-6">
          <span>COLUMNS:</span>  <input value={colNumber} type='number' onChange={e => setColNumber(e.target.value)} />
        </div>
      </div>

      <div className="row my-5">
        <table>
          <tbody>
          {
            Array.from({length: rowsNumber}).map((row, i) =>  <tr key={i}>
              {Array.from({length: colNumber}).map((col, i) => <td key={i}>{i}</td>)}
            </tr>)
          }
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default TableContent;

