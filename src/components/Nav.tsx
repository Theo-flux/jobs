import bg from "../images/bg.png";
import { Section } from "../shared";
import Search  from "./Search";

function Nav() {
  return (
    <Section className="">
      <div 
        className="w-11/12 mx-auto max-w-7xl h-full rounded-md py-[20px] md:py-8" 
        style= {{
          backgroundImage: `url( ${bg} )`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
         }}
      >
        
        <Search 
          className = "mx-auto w-11/12 max-w-3xl"
        />
      </div>
    </Section>
  )
}

export default Nav;
