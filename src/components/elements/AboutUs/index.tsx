import { aboutUsHomepage } from "../../../Data/AboutUsData";
import AboutUsItem from "./AboutUsItem";

const AboutUs = () => {
    return (
        <>
            {aboutUsHomepage.map((item) => (
                <AboutUsItem
                    key={item.title}
                    title={item.title}
                    backgroundImage={item.backgroundImage}
                    content={item.content}
                    link={item.link}
                    className={item?.className}
                />
            ))}
        </>
    );
};

export default AboutUs;