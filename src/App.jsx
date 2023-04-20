import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import AddPerson from "./Components/gift/AddPerson";
import Person from "./Components/gift/Person";
import Gift from "./Components/gift/Gift";
import EditPerson from "./Components/gift/EditPerson";
import GiftView from "./Components/gift/GiftView";
import EditGift from "./Components/gift/EditGift";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Login />} />
          <Route  path="/addperson" element={<AddPerson />} />
          <Route  path="/editperson" element={<EditPerson />} />
          <Route  path="/person" element={<Person />} />
          <Route  path="/gift" element={<GiftView />} />
          <Route  path="/addgift" element={<Gift />} />
          <Route  path="/editgift" element={<EditGift />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
