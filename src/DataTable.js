import React, { useState, useRef, useEffect } from 'react'
import './App.css';


export default function DataTable() {
    const [rows, setRows] = useState(3)
    const [columns, setColumns] = useState(3)
    const activeCell = useRef(null)

    function handelNavigation(event) {
        const { keyCode } = event;

        if (keyCode === 40) { //down

            activeCell.current.focus()
            if (activeCell.current && activeCell.current.previousSibling) {
                activeCell.current.previousSibling.focus();
            }
        }
        if (keyCode === 38) { // up

            activeCell.current.focus()
            if (activeCell.current && activeCell.current.nextSibling) {
                activeCell.current.nextSibling.focus();
            }

        }

        if (keyCode === 37) { // left

            activeCell.current.focus()
            if (activeCell.current && activeCell.current.previousSibling) {
                activeCell.current.previousSibling.focus();
            }

        }

        if (keyCode === 39) { //right

            activeCell.current.focus()
            if (activeCell.current && activeCell.current.nextSibling) {
                activeCell.current.nextSibling.focus();
            }

        }
    }


    function focusCell() {
        activeCell.current.focus()
    }

    function gotToThePraviousCell() {
        activeCell.current.focus()
        if (activeCell.current && activeCell.current.previousSibling) {
            activeCell.current.previousSibling.focus();
        }

    }


    function gotToTheNextCell() {
     activeCell.current.focus()
        if (activeCell.current && activeCell.current.nextSibling) {
            activeCell.current.nextSibling.focus();
        }
    }

    return (
        <div className='container pt-5'>
            <div className='row' >
                <div className='col-12 col-md-6'>
                    <span>Number Of Rows</span> :

                        <input type='number' value={rows}
                        onChange={e => setRows(e.target.value)} />
                </div>

                <div className='col-12 col-md-6'>

                    <span>Number Of Columns</span> :

                        <input type='number' value={columns}
                        onChange={e => setColumns(e.target.value)} />
                </div>
                <div className="col-12">
                    <button >Up</button>
                    <button>Down</button>

                    <button onClick={gotToThePraviousCell}>Left</button>
                    <button onClick={gotToTheNextCell}>Right</button>
                </div>
            </div>
            <div className='row my-5'>
                <table>
                    <tbody>
                        {
                            Array.from({ length: rows }, (val, i) => i + 1).map((row) => <tr key={row} ref={activeCell}>
                                {Array.from({ length: columns }, (val, i) => i + 1).map((col) =>
                                    <td onKeyDown={handelNavigation} tabIndex="1" onClick={focusCell}  key={row+col} >
                                        {row + col}</td>)}
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

