import React from 'react';
import { useAccordion } from '../context/AccordionContext';
import { Box, Button } from 'braid-design-system';

const Accordion = ({ children }) => (
  <Box>{children}</Box>
);

const AccordionItem = ({ index, children }) => {
  const { openIndex, setOpenIndex } = useAccordion();

  return (
    <Box>
      <Button onClick={() => setOpenIndex(openIndex === index ? null : index)}>
        {openIndex === index ? 'Hide Details' : 'Show Details'}
      </Button>
      {openIndex === index && <Box>{children}</Box>}
    </Box>
  );
};

Accordion.Item = AccordionItem;

export default Accordion;
