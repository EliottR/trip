import React from "react"
import {
  CityContainer,
  Container,
  TextContainer,
  DatesContainer,
  IconReservation,
} from "./Styled"

export const CardReservation = (props) => {
  const { dates, city, icon, image } = props

  return (
    <Container
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
}
