import styled from "styled-components"

export const Container = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 1rem;

  ${({ homeReservation, homePromotion, homeRentalCars }) => {
    switch (true) {
      case homeReservation:
        return `
        min-width: calc(100% - 1.5rem);
        height: 5.5rem;
        padding: 0.75rem 1rem;
        display: flex;
        `

      case homePromotion:
        return `
        min-width: 17.5rem;
        height: 22.5rem;
        padding: 1rem;
        
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

export const DatesContainer = styled.div`
  ${({ homeReservation, homePromotion, homeRentalCars }) => {
    switch (true) {
      case homeReservation:
        return `
        font-weight: 400;
        font-size: 0.75rem;
        `

      case homePromotion:
        return `        
        `

      case homeRentalCars:
        return `background-color : blue`

      default:
        return ""
    }
  }}
`

export const CityContainer = styled.div`
  ${({ homeReservation, homePromotion, homeRentalCars }) => {
    switch (true) {
      case homeReservation:
        return `
        font-weight: 500;
        font-size: 0.75rem;
        background: red;
        `

      case homePromotion:
        return `
        font-weight: 600;
        font-size: 1.25rem;
        background: green; 
        `

      case homeRentalCars:
        return `background-color : blue`

      default:
        return ""
    }
  }}
`

export const IconReservation = styled.div`
  display: flex;
  align-items: center;
  color: white;
`
