import bg from "../images/bg.png";
import { Section } from "../shared";

function Nav() {
  return (
    <Section className="">
      <div 
        className="w-11/12 mx-auto max-w-7xl h-full rounded-md py-[40px] md:py-16" 
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
         }}
      >
        
      </div>
    </Section>
  )
}

export default Nav;
