import { TitlePage } from "../../Components/Titles/Page/Index"
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff"
import { TitleCard } from "../../Components/Titles/Card/Index"
import { ContainerCards } from "./Styled"
import puntaCana from "../../Assets/punta-cana.jpg"
import ibiza from "../../Assets/ibiza.jpg"
import newYork from "../../Assets/new-york.jpg"
import car1 from "../../Assets/car1.jpg"
import car2 from "../../Assets/car2.jpg"
import car3 from "../../Assets/car3.jpg"
import { CardPromotion } from "../../Components/Card/Promotion/Index"
import { CardReservation } from "../../Components/Card/Reservation/Index"
import { CardRentalCars } from "../../Components/Card/RentalCars/Index"
import { Navbar } from "../../Components/Navbar/Index"
import { useEffect, useRef, useState } from "react"

export const Home = () => {
  const navRef = useRef()
  const [margin, setMargin] = useState(null)

  useEffect(() => {
    setMargin(`
      ${
        parseInt(getComputedStyle(navRef.current).height) +
        parseInt(getComputedStyle(navRef.current).padding) * 2 +
        16
      }px`)
  }, [])

  const dataReservations = [
    {
      dates: "From July 4th to July 22nd",
      city: "Punta Cana",
      icon: <FlightTakeoffIcon />,
      img: puntaCana,
    },
    {
      dates: "From July 4th to July 22nd",
      city: "Punta Cana",
      icon: <FlightTakeoffIcon />,
      img: puntaCana,
    },
    {
      dates: "From July 4th to July 22nd",
      city: "Punta Cana",
      icon: <FlightTakeoffIcon />,
      img: puntaCana,
    },
  ]

  const dataPromotions = [
    {
      city: "Ibiza",
      dates: "September 2022",
      price: 259,
      img: ibiza,
    },
    {
      city: "New York",
      dates: "October 2022",
      price: 599,
      img: newYork,
    },
  ]

  const dataRentalCars = [
    {
      model: "Ford Explorer",
      price: 400,
      img: car1,
    },
    {
      model: "Renault Clio IV",
      price: 279,
      img: car2,
    },
    {
      model: "Peugeot 208",
      price: 299,
      img: car3,
    },
  ]

  const renderDataReservations = () => {
    return dataReservations.map((el, key) => {
      return (
        <CardReservation
          dates={el.dates}
          city={el.city}
          icon={el.icon}
          image={el.img}
          key={key}
        />
      )
    })
  }

  const renderDataPromotions = () => {
    return dataPromotions.map((el, key) => {
      return (
        <CardPromotion
          type={el.type}
          city={el.city}
          dates={el.dates}
          price={el.price}
          image={el.img}
          key={key}
        />
      )
    })
  }

  const renderDataRentalCars = () => {
    return dataRentalCars.map((el, key) => {
      return (
        <CardRentalCars
          model={el.model}
          price={el.price}
          image={el.img}
          key={key}
        />
      )
    })
  }

  return (
    <>
      <div>
        <TitlePage text={"Home"} />
        <TitleCard text={"My reservations"} />
        <ContainerCards>{renderDataReservations()}</ContainerCards>
        <TitleCard text={"Promotions"} />
        <ContainerCards>{renderDataPromotions()}</ContainerCards>
        <TitleCard text={"Rent a car"} />
        <ContainerCards margin={margin}>
          {renderDataRentalCars()}
        </ContainerCards>
      </div>
      <Navbar ref={navRef} />
    </>
  )
}
