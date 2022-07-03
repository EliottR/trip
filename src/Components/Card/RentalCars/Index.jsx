import { AnimatePresence } from "framer-motion"
import { ModelContainer, Container, PriceContainer, Price } from "./Styled"

export const CardRentalCars = (props) => {
  const { model, price, image } = props

  const handleCard = () => {
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
        <ModelContainer>{model}</ModelContainer>
        <PriceContainer>
          <div>From</div>
          <Price>{price} €</Price>
        </PriceContainer>
      </Container>
    </AnimatePresence>
  )
}
