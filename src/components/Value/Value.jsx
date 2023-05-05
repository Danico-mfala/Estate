import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from "../../utils/accordion";
import { motion } from "framer-motion";

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* Letf side */}
        <motion.div
          initial={{ x: "-7rem" }}
          animate={{ x: -1, opacity: 1 }}
          transition={{
            duration: 2,
            type: "spring",
          }}
        >
          <div className="v-left">
            <div className="image-container">
              <img src="./value.png" alt="" />
            </div>
          </div>
        </motion.div>
        {/* right side */}
        <motion.div
          initial={{ x: "7rem" }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "spring",
          }}
        >
          {" "}
          <div className="flexColStart v-right">
            <span className="orangeText">Our Value</span>
            <span className="primaryText">Value We Give to You</span>
            <span className="secondaryText">
              We always ready to help by providing the best services for you.
              <br />
              We beleive a good place to live can make your life better
            </span>

            <Accordion
              className="accordion"
              allowMultipleExpanded={false}
              preExpanded={[0]}
            >
              {data.map((item, i) => {
                const [className, setClassName] = useState(null);
                return (
                  <AccordionItem
                    className={`accordionItem ${className}`}
                    key={i}
                    uiid={i}
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton className="flexCenter accordionButton">
                        <AccordionItemState>
                          {({ expanded }) =>
                            expanded
                              ? setClassName("expanded")
                              : setClassName("collapsed")
                          }
                        </AccordionItemState>

                        <div className="flexCenter icon">{item.icon}</div>
                        <span className="primaryText">{item.heading}</span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Value;
