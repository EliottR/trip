import React, { useState, useEffect } from "react"
import { NavButton } from "../Buttons/Navigation/Index"
import { Container } from "./Styled"
import HomeRoundedIcon from "@mui/icons-material/HomeRounded"
import SearchRoundedIcon from "@mui/icons-material/SearchRounded"
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded"
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded"
import { useLocation } from "react-router-dom"

export const Navbar = () => {
  const location = useLocation()

  const data = [
    { url: "/", icon: <HomeRoundedIcon />, text: "home" },
    { url: "/search", icon: <SearchRoundedIcon />, text: "search" },
    { url: "/favorites", icon: <FavoriteRoundedIcon />, text: "favorites" },
    { url: "/account", icon: <AccountCircleRoundedIcon />, text: "account" },
  ]

  const [isActive, setIsActive] = useState(location.pathname)

  useEffect(() => {
    setIsActive(location.pathname)
  }, [location.pathname, isActive])

  const renderData = () => {
    return data.map((el, key) => {
      return (
        <NavButton
          url={el.url}
          icon={el.icon}
          text={el.text}
          key={key}
          active={isActive === el.url}
        />
      )
    })
  }

  return <Container>{renderData()}</Container>
}
