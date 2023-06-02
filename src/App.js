import React from "react";
import BingMapsReact from "bingmaps-react";

function App() {
  return (
    <BingMapsReact
      bingMapsKey="AkoUyk_rkS7vfSNFXtRzY94iIS37S71WC_bT51SMNrM-G8oO0k3Y4V6pYHNQSs2u"
      height="500px"
      width="500px"
      viewOptions={{
        center: { latitude: -19.4762486, longitude: -42.5688354 },
        zoom: 12,
      }}
      pushPins={[{
        center: { latitude: -19.4762486, longitude: -42.5688354 },
        options: {title: 'minha casa'}
      },
      {
        center: { latitude: -19.46929065, longitude: -42.5661732 },
        options: {title: 'ponto qualquer'}
      }
    ]}
    />
  );
}

export default App;
