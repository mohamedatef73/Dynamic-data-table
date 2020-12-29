import React, { useState, useRef, useEffect } from 'react'
import './App.css';



export default function App() {
  const [rows, setRows] = useState(3)
  const [columns, setColumns] = useState(3)
  const activeCell = useRef(null)


  useEffect(() => {
    const firstCell = document.getElementById("firstCell")
    if (firstCell) {
      activeCell.current = firstCell
      activeCell.current.focus()
      activeCell.current.style.backgroundColor = 'pink';

    }

  }, [columns, rows])



  /**
   * to handle navigation using keyboard arrows
   */
  useEffect(() => {
    document.onkeydown = checkKey
  })


  function checkKey(event) {
    const { keyCode } = event;

    if (keyCode === 40) { //down key
      downKeyPressed()
    }

    if (keyCode === 38) { // up key
      upKeyPressed()
    }

    if (keyCode === 37) { // left key
      leftKeyPressed()
    }

    if (keyCode === 39) { //right key
      rightKeyPressed()
    }
  }


  function downKeyPressed() {
    if (activeCell.current) {
      let index = activeCell.current.cellIndex;
      let nextrow = activeCell.current.parentElement.nextElementSibling;
      if (nextrow != null) {
        let sibling = nextrow.cells[index];
        goToTarget(sibling);
      }
    }

  }

  function upKeyPressed() {
    if (activeCell.current) {
      let index = activeCell.current.cellIndex;
      let nextrow = activeCell.current.parentElement.previousElementSibling;
      if (nextrow != null) {
        let sibling = nextrow.cells[index];
        goToTarget(sibling);
      }
    }

  }

  function leftKeyPressed() {
    if (activeCell.current) {
      let sibling = activeCell.current.previousElementSibling;
      goToTarget(sibling);
    }
  }

  function rightKeyPressed() {
    if (activeCell.current) {
      let sibling = activeCell.current.nextElementSibling;
      goToTarget(sibling);
    }
  }


  function goToTarget(sibling) {
    if (sibling != null) {
      activeCell.current.focus();
      activeCell.current.style.backgroundColor = '';
      sibling.focus();
      sibling.style.backgroundColor = 'pink';
      activeCell.current = sibling;
    }
  }

  return (
    <div className='container pt-5'>
      <div className='row justify-content-center'>
        <div className='col-12 col-md-4'>
          <span>Number Of Rows</span>:

<input type='number' value={rows}
            onChange={e => setRows(e.target.value)} />


        </div>

        <div className='col-12 col-md-4'>

          <span>Number Of Columns</span>:
                        <input type='number' value={columns}
            onChange={e => setColumns(e.target.value)} />
        </div>
        <div className="col-12 my-3 d-flex justify-content-center">
          <button className="btn btn-outline-success mx-2" onClick={upKeyPressed}>Up</button>
          <button className="btn btn-outline-success mx-2" onClick={downKeyPressed}>Down</button>

          <button className="btn btn-outline-success mx-2" onClick={leftKeyPressed}>Left</button>
          <button className="btn btn-outline-success mx-2" onClick={rightKeyPressed}>Right</button>
        </div>
      </div>
      <div className='row my-5'>
        <table>
          <tbody>
            {
              Array.from({ length: rows }, (val, i) => i + 1).map((row) => <tr key={row} >
                {Array.from({ length: columns }, (val, i) => i + 1).map((col) =>
                  <td ref={activeCell} id={row === 1 && col === 1 ? 'firstCell' : ''} key={row + col} >
                    {row + col}</td>)}
              </tr>)
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

