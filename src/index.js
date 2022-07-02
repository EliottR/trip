import React from "react"
import ReactDOM from "react-dom/client"
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home/Index"
import { GlobalStyle } from "./Syled"
import { Navbar } from "./Components/Navbar/Index"
import { Account } from "./Pages/Account/Index"
import { Search } from "./Pages/Search/Index"
import { Favorites } from "./Pages/Favorites/Index"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  </>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister()
