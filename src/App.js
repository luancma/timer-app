import React from "react";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routers/Routers";
import { UserProvider } from "./providers/UserProvider";
export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routers />
      </UserProvider>
    </BrowserRouter>
  );
}
