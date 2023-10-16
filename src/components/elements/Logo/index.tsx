import { LogoComponent } from "./LogoComponent";
import { logos } from "../../../Data/Logo";

const Logos = () => {
    return (
        <>
            {logos.map((logo) => (
                <LogoComponent key={logo} logo={logo} />
            ))}
        </>
    );
};

export default Logos;