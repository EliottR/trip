import styled from "styled-components"

export const Container = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${({ homeReservation, homePromotion, homeRentalCars }) => {
    switch (true) {
      case homeReservation:
        return `
        min-width: calc(100% - 1.5rem);
        height: 5.5rem;
        border-radius: 1rem;
        padding: 0.75rem 1rem;
        display: flex;
        `

      case homePromotion:
        return `
        min-width: 17.5rem;
        height: 22.5rem;
        
        `

      case homeRentalCars:
        return `background-color : blue`

      default:
        return ""
    }
  }}
`
export const TextContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
`

export const DateReservation = styled.div`
  font-weight: 400;
  font-size: 0.75rem;
`

export const CityReservation = styled.div`
  font-weight: 500;
  font-size: 0.75rem;
`

export const IconReservation = styled.div`
  display: flex;
  align-items: center;
  color: white;
`
