import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 100%;
  height: 200px;
  background: rgba(0, 0, 0, 0.1);

  position: fixed;
  top: 0;
  z-index: 9999;
`;
