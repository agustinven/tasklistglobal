import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTasks } from "react-icons/fa";

const FilterButton = styled.div`
  cursor: pointer;
  font-size: 24px;
  color: #fff;
  position: relative;
`;

const DropdownContent = styled.div`
  display: ${({ showOptions }) => (showOptions ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  top: 100%;
  left: 0;
`;

const DropdownItem = styled.div`
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  color: #333;
  cursor: pointer;
  font-size: 14px; 
  &:hover {
    background-color: #ddd;
  }
`;

function FilterDropdown({ filter, changeFilter }) {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleFilterChange = (newFilter) => {
    changeFilter(newFilter);
    setShowOptions(false);
  };

  return (
    <div className="filter-dropdown">
      <FilterButton className="filter-button" onClick={toggleOptions}>
        <FaTasks />
        <DropdownContent showOptions={showOptions}>
          <DropdownItem onClick={() => handleFilterChange("all")}>Mostrar todas</DropdownItem>
          <DropdownItem onClick={() => handleFilterChange("completed")}>Mostrar completadas</DropdownItem>
          <DropdownItem onClick={() => handleFilterChange("pending")}>Mostrar pendientes</DropdownItem>
        </DropdownContent>
      </FilterButton>
    </div>
  );
}

export default FilterDropdown;
