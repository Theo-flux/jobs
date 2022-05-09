import { Button } from "../shared"
import { GeneralProps } from "../types";

function Search( {className}: GeneralProps ){
    return(
        <form
            className={`${className} bg-white flex justify-between items-center p-1 outline-0 rounded`}
        >
            <span className="flex justify-between items-center w-[80%]">
                <i className="text-heather mr-2 ri-briefcase-line ml-4"></i>
                <input 
                    type="text"
                    placeholder="Titles, companies, expertise or benefits" 
                    className="tracking-[.04em] truncate font-roboto w-[100%] outline-0 py-2 placeholder:text-xs placeholder:text-heather placeholder:font-roboto"
                />
            </span>
            <Button className="rounded bg-dogerblue text-white" text="Search"/>
        </form>
    )
}

export default Search;