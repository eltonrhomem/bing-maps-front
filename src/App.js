
import React from 'react';
// import { BingMap, Pushpin } from 'react-bingmaps';
import { ReactBingmaps } from 'react-bingmaps';

const App = () => {
  const bingMapKey = 'AkoUyk_rkS7vfSNFXtRzY94iIS37S71WC_bT51SMNrM-G8oO0k3Y4V6pYHNQSs2u';

  const mapOptions = {
    credentials: bingMapKey,
    center: [-19.4762486, -42.5688354], // coordenadas do centro do mapa
    zoom: 10 // nível de zoom do mapa
  };

  const pushpinOptions = [
                            {
                              location: [-19.4762486, -42.5688354], // coordenadas do marcador
                              option: { color: 'red', 
                                        title: 'minha casa' 
                                      }, // cor do marcador
                               "addHandler": {"type" : "click", callback: () => alert('cliquei num pushpin') }
                              
                            },
                            {
                              location: [-19.46929065, -42.5661732], // coordenadas do marcador
                              option: { color: 'blue', 
                                        title: 'Algum lugar em Rua Manoel Izidio' 
                                      }, // cor do marcador
                               "addHandler": {"type" : "click", callback: () => alert('cliquei num pushpin') }
                              
                            },
                          ]

  return (
    <ReactBingmaps
      id="meu-mapa"
      mapOptions={mapOptions}
      center={[-19.4762486, -42.5688354]}
      bingmapKey={bingMapKey}
      pushPins={pushpinOptions}
      style={{ width: '100%', height: '400px' }}
    >
      {/* <Pushpin {...pushpinOptions} /> */}
    </ReactBingmaps>
  );
};

export default App;


// import React from "react";
// import BingMapsReact from "bingmaps-react";

// function App() {
//   return (
//     <div>
//         <BingMapsReact
//           bingMapsKey="AkoUyk_rkS7vfSNFXtRzY94iIS37S71WC_bT51SMNrM-G8oO0k3Y4V6pYHNQSs2u"
//           height="100vh"
//           width="100vw"
//           viewOptions={{
//                         center: { latitude: -19.4762486, longitude: -42.5688354 },
//                         zoom: 12,
//                         //MapTypeId: 'ordnanceSurvey',
//                       }}
//           pushPins={[
//                         {
//                           center: { latitude: -19.4762486, longitude: -42.5688354 },
//                           options: {title: 'minha casa'}
//                         },
//                         {
//                           center: { latitude: -19.46929065, longitude: -42.5661732 },
//                           options: {title: 'ponto qualquer'}
//                         }
//                   ]}
//         />
    
//     </div>

//   );
// }

// export default App;


