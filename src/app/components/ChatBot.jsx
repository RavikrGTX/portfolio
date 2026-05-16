'use client'
import { useState, useRef, useEffect, useCallback } from 'react'

const WELCOME = "Hey there! I'm an AI assistant trained on this portfolio. Ask me about projects, skills, or experience — I'll dig through the knowledge base and get you a real answer."

export default function ChatBot() {
  const [open, setOpen]         = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput]       = useState('')
  const [loading, setLoading]   = useState(false)
  const [welcomed, setWelcomed] = useState(false)
  const bottomRef               = useRef(null)
  const inputRef                = useRef(null)

  /* auto-scroll on every new message */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  /* welcome message fires once on first open */
  useEffect(() => {
    if (!open || welcomed) return
    setWelcomed(true)
    setLoading(true)
    const t = setTimeout(() => {
      setLoading(false)
      setMessages([{ role: 'assistant', content: WELCOME }])
    }, 950)
    return () => clearTimeout(t)
  }, [open, welcomed])

  /* focus input after panel opens */
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 320)
      return () => clearTimeout(t)
    }
  }, [open])

  const send = useCallback(async () => {
    const msg = input.trim()
    if (!msg || loading) return
    setInput('')
    const history = [...messages, { role: 'user', content: msg }]
    setMessages(history)
    setLoading(true)
    try {
      const res  = await fetch('/api/chat', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ messages: history }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Something went wrong — please try again.' }])
    } finally {
      setLoading(false)
    }
  }, [input, loading, messages])

  return (
    <>
      {/* ── Chat panel ── */}
      <div
        role="dialog"
        aria-label="Portfolio assistant"
        className={[
          'fixed bottom-24 right-6 z-50',
          'w-[340px] max-h-[420px]',
          'flex flex-col overflow-hidden',
          'bg-white dark:bg-zinc-900',
          'border border-zinc-200 dark:border-zinc-700 rounded-2xl',
          'transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
          open
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-6 opacity-0 pointer-events-none',
        ].join(' ')}
      >
        {/* Header */}
        <div className="bg-[#111827] px-4 py-3 flex items-center gap-3 flex-shrink-0">
          <BotAvatar />
          <div className="flex-1 min-w-0">
            <p className="text-[#f9fafb] text-[13px] font-medium leading-tight">Portfolio assistant</p>
            <p className="text-[#9ca3af] text-[11px] flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              Online · RAG-powered
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="text-zinc-500 hover:text-zinc-200 transition-colors p-1 rounded-md"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2.5 min-h-0">
          {messages.map((m, i) => (
            <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={[
                'max-w-[84%] px-3 py-2 text-[13px] leading-relaxed rounded-2xl',
                m.role === 'user'
                  ? 'bg-indigo-500 text-white rounded-br-sm'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 rounded-bl-sm',
              ].join(' ')}>
                {m.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-start">
              <div className="flex items-center gap-1 px-3 py-2.5 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl rounded-bl-sm">
                {[0, 0.18, 0.36].map((d, i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500"
                    style={{ animation: `chatBounce 1.1s ease ${d}s infinite` }}
                  />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 px-3 py-2.5 border-t border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 flex-shrink-0">
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send()}
            placeholder="Ask about my work..."
            className="flex-1 text-[13px] rounded-lg border border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 px-3 py-1.5 outline-none focus:border-indigo-400 transition-colors"
          />
          <button
            onClick={send}
            disabled={!input.trim() || loading}
            aria-label="Send message"
            className="w-8 h-8 rounded-lg bg-indigo-500 hover:bg-indigo-600 disabled:bg-zinc-200 dark:disabled:bg-zinc-700 flex items-center justify-center flex-shrink-0 transition-colors active:scale-95"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ── FAB ── */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#111827] hover:bg-[#1f2937] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
      >
        {/* Bot icon */}
        <svg
          width="26" height="26" viewBox="0 0 24 24" fill="none"
          stroke="#c7d2fe" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
          className={`absolute transition-all duration-200 ${open ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}
        >
          <rect x="2" y="8" width="20" height="14" rx="3"/>
          <circle cx="8.5" cy="14.5" r="1.5" fill="#c7d2fe" stroke="none"/>
          <circle cx="15.5" cy="14.5" r="1.5" fill="#c7d2fe" stroke="none"/>
          <path d="M9 19h6"/>
          <path d="M12 8V4"/>
          <circle cx="12" cy="3" r="1" fill="#818cf8" stroke="none"/>
        </svg>
        {/* Close icon */}
        <svg
          width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="#c7d2fe" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
          className={`absolute transition-all duration-200 ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
        >
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
    </>
  )
}

function BotAvatar() {
  return (
    <div className="relative w-9 h-9 rounded-full bg-[#374151] flex items-center justify-center flex-shrink-0">
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-indigo-400 rounded-full">
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-indigo-300" />
      </div>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c7d2fe" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="8" width="20" height="14" rx="3"/>
        <circle cx="8.5" cy="14.5" r="1.5" fill="#c7d2fe" stroke="none"/>
        <circle cx="15.5" cy="14.5" r="1.5" fill="#c7d2fe" stroke="none"/>
        <path d="M9 19h6"/>
        <path d="M12 8V4"/>
        <circle cx="12" cy="3" r="1" fill="#818cf8" stroke="none"/>
      </svg>
    </div>
  )
}