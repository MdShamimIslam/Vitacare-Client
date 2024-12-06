
import {faqs} from "../../assets/data/faqs";
import FaqItem from "./FaqItem";

const FaqList = () => {
  return (
    <ul className=" mt-[30px] md:mt-[40px] lg:mt-[100px] ">
      {
        faqs?.map((item,index)=> <FaqItem key={index} item={item}/>)
      }
    </ul>
  )
}

export default FaqList;