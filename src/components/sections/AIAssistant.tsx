"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, Sparkles, X } from "lucide-react";
import { aiResponses } from "@/lib/data";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const quickPrompts = [
  { label: "Introduce Tanusha", key: "introduce" },
  { label: "Explain Projects", key: "projects" },
  { label: "Explain Skills", key: "skills" },
  { label: "Career Journey", key: "journey" },
];

function getAIResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("introduce") || lower.includes("who")) return aiResponses.introduce;
  if (lower.includes("project")) return aiResponses.projects;
  if (lower.includes("skill") || lower.includes("tech")) return aiResponses.skills;
  if (lower.includes("journey") || lower.includes("career") || lower.includes("experience"))
    return aiResponses.journey;
  return aiResponses.default;
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: aiResponses.default },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: getAIResponse(text) },
      ]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      {/* Floating trigger */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_30px_rgba(0,245,212,0.4)] transition-transform hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open Tanu AI assistant"
      >
        <Bot className="text-background" size={24} />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-primary" />
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed right-4 bottom-24 z-50 flex h-[500px] w-[calc(100vw-2rem)] max-w-md flex-col overflow-hidden rounded-2xl border border-white/10 bg-background/95 shadow-2xl backdrop-blur-xl sm:right-6"
            role="dialog"
            aria-label="Tanu AI Assistant"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-primary/10 to-secondary/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                  <Sparkles className="text-background" size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Tanu AI</h3>
                  <p className="text-xs text-white/50">Your guide to Tanusha&apos;s world</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close assistant"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-4 overflow-y-auto p-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary/20 text-white"
                        : "glass text-white/80"
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="glass flex gap-1 rounded-2xl px-4 py-3">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-2 w-2 rounded-full bg-primary"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick prompts */}
            <div className="flex flex-wrap gap-2 border-t border-white/5 px-4 py-3">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt.key}
                  onClick={() => sendMessage(prompt.label)}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60 transition-colors hover:border-primary/30 hover:text-primary"
                >
                  {prompt.label}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2 border-t border-white/10 p-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder="Ask me anything..."
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-primary/50 focus:outline-none"
                aria-label="Message input"
              />
              <Button size="icon" onClick={() => sendMessage(input)} aria-label="Send message">
                <Send size={16} />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
