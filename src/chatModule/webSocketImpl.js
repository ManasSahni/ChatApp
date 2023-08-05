import * as React from 'react';
import ChatScreenComponent from './chatScreenComponent';
import UserForm from './userForm';

export default function WebSocketImpl() {
  const [serverState, setServerState] = React.useState('Loading...');
  const [messageText, setMessageText] = React.useState('');
  const [disableButton, setDisableButton] = React.useState(true);
  const [inputFieldEmpty, setInputFieldEmpty] = React.useState(true);
  const [serverMessages, setServerMessages] = React.useState([]);
  var ws = React.useRef(
    // new WebSocket('ws://w567l.sse.codesandbox.io/'),
    new WebSocket('ws://172.16.52.103:8000'),
  ).current;
  const [showChatScreen, setShowChatScreen] = React.useState(false);
  const [username, setUsername] = React.useState('');

  React.useEffect(() => {
    const serverMessagesList = [];
    ws.onopen = () => {
      setServerState('Online');
      setDisableButton(false);
    };
    ws.onclose = e => {
      setServerState('Offline');
      setDisableButton(true);
    };
    ws.onerror = e => {
      setServerState(e.message);
    };
    ws.onmessage = e => {
      serverMessagesList.push(e.data);
      setServerMessages([...serverMessagesList]);
    };
  }, []);
  const submitMessage = () => {
    ws.send(
      JSON.stringify({type: 'message', user: `${username}`, msg: messageText}),
    );
    setMessageText('');
    setInputFieldEmpty(true);
  };

  const handleUsernameSubmit = () => {
    setShowChatScreen(true);
  };

  return (
    <>
      {!showChatScreen ? (
        <UserForm
          username={username}
          setUsername={setUsername}
          handleUsernameSubmit={handleUsernameSubmit}
        />
      ) : (
        <ChatScreenComponent
          serverMessages={serverMessages}
          serverState={serverState}
          submitMessage={submitMessage}
          messageText={messageText}
          setMessageText={setMessageText}
          disableButton={disableButton}
          inputFieldEmpty={inputFieldEmpty}
          setInputFieldEmpty={setInputFieldEmpty}
          username={username}
        />
      )}
    </>
  );
}
