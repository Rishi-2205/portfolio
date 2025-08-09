import React from 'react'
export default function Contact(){
  return (
    <div className="card-glass p-6 rounded-2xl">
      <h2 className="text-2xl font-bold mb-3 glow">Get in touch</h2>
      <p className="text-slate-300 mb-4">Want to collaborate or hire me? Send a message and I’ll get back to you.</p>

      <form action="https://formspree.io/f/mwpqakyl" method="POST" className="grid gap-3 md:grid-cols-2">
        <input name="name" placeholder="Your Lucky Name" className="p-3 rounded-lg bg-transparent border border-slate-700" />
        <input name="email" type="email" placeholder="Email" className="p-3 rounded-lg bg-transparent border border-slate-700" />
        <textarea name="message" placeholder="Message" rows="4" className="p-3 rounded-lg bg-transparent border border-slate-700 md:col-span-2"></textarea>
        <div className="md:col-span-2 text-right">
          <button className="px-5 py-2 rounded-xl border border-neon text-neon">Send</button>
        </div>
      </form>

      <div className="mt-6 text-slate-400 text-sm">
        Or email: <a href="mailto:you@example.com" className="text-neon">you@example.com</a>
      </div>
    </div>
  )
}
