import React, { createContext, useContext, useState } from 'react';

const AccordionContext = createContext();

export const useAccordion = () => useContext(AccordionContext);

export const AccordionProvider = ({ children }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
      {children}
    </AccordionContext.Provider>
  );
};

