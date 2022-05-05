import React from 'react'
import { GeneralProps } from "../../types";



const Section = ({ className, children}: GeneralProps) => {
    return(
        <section className={`${className}`}>
            {children}
        </section>
    )
}

export default Section;