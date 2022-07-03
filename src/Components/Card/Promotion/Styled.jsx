import styled from "styled-components"

export const Container = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 1rem;
  min-width: 17.5rem;
  height: 22.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TextContainer = styled.div`
  flex-grow: 1;
  color: white;
`

export const DatesContainer = styled.div``

export const CityContainer = styled.div`
  font-weight: 600;
  font-size: 1.25rem;
  text-transform: capitalize;
`

export const PriceContainer = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.25rem;
  background-color: white;
  width: fit-content;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  margin-left: auto;
  box-shadow: 0 0 40px #0000003b;
`
