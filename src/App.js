import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/ApolloClient";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import pagesRoutes from "./routing/routes";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          {pagesRoutes.map((item) => (
            <Route path={item.link} element={<item.component />} />
          ))}
        </Routes>
      </BrowserRouter>
      <Footer />
    </ApolloProvider>
  );
}
