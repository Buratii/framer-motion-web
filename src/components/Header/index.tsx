import React from 'react';

import { Container } from './styles';
import { useViewportScroll, useTransform } from 'framer-motion';

const Header: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const headerY  = useTransform( scrollYProgress,
    [0.0415, 0.057],
    ['0%', '-100%']
  );

  return (
    <Container style={{ y: headerY }} />
  );
};

export default Header;
