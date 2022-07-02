import React from "react"
import {
  CityReservation,
  Container,
  TextContainer,
  DateReservation,
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
            <DateReservation>{dates}</DateReservation>
            <CityReservation>{city}</CityReservation>
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
            <CityReservation>{city}</CityReservation>
            <DateReservation>{dates}</DateReservation>
          </TextContainer>
        </Container>
      )

    case type === "homeRentalCars":
      return <Container homeRentalCars>Rental</Container>

    default:
      return <Container>default</Container>
  }
}
