import React, { useEffect, useRef } from 'react';
import M from "materialize-css";

const Dropdown = () => {

  let drop: any = useRef(null);

  useEffect(() => {
    M.Dropdown.init(drop.current);
  }, []);

  return (
    <div className="ri">
      <a className='dropdown-trigger btn' href='#' data-target='dropdown1' ref={drop}>Drop Me!</a>

      <ul id='dropdown1' className='dropdown-content'>
        <li><a href="#">one</a></li>
        <li><a href="#">two</a></li>
        <li className="divider" tabIndex={-1}/>
        <li><a href="#">three</a></li>
        <li><a href="#"><i className="material-icons">view_module</i>four</a></li>
        <li><a href="#"><i className="material-icons">cloud</i>five</a></li>
      </ul>
    </div>
  );
};

export default Dropdown;
