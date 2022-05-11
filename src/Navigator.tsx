import React from "react";
import { Routes, Route } from "react-router-dom";
import { Div, Section } from './shared';

function Navigator() {
  return (
    <Section>
        <Div>
            <div className="py-8">
                <Routes>
                  <Route path="/"/>
                </Routes>
            </div>
        </Div>
    </Section>
  )
}

export default Navigator;