import { AnimatePresence } from "framer-motion"
import React, { useState } from "react"
import {
  CityContainer,
  Container,
  TextContainer,
  DatesContainer,
  PriceContainer,
} from "./Styled"

export const CardPromotion = (props) => {
  const { dates, city, image, price } = props
  const [isOpen, setIsOpen] = useState(false)

  const handleCard = () => {
    setIsOpen(!isOpen)
    console.log("ok")
  }

  return (
    <AnimatePresence>
      <Container
        onClick={handleCard}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <TextContainer>
          <CityContainer>{city}</CityContainer>
          <DatesContainer>{dates}</DatesContainer>
        </TextContainer>
        <PriceContainer>{price} €</PriceContainer>
      </Container>
    </AnimatePresence>
  )
}
