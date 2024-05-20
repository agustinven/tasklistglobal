import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";

function DateSortButton({ sortOrder, sortDate }) {
  return (
    <div className="sort-button" onClick={sortDate}>
      <FaCalendarAlt />
      {sortOrder === 'asc' ? 'Asc' : 'Desc'} Date
    </div>
  );
}

export default DateSortButton;
