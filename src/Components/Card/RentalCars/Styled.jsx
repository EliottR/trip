import styled from "styled-components"

export const Container = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 1rem;
  min-width: 10rem;
  height: 10rem;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
`
export const PriceContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ModelContainer = styled.div`
  position: absolute;
  font-weight: 600;
  font-size: 0.75rem;
`

export const Price = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.25rem;
`
