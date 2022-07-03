import styled from "styled-components"

export const Container = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 1rem;

  min-width: calc(100% - 1.5rem);
  height: 5.5rem;
  padding: 0.75rem 1rem;
  display: flex;
`
export const TextContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
`

export const DatesContainer = styled.div`
  font-weight: 400;
  font-size: 0.75rem;
`

export const CityContainer = styled.div`
  font-weight: 500;
  font-size: 0.75rem;
  text-transform: capitalize;
`

export const IconReservation = styled.div`
  display: flex;
  align-items: center;
  color: white;
`
