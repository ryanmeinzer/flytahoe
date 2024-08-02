import React from 'react';
import { Box } from '@mui/material';
import Script from 'next/script'

const Tickets: React.FC = () => {
  return (
    <>
      <Script src="https://js.stripe.com/v3/buy-button.js" defer />
      <Box sx={{ p: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div dangerouslySetInnerHTML={{
          __html: `
            <stripe-buy-button
              buy-button-id="buy_btn_1PjG3KFO3lqPKWwKhi80L19C"
              publishable-key="pk_live_i56Nbs7vZg0Csq7gnM0gWJW4"
            >
            </stripe-buy-button>
          `
        }} />
      </Box>
    </>
  );
};

export default Tickets;
