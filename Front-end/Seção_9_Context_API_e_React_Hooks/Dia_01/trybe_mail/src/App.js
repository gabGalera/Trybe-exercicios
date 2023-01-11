import read from './icons/read.svg';
import unread from './icons/unread.svg';
import { useEffect, useState } from 'react';
import messagesList from './data/messages';
import './App.css';

function App() {
  const [messages, setMessages] = useState(messagesList);

  const setMessageStatus = (messageId, newStatus) => {
    const updatedMessages = messages
      .map((obj) => {
        if (obj.id === messageId) {
          return { ...obj, status: newStatus }
        }
        return obj
      })

    setMessages(updatedMessages)
  }

  const markAllAsRead = () => {
    const allAsRead = messages.map((m) => ({ ...m, status: 1 }));
    setMessages(allAsRead);
  };

  const markAllAsUnread = () => {
    const allAsRead = messages.map((m) => ({ ...m, status: 0 }));
    setMessages(allAsRead);
  };

  useEffect(() => {
    const isAllMessagesRead = messages.every(({ status }) => status === 1)

    if(isAllMessagesRead) {
      alert('Todas as mensagens foram lidas!')
    }
  }, [messages])

  return (
    <div className="App">
      <header>
        <h1>TrybeMail</h1>
      </header>
      <main>
        <ul className="messages-list">
        {messages.map((message) => {
          const messageClass = message.status === 1 
            ? 'message-read'
            : 'message-unread';

          return (
            <li key={ message.id }>
              <p className={`message-title ${messageClass}`}>
                {message.title}
              </p>
              <div>
                <button
                  type="button"
                  title="Marcar como lida"
                  onClick={ () => setMessageStatus(message.id, 1) }
                >
                  <img src={ read } alt="" />
                </button>
                <button
                  type="button"
                  title="Marcar como não lida"
                  onClick={ () => setMessageStatus(message.id, 0) }
                >
                  <img src={ unread } alt="" />
                </button>
              </div>
            </li>
          )}
        )}
        </ul>
        <div className="controls-container">
        <button
          type="button"
          onClick={ markAllAsRead }
        >
          <img src={ read } alt="" />
          Marcar todas como lida
        </button>

        <button
          type="button"
          onClick={ markAllAsUnread }
        >
          <img src={ unread } alt="" />
          Marcar todas como não lida
        </button>
      </div>
      </main>
    </div>
  );
}

export default App;
