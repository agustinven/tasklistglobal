// SortButton.js
import React from 'react';
import styled from 'styled-components';
import { FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";

const SortingButton = styled.div`
  cursor: pointer;
  font-size: 24px;
  color: #fff;
`;

function SortButton({ sortOrder, sortAlphabetically }) {
  return (
    <SortingButton className="sort-button" onClick={sortAlphabetically}>
      {sortOrder === 'asc' ? <FaSortAlphaDown /> : <FaSortAlphaUp />}
    </SortingButton>
  );
}

export default SortButton;
