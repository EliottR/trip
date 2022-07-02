import { Card } from "../../Components/Card/Index"
import { TitlePage } from "../../Components/Titles/Page/Index"
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff"
import { TitleCard } from "../../Components/Titles/Card/Index"
import { ContainerReservation } from "./Styled"
import puntaCana from "../../Assets/punta-cana.jpg"
import ibiza from "../../Assets/ibiza.jpg"
import newYork from "../../Assets/new-york.jpg"

export const Home = () => {
  const dataReservations = [
    {
      type: "HomeReservation",
      dates: "From July 4th to July 22nd",
      city: "Punta Cana",
      icon: <FlightTakeoffIcon />,
      img: puntaCana,
    },
    {
      type: "HomeReservation",
      dates: "From July 4th to July 22nd",
      city: "Punta Cana",
      icon: <FlightTakeoffIcon />,
      img: puntaCana,
    },
    {
      type: "HomeReservation",
      dates: "From July 4th to July 22nd",
      city: "Punta Cana",
      icon: <FlightTakeoffIcon />,
      img: puntaCana,
    },
  ]

  const dataPromotions = [
    {
      type: "homePromotion",
      city: "Ibiza",
      dates: "September 2022",
      price: 259,
      img: ibiza,
    },
    {
      type: "homePromotion",
      city: "New York",
      dates: "October 2022",
      price: 599,
      img: newYork,
    },
  ]

  const renderDataReservations = () => {
    return dataReservations.map((el, key) => {
      return (
        <Card
          type={el.type}
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
        <Card
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

  return (
    <div>
      <TitlePage text={"Home"} />
      <TitleCard text={"My reservations"} />
      <ContainerReservation>{renderDataReservations()}</ContainerReservation>
      <TitleCard text={"Promotions"} />
      <ContainerReservation>{renderDataPromotions()}</ContainerReservation>
    </div>
  )
}
