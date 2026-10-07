import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-green-500/30 transition hover:-translate-y-0.5 hover:scale-[1.02] sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
