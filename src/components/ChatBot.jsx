import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle } from 'lucide-react';
import Button from './ui/Button';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi there! 👋 How can I help you regarding our construction machinery today?", sender: 'bot' }
    ]);
    const [input, setInput] = useState("");

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput("");

        // Simulate bot response
        setTimeout(() => {
            const botMsg = { id: Date.now() + 1, text: "Thanks for reaching out! Our team will get back to you shortly. In the meantime, feel free to browse our products.", sender: 'bot' };
            setMessages(prev => [...prev, botMsg]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            <div className="pointer-events-auto">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.9 }}
                            className="bg-white rounded-2xl shadow-2xl border border-gray-200 mb-4 w-80 md:w-96 overflow-hidden"
                        >
                            {/* Header */}
                            <div className="bg-secondary p-4 flex justify-between items-center text-white">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden p-1">
                                        <img src="/assets/chat-icon.jpg" alt="Bot" className="w-full h-full object-cover rounded-full" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold font-heading">Esscons Support</h3>
                                        <p className="text-xs text-green-400 flex items-center gap-1">
                                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Online
                                        </p>
                                    </div>
                                </div>
                                <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Messages */}
                            <div className="h-80 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-3">
                                {messages.map(msg => (
                                    <div
                                        key={msg.id}
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                            ? 'bg-primary text-secondary self-end rounded-br-none'
                                            : 'bg-white text-gray-700 border border-gray-100 self-start rounded-bl-none shadow-sm'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                ))}
                            </div>

                            {/* Input */}
                            <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type a message..."
                                    className="flex-grow px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-primary text-sm"
                                />
                                <button
                                    type="submit"
                                    className="p-2 rounded-full bg-secondary text-white hover:bg-primary hover:text-secondary transition-colors"
                                >
                                    <Send size={18} />
                                </button>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Toggle Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative group block"
                >
                    <div className={`w-16 h-16 rounded-full overflow-hidden border-4 shadow-xl transition-colors ${isOpen ? 'border-secondary' : 'border-primary'}`}>
                        <img src="/assets/chat-icon.jpg" alt="Chat" className="w-full h-full object-cover" />
                    </div>

                    {!isOpen && (
                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full border-2 border-white"></div>
                    )}
                </motion.button>
            </div>
        </div>
    );
};

export default ChatBot;
