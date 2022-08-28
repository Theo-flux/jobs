import React from "react";
import { Routes, Route } from "react-router-dom";
import { Div, Section } from "./shared";
import { Home } from "./components/home"

function Navigator() {
  return (
    <Section>
        <Div>
            <div className="py-8">
                <Routes>
                  <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
        </Div>
    </Section>
  )
}

export default Navigator;