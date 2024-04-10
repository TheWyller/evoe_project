import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: Arial, sans-serif;
`;

export const PageNumber = styled.span<{ active?: boolean }>`
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: ${({ active }) => (active ? "bold" : "unset")};
  color: ${({ active }) => (active ? "var(--Black-100)" : "var(--White)")};
`;

export const Arrow = styled.span`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

export const Ellipsis = styled.span`
  font-size: 14px;
  font-style: italic;
`;
