import React from 'react';
import WebSocketImpl from './src/chatModule/webSocketImpl';

const App = () => {
  const renderScreen = () => {
    return <WebSocketImpl />;
  };

  return <>{renderScreen()}</>;
};

export default App;
