import { apiUrl } from 'pages/api/apiUrl';
import React, { useEffect, useState } from 'react';

const Chat: React.FC = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    // Conexión al WebSocket en el puerto 8080
    const ws = new WebSocket(`ws://${apiUrl}/chat`);
    setSocket(ws);

    // Recibir mensajes desde el WebSocket
    ws.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    // Limpiar la conexión cuando el componente se desmonta
    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = () => {
    if (socket && message.trim() !== '') {
      // Enviar mensaje al servidor
      socket.send(message);
      setMessage(''); // Limpiar el input después de enviar el mensaje
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', width: '300px', position: 'fixed', bottom: '10px', right: '10px', backgroundColor: 'white' }}>
      <h3>Chat</h3>
      <div style={{ maxHeight: '200px', overflowY: 'scroll', marginBottom: '10px', border: '1px solid #ddd', padding: '5px' }}>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Escribe tu mensaje..."
        style={{ width: '80%', padding: '5px', marginRight: '5px' }}
        onKeyPress={(e) => e.key === 'Enter' ? sendMessage() : null} // Enviar con Enter
      />
      <button onClick={sendMessage} style={{ padding: '5px' }}>Enviar</button>
    </div>
  );
};

export default Chat;
