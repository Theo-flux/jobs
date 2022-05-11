import { GeneralProps } from "../../types"

function Div({className, children}: GeneralProps ) {
  return (
    <div className={`w-11/12 mx-auto max-w-7xl ${className}`}>
        {children}
    </div>
  )
}

export default Div;