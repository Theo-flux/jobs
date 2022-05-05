import { GeneralProps } from "../../types"

function Div({className, children}: GeneralProps ) {
  return (
    <div className={` ${className}`}>
        {children}
    </div>
  )
}

export default Div;