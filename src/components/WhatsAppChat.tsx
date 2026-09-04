import React, { useState } from 'react';
import { X, Send, Sparkles, PhoneCall, Check } from 'lucide-react';

export const WhatsAppChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const phone = '252617001122';

  const quickPrompts = [
    'I want to inquire about High School admission for my child.',
    'Could you share the tuition fee structure and scholarship details?',
    'I would like to book a campus tour at Hodan Campus.',
    'What are the age requirements for Kindergarten enrollment?',
  ];

  const handleSend = (text: string) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-[110px] right-4 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-outline-variant/40 overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                  TBS
                </div>
                <div className="w-3 h-3 bg-[#25D366] rounded-full border-2 border-[#075E54] absolute bottom-0 right-0" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">TBS Mogadishu Admissions</h4>
                <p className="text-[11px] text-white/80">Typically replies within minutes</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#ECE5DD] max-h-72 overflow-y-auto flex flex-col gap-3">
            <div className="bg-white p-3 rounded-xl rounded-tl-none text-xs text-[#111] shadow-xs max-w-[90%] leading-relaxed">
              <p className="font-medium">
                Asc / Hello! 👋 Welcome to Turkish Bright Schools Mogadishu. How can we help you regarding our academic programs or enrollment today?
              </p>
              <span className="text-[10px] text-gray-400 block text-right mt-1">Just now</span>
            </div>

            <div className="text-[11px] font-bold text-gray-500 uppercase px-1">
              Select an inquiry topic:
            </div>

            <div className="flex flex-col gap-1.5">
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className="text-left text-xs bg-white/90 hover:bg-white p-2.5 rounded-lg border border-gray-200 hover:border-[#25D366] text-gray-800 transition-colors shadow-2xs active:scale-98"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your question..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && customMsg.trim()) {
                  handleSend(customMsg);
                }
              }}
              className="flex-1 text-xs px-3 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-[#25D366] bg-gray-50"
            />
            <button
              onClick={() => {
                if (customMsg.trim()) handleSend(customMsg);
              }}
              className="p-2 rounded-full bg-[#25D366] text-white hover:bg-[#20b858] transition-colors shadow-xs"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        id="whatsapp-floating-btn"
        aria-label="Contact Turkish Bright Schools on WhatsApp"
        className="fixed bottom-[100px] right-[16px] z-40 bg-[#25D366] text-white p-4 rounded-full shadow-[0px_12px_32px_rgba(0,0,0,0.18)] flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer group"
      >
        <svg
          fill="currentColor"
          height="28"
          viewBox="0 0 16 16"
          width="28"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:rotate-6 transition-transform"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </button>
    </>
  );
};
