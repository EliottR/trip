import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const StyledLink = styled(NavLink)`
  border: none;
  background: none;
  text-decoration: none;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  svg {
    color: #d3d3d3;
  }

  ${(props) => props.active === 0} {
    background-color: #0c0c0c;

    border-radius: 2rem;

    svg {
      color: white;
    }

    div {
      color: white;
      text-transform: capitalize;
      font-size: 1rem;
      transition: 0.5s;
      overflow: hidden;
    }
  }
`
