// import { getLCP, getFID, getCLS } from 'web-vitals';
// import ReactGA from 'react-ga';
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { initTranslation } from '../services/translation/i18n';
import { theme } from '../utils/theme/theme';

const App = () => {
  initTranslation();

  return (
    <ThemeProvider theme={theme}>
      <div />
    </ThemeProvider>
  );
};

// ReactGA.initialize('UA-283600114-01');
// ReactGA.pageview(window.location.pathname + window.location.search);

// function sendToGoogleAnalytics({ name, delta, value, id }) {
// Assumes the global `gtag()` function exists, see:
// https://developers.google.com/analytics/devguides/collection/ga4
// ReactGA.gtag('event', name, {
// Built-in params:
// value: delta, // Use `delta` so the value can be summed.
// Custom params:
// metric_id: id, // Needed to aggregate events.
// metric_value: value, // Optional.
// metric_delta: delta, // Optional.

// OPTIONAL: any additional params or debug info here.
// See: https://web.dev/debug-web-vitals-in-the-field/
// metric_rating: 'good' | 'ni' | 'poor',
// debug_info: '...',
// ...
// });
// }

// getCLS(sendToGoogleAnalytics);
// getFID(sendToGoogleAnalytics);
// getLCP(sendToGoogleAnalytics);

App.propTypes = {};

export default App;