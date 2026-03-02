import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { LuBrain } from "react-icons/lu";


function WesMind({ onClose }) {

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello Voyager 👋 Ask me anything." }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);


  const handleSubmit = async (e) => {
  e.preventDefault();

  const userMessage = { sender: "user", text: message };
  setMessages((prev) => [...prev, userMessage]);
  setMessage("");
  setIsTyping(true);

  try {
    console.log(message)
    const response = await fetch("https://sam-weslie-portfolio.vercel.app/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();

    console.log(data);
    

    const botReply = {
      sender: "bot",
      text: data.reply,
    };

    setMessages((prev) => [...prev, botReply]);

  } catch (error) {
    setMessages((prev) => [
      ...prev,
      { sender: "bot", text: "⚠️ Error connecting to AI." }
    ]);
  }

  setIsTyping(false);
};

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-25 right-5 md:top-auto md:bottom-5 md:right-5 z-50"
    >
      <Card className="w-75 h-120 md:w-90 md:h-110 bg-gradient-to-br 
      from-[#2e1065] via-[#1a122a] to-[#2e1065]  text-white shadow-2xl rounded-2xl border border-white/10 flex flex-col">
        
        <CardHeader className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>

          <CardTitle className="text-xl font-bold flex gap-1.5">
            <LuBrain size={25} className="mt-0.5"/> WesMind
          </CardTitle>
          <CardDescription className="text-gray-400">
            WesMind is personal AI assistant built using Google Gemini, trained on Sam's portfolio data.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1 overflow-y-auto px-4 space-y-3">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-3 py-2 rounded-xl text-sm max-w-[70%] ${
                  msg.sender === "user"
                    ? "bg-indigo-600 text-white"
                    : "bg-white/10 text-gray-200"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="px-4 py-2 rounded-xl bg-white/10 text-gray-300 text-sm flex gap-1">
                <span className="animate-bounce">.</span>
                <span className="animate-bounce delay-150">.</span>
                <span className="animate-bounce delay-300">.</span>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </CardContent>

        <div className="p-4 border-t border-white/10">
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />

            <Button
              type="submit"
              className="w-full bg-[var(--gold-rich)] hover:bg-[var(--gold-deep)] rounded-xl"
            >
              Send
            </Button>
          </form>
        </div>
      </Card>
    </motion.div>
  );
}

export default WesMind;