import React, { useState } from "react";

interface AccordionData {
    title: string;
    content?: string;
    listContent?: string[];
}
interface AccordionProps {
    accordionData: AccordionData[];
    accordionStyle?: string;
}

interface Active {
    key?: number;
}

const Accordion: React.FC<AccordionProps> = ({ accordionData, accordionStyle }) => {
    const [isActive, setIsActive] = useState<Active>({});

    const handleToggle = (key: number) => {
        if (isActive.key === key) {
            setIsActive({});
        } else {
            setIsActive({key: key})
        }
    };
    return (
        <>
            <div className="accordion" id="accordionFAQ">
                {accordionData.map((item, i) =>
                    <div className="accordion-item" key={i}>
                        <h2 className="accordion-header" onClick={() => handleToggle(i)}>
                            <button className={( isActive.key === i)  ? "accordion-button text-heading-5 " : `accordion-button text-heading-5 collapsed ${accordionStyle}`}>{item.title}</button>
                        </h2>
                        <div className={(isActive.key === i) ? "accordion-collapse collapse show" : "accordion-collapse collapse "}>
                            {item.content && <div className="accordion-body">{item.content}</div>}
                            {item.listContent &&
                                <ul className="list-style-disc ml-40">
                                    {item.listContent?.map((li, liIndex) => (
                                        <li className="ms-1" key={liIndex}>{li}</li>
                                    ))}
                                </ul>
                            }
                            <div className="accordion-body"></div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Accordion;