import checked from "../images/icon-check.svg";
import { useState} from "react";

const Check = () => {

    const [check, setCheck] = useState(false);

    const toggleCheck = () => {
        setCheck(!check);
        console.log(check)
      };
    


    return ( <>
    <span
                        className={`border p-1 rounded-full w-5 h-5 mr-2 check dark:border-gray-600 ${check
                          ? 'bg-gradient-to-b from-linearGradientFrom to-linearGradientTo' : ''}`}
                        onClick={toggleCheck}
                      >
                        <img src={checked} alt="" className={`w-3 ${check ? 'block' : 'hidden'}`} />
                      </span>
    </> );
}
 
export default Check;