"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// الرسايل الترويجية والتشجيعية
const promoMessages = [
  "جائع؟ 🍕 اطلب وجبتك المفضل الآن بأفضل سعر!",
  "خصم 15% على أول طلب لك اليوم! 🎁",
  "هل جربت ساندوتش ماكي الجديد؟ 🍔 لا يفوتك!",
  "وصول سريع وطازج حتى باب بيتك 🚀",
];

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
}

export default function ChatClient() {
  const [openChat, setOpenChat] = useState(false);
  const [openChatInNewWindow, setOpenChatInNewWindow] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      sender: "bot",
      text: "مرحباً! 👋 هل تريد أي مساعدة اليوم في اختيار وجبتك؟",
    },
  ]);

  const chatBottomRef = useRef<HTMLDivElement>(null);

  // التمرير التلقائي لأسفل عند إضافة رسالة جديدة
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // تبديل الرسائل الترويجية عند إغلاق الشات
  useEffect(() => {
    if (openChat) return;

    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % promoMessages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [openChat]);

  // دالة إرسال الرسالة إلى الـ API Route
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input.trim();
    setInput("");

    // 1. إضافة رسالة المستخدم فوراً
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: userText,
    };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      // 2. إرسال الطلب إلى الـ API Route الخاص بـ Next.js
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chatInput: userText,
        }),
      });

      const data = await response.json();

      // 3. استلام الرد وإضافته
      if (response.ok && data?.reply) {
        setMessages((prev) => [
          ...prev,
          { id: (Date.now() + 1).toString(), sender: "bot", text: data.reply },
        ]);
      } else {
        console.error("Server Status:", response.status);
        console.error("Server Error Data:", data);
        throw new Error(data?.error || "Failed to fetch response");
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "حدث خطأ في الاتصال بالسيرفر. يرجى المحاولة لاحقاً.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed z-50 right-10 bottom-10 flex flex-col items-end gap-3">
      {/* ------------------- نافذة الشات عند الفتح ------------------- */}
      <AnimatePresence>
        {openChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="absolute bottom-full right-0 mb-3"
          >
            {/* السهم الناتئ */}
            <div className="w-4 h-4 bg-white border-b border-r border-slate-200 absolute -bottom-2 right-6 rotate-45 z-10"></div>

            {/* الحاوية الرئيسية */}
            <div
              className={`bg-white rounded-3xl border border-slate-100 shadow-2xl overflow-hidden transition-all duration-300 ${
                openChatInNewWindow ? "w-[90vw] sm:w-100 h-125" : "w-80 h-96"
              }`}
            >
              {/* Header */}
              <div className="bg-gray-900 text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="font-bold text-sm">مساعد MAKY</span>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setOpenChatInNewWindow(!openChatInNewWindow)}
                    className="text-slate-100 hover:text-white transition-colors p-1"
                    title={openChatInNewWindow ? "تصغير" : "تكبير"}
                  >
                    {openChatInNewWindow ? "🗗" : "⛶"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpenChat(false)}
                    className="text-slate-100 hover:text-white transition-colors p-1"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="p-4 flex flex-col justify-between h-[calc(100%-56px)] bg-slate-50/50">
                {/* منطقة الرسائل */}
                <div className="flex-1 overflow-y-auto space-y-3 mb-3 text-sm pr-1">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${
                        msg.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`p-3 rounded-2xl max-w-[85%] text-xs leading-relaxed ${
                          msg.sender === "user"
                            ? "bg-primary text-white rounded-tl-none shadow-sm shadow-primary/20"
                            : "bg-white text-slate-800 border border-slate-100 rounded-tr-none shadow-sm"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}

                  {/* مؤشر التحميل */}
                  {loading && (
                    <div className="flex justify-start">
                      <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-tr-none text-xs text-slate-400 flex items-center gap-1.5 shadow-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></span>
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></span>
                      </div>
                    </div>
                  )}
                  <div ref={chatBottomRef} />
                </div>

                {/* نموذج الإدخال */}
                <form
                  onSubmit={handleSendMessage}
                  className="flex items-center gap-2 pt-2 border-t border-slate-200/60 bg-white -mx-4 -mb-4 p-3"
                >
                  <input
                    type="text"
                    value={input}
                    disabled={loading}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs placeholder-slate-400 outline-none focus:border-primary focus:bg-white transition-all text-slate-800 disabled:opacity-60"
                    placeholder="اكتب رسالتك..."
                  />
                  <button
                    type="submit"
                    disabled={loading || !input.trim()}
                    className="bg-primary hover:bg-primary active:scale-95 text-white font-bold rounded-xl px-4 py-2 text-xs shadow-md shadow-primary/20 transition-all flex items-center gap-1 shrink-0 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <span>إرسال</span>
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ------------------- الفقاعة الترويجية عند الإغلاق ------------------- */}
      <AnimatePresence mode="wait">
        {!openChat && (
          <motion.div
            key={currentMessageIndex}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpenChat(true)}
            className="cursor-pointer bg-white text-slate-800 text-xs font-semibold px-4 py-3 rounded-2xl shadow-xl border border-slate-100 w-56 text-center absolute bottom-full right-0 mb-3 group hover:border-primary/30 transition-all"
          >
            <div className="w-3 h-3 bg-white border-b border-r border-slate-100 absolute -bottom-1.5 right-6 rotate-45"></div>
            <p className="relative z-10 leading-snug">
              {promoMessages[currentMessageIndex]}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ------------------- زر اللوجو الدائم ------------------- */}
      <motion.button
        type="button"
        onClick={() => setOpenChat(!openChat)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="focus:outline-none relative"
      >
        <motion.img
          initial={{ rotate: 0 }}
          animate={{ rotate: 10 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          src="/maky_logo.webp"
          alt="maky logo"
          className="w-16 h-16 drop-shadow-lg cursor-pointer"
        />
      </motion.button>
    </div>
  );
}
