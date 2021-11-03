import React from "react";
import { CartContextProvider } from "./context/context";
import { Route, Switch } from "wouter";
import HomePage from "./pages/home";
import myFavoritesPage from "./pages/myfavorites";
import CategoriePage from "./pages/CategoriePage";
import FavoritesPage from "./pages/favorites";
import DetailPage from "./pages/DetailPage";
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
  return (
    <CartContextProvider>
      <ScrollToTop />
      <Switch>
        <Route
          path="/"
          component={HomePage}
        />
        <Route
          path="/myfavorites"
          component={myFavoritesPage}
        />
        <Route
          path="/favorites"
          component={FavoritesPage}
        />
        <Route
          path="/categorie/:categorie"
          component={CategoriePage}
        />
        <Route
          path="/detail/:name"
          component={DetailPage}
        />
      </Switch>
    </CartContextProvider>
  )
}

