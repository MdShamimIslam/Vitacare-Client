
import { Helmet } from "react-helmet-async";
import { services } from "../assets/data/services";
import ServiceCard from "../components/Services/ServiceCard";

const Services = () => {
  return (
    <section>
      <Helmet>
        <title>VitaCare | Services</title>
      </Helmet>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]">
          {services?.map((item, index) => (
            <ServiceCard key={index} index={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
