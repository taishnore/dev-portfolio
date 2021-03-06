import styled from "styled-components";

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;

    left: ${({ open }) => (open ? 0 : "-100%")};
    bottom: 0;
    right: 0;
    height: 90vh;
    width: 100vw;
    padding-top: 3.5rem;
    transition: all 0.5s ease;

    li {
      color: #fff;
    }
  }
`;
