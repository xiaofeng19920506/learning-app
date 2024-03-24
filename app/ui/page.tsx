'use client';
 
import { useChat } from 'ai/react';
import { useEffect, useRef, useState } from 'react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({api: '/protected/api/chat'});
  const chatContainer = useRef<HTMLDivElement | null>(null);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);

  const scrollToBottom = () => {
    if (chatContainer.current) {
      chatContainer.current.scrollTop = chatContainer.current.scrollHeight;
    }
  };

  // Update container height when it changes
  useEffect(() => {
    if (chatContainer.current) {
      setContainerHeight(chatContainer.current.scrollHeight);
    }
  }, [chatContainer.current?.scrollHeight]);

  // Scroll to bottom when component mounts or chat content updates
  useEffect(() => {
    scrollToBottom();
  }, [containerHeight]);

  return (
    <div className="relative w-full flex flex-col py-10 mx-auto overflow-y-auto" ref={chatContainer}>

      {messages.map(message => (
        <div key={m.id} className="whitespace-pre-wrap" >
          {message.role === 'user' ? 'User: ' : 'AI: '}
          {message.content}
        </div>
      ))}
      <form onSubmit={handleSubmit} className="fixed bottom-0 w-full max-w-[60%]">
        <input
          className="bottom-0 w-full p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
