import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MapPin, Phone, Mail, Loader2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allProducts } from '../data/products';

// Simple keyword matching logic
const findAnswer = (input) => {
    const lowerInput = input.toLowerCase();

    // 1. Check for greeting
    if (lowerInput.match(/\b(hi|hello|hey|greetings)\b/)) {
        return {
            text: "Hello! Welcome to Esscons. I'm here to help you find the best construction machinery. How can I assist you today?",
            options: ['View Products', 'Contact Support', 'Company Info']
        };
    }

    // 2. Check for contact/address
    if (lowerInput.match(/\b(contact|address|location|where|email|phone|call)\b/)) {
        return {
            text: "You can visit us at our headquarters or reach out via phone/email:",
            component: (
                <div className="bg-gray-100 p-3 rounded-lg mt-2 text-xs space-y-2">
                    <div className="flex gap-2 items-start">
                        <MapPin size={14} className="text-primary mt-0.5" />
                        <span>Mancheswar Ind Estate, Bhubaneswar</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Phone size={14} className="text-primary" />
                        <span>(0674) 2587826</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Mail size={14} className="text-primary" />
                        <span>sahadevsahu@esscons.com</span>
                    </div>
                </div>
            )
        };
    }

    // 3. Check for specific products
    const matchedProduct = allProducts.find(p => lowerInput.includes(p.name.toLowerCase()) || lowerInput.includes(p.category.toLowerCase().slice(0, -1)));
    if (matchedProduct) {
        return {
            text: `We have excellent ${matchedProduct.category}! Here is our ${matchedProduct.name}:`,
            component: (
                <div className="bg-white border p-2 rounded-lg mt-2 shadow-sm">
                    <img src={matchedProduct.image} alt={matchedProduct.name} className="w-full h-24 object-contain mb-2 bg-gray-50 rounded" />
                    <div className="font-bold text-secondary text-xs">{matchedProduct.name}</div>
                    <div className="text-[10px] text-gray-500 line-clamp-2">{matchedProduct.desc}</div>
                    <Link to="/products" className="block text-center bg-primary text-secondary text-xs py-1 rounded mt-2 font-bold">View Details</Link>
                </div>
            )
        };
    }

    // 4. Broad categories
    if (lowerInput.includes('mixer') || lowerInput.includes('concrete')) {
        return {
            text: "We offer high-quality Concrete Mixers and Batching Plants. Would you like to see the details?",
            options: ['Show Mixers', 'View All Products']
        };
    }
    if (lowerInput.includes('roller') || lowerInput.includes('compactor')) {
        return {
            text: "Our Road Rollers are built for durability. We have Static and Vibratory models.",
            options: ['Show Rollers', 'View All Products']
        };
    }

    // Default fallback
    return {
        text: "I'm not sure I understood that correctly. Could you please specify if you're looking for Products, Services, or Contact info?",
        options: ['View Products', 'Contact Us', 'Our History']
    };
};

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Welcome to Esscons! 🚜 I'm your virtual assistant. Ask me about our machinery or services!", sender: 'bot' }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async (textInput) => {
        const userText = textInput || input;
        if (!userText.trim()) return;

        // Add User Message
        const userMsg = { id: Date.now(), text: userText, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        // Simulate network delay / thinking
        setTimeout(() => {
            const answer = findAnswer(userText);
            const botMsg = {
                id: Date.now() + 1,
                text: answer.text,
                component: answer.component,
                options: answer.options,
                sender: 'bot'
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1200);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none font-sans">
            <div className="pointer-events-auto">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.9 }}
                            className="bg-white rounded-2xl shadow-2xl border border-gray-200 mb-4 w-80 md:w-96 overflow-hidden flex flex-col max-h-[500px]"
                        >
                            {/* Header */}
                            <div className="bg-secondary p-4 flex justify-between items-center text-white shadow-md z-10">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden p-0.5 border border-primary/30">
                                            <img src="/assets/chat-icon.png" alt="Bot" className="w-full h-full object-cover rounded-full" />
                                        </div>
                                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-secondary rounded-full"></span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold font-heading text-sm">Scoop - AI Assistant</h3>
                                        <p className="text-[10px] text-gray-300">Typically replies instantly</p>
                                    </div>
                                </div>
                                <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors p-1 hover:bg-white/10 rounded">
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Messages Area */}
                            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-4">
                                <div className="text-center text-xs text-gray-400 my-2">Today</div>

                                {messages.map(msg => (
                                    <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                                        <div
                                            className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${msg.sender === 'user'
                                                ? 'bg-primary text-secondary rounded-br-none'
                                                : 'bg-white text-gray-700 border border-gray-100 rounded-bl-none'
                                                }`}
                                        >
                                            <p>{msg.text}</p>
                                            {msg.component}
                                        </div>

                                        {/* Quick Reply Options */}
                                        {msg.options && (
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {msg.options.map(opt => (
                                                    <button
                                                        key={opt}
                                                        onClick={() => handleSend(opt)}
                                                        className="bg-white border border-primary/50 text-secondary text-xs px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition-colors flex items-center gap-1 shadow-sm"
                                                    >
                                                        {opt} <ChevronRight size={12} />
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                        <span className="text-[10px] text-gray-400 mt-1 px-1">
                                            {new Date(msg.id).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                ))}

                                {isTyping && (
                                    <div className="self-start bg-white border border-gray-100 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-1 w-16 h-10">
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input Area */}
                            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type your question..."
                                    className="flex-grow px-4 py-2.5 bg-gray-50 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim()}
                                    className="p-2.5 rounded-full bg-secondary text-white hover:bg-primary hover:text-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
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
                    {/* Tooltip */}
                    <AnimatePresence>
                        {!isOpen && (
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-secondary px-3 py-1.5 rounded-lg shadow-lg text-sm font-bold whitespace-nowrap border border-gray-100"
                            >
                                Need Help? Chat with us!
                                <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45 border-t border-r border-gray-100"></div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className={`w-16 h-16 rounded-full overflow-hidden border-4 shadow-xl transition-all duration-300 ${isOpen ? 'border-secondary rotate-90 scale-90' : 'border-primary'}`}>
                        {isOpen ? (
                            <div className="w-full h-full bg-secondary text-white flex items-center justify-center">
                                <X size={32} />
                            </div>
                        ) : (
                            <img src="/assets/chat-icon.png" alt="Chat" className="w-full h-full object-cover" />
                        )}
                    </div>

                    {!isOpen && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </div>
                    )}
                </motion.button>
            </div>
        </div>
    );
};

export default ChatBot;
