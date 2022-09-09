import React from 'react';
import withLayoutConfig from '../withLayoutConfig';
import { Typography } from '@ds';

const Home: React.FC = () => {
  return <Typography variant='title'>homepage</Typography>
}

export default withLayoutConfig(<Home />);