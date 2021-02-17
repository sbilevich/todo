import React from 'react';

import './item-status-filter.css';


const filterButtons = [
  {name: 'all', label: 'All'},
  {name: 'active', label: 'Active'},
  {name: 'done', label: 'Done'}
] 


const ItemStatusFilter = ({filter, onFilter }) => {


    const buttons = filterButtons.map(({name, label}) => {
      const isActive = name === filter;
      const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary'); 
      const handleOnFilterClick = (e) => onFilter(name);
      return (
      <button key={name}
              type="button"
              className={classNames}
              onClick={handleOnFilterClick}>
                {label}
      </button>
      )
    })

      return (
        <div className="btn-group">
          {buttons}
        </div>
      );
      }     
export default ItemStatusFilter;
    

