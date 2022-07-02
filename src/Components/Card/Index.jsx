import React from "react"
import {
  CityContainer,
  Container,
  TextContainer,
  DatesContainer,
  IconReservation,
} from "./Styled"

export const Card = (props) => {
  const { type, dates, city, icon, image } = props

  switch (true) {
    case type === "HomeReservation":
      return (
        <Container
          homeReservation
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <TextContainer>
            <DatesContainer>{dates}</DatesContainer>
            <CityContainer>{city}</CityContainer>
          </TextContainer>
          <IconReservation>{icon}</IconReservation>
        </Container>
      )

    case type === "homePromotion":
      return (
        <Container
          homePromotion
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <TextContainer>
            <CityContainer>{city}</CityContainer>
            <DatesContainer>{dates}</DatesContainer>
          </TextContainer>
        </Container>
      )

    case type === "homeRentalCars":
      return <Container homeRentalCars>Rental</Container>

    default:
      return <Container>default</Container>
  }
}
