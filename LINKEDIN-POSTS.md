# LinkedIn Posts — Ready to Post
Copy, paste, edit your voice, post. Suggested times: Tuesday or Wednesday, 8am or 5pm EAT.

---

## Post 1 — Going Independent Announcement
**Post on:** Day 1 of sprint. Pin immediately after posting.

---

After 6 years building production systems across Kenya, Germany, Hong Kong, and the US — I'm launching my independent practice under Mikrosell Systems.

I build AI-powered interfaces and full-featured web and mobile apps. React · Angular · Next.js · Flutter · M-Pesa · Claude API.

Some of what I've shipped:
→ Kenya's national vehicle tracking system (500K+ commercial vehicles)
→ IoT management portal for 5,000+ devices — 96% provisioning efficiency
→ Micro-frontend migration that doubled a team's delivery velocity
→ Farm incident management + marketplace platform (live)
→ Carwash SaaS POS (live at carwash.mikrosell.com)

Based in Nairobi. Available for international remote work.

If you or someone you know needs:
→ A senior engineer who ships fast and doesn't need hand-holding
→ AI features that actually work in production
→ M-Pesa / payment integration done properly
→ A technical advisor who's been in production at scale

DM me or book a free 20-min call: cal.com/laban-mogire

What are you building right now?

---

## Post 2 — Technical Authority (M-Pesa Daraja)
**Post on:** Day 3–4. This builds credibility with the Kenyan tech audience.

---

5 things nobody tells you about M-Pesa Daraja in production:

**1. The STK Push callback is unreliable.**
Always poll the transaction status endpoint as a fallback. Don't trust the callback alone — it drops silently under load.

**2. Sandbox and production have very different response times.**
Your UX loading states need to handle 8–12 second delays. Test at that range, not the 2 seconds you see in sandbox.

**3. The OAuth token expires in 1 hour.**
Cache it server-side with a 55-minute TTL. Fetching a new token per request kills performance and risks rate limiting.

**4. The ResultCode is a string in some endpoints, an integer in others.**
Type your DTOs carefully or you'll have silent failures that only appear under specific transaction conditions in prod.

**5. Always verify the amount server-side.**
The client can pass any amount in the STK request. Validate it against your order record before confirming — always.

I've built Daraja into 5+ production systems. Happy to review your integration.

DM me or book a technical session: cal.com/laban-mogire

---

## Post 3 — Case Study (KamsGuard IoT)
**Post on:** Day 5–7. Proof of senior-level work.

---

We had 5,000+ IoT devices across 5 enterprise sites.

Each one required manual configuration. Technicians were spending hours per device on provisioning and diagnostics. The system had no unified interface — just scattered tools that didn't talk to each other.

Here's what we built:

A hardware communication layer using WebSerial, WebUSB, BLE, and WiFi APIs — directly in the browser. No native app. No middleware. Just the browser talking to physical hardware at scale.

The result:
→ 96% improvement in provisioning efficiency
→ 1,000+ users on a real-time monitoring portal
→ 150+ features shipped across 13 sprints
→ App load times cut by 50%

The hardest part wasn't the hardware APIs. It was making it feel simple to the operators who'd never touched a browser-based tool before.

That's the job — not just the code.

Currently available for frontend, AI, and full-stack projects.
cal.com/laban-mogire

---

## Post 4 — Service Packages Offer
**Post on:** Day 6–8. Direct offer post.

---

I'm opening 3 spots this month for fixed-price projects.

**Landing Page + M-Pesa Integration**
KES 80,000 · 5 days
Professional site + Daraja STK Push. Customers pay directly on your page.

**Web App / Dashboard MVP**
KES 150,000 · 10–14 days
Auth, up to 5 screens, API integration, deployed. Real software, not a prototype.

**AI Integration Sprint**
KES 110,000–200,000 · 7–10 days
Add AI to your product — chat, document processing, smart search, or workflow automation. Claude API / OpenAI. Production-ready from day one.

International clients: pricing in USD available.

All projects: 50% upfront, 50% on delivery. Source code is yours.

3 spots. Book a free 20-min scoping call first:
cal.com/laban-mogire

---

## Post 5 — Build in Public (AI + Frontend)
**Post on:** Week 2. Shows AI-native capability in action.

---

I built a working AI feature this week in about 3 hours.

[Brief description of what you built — e.g. "A document Q&A interface that lets users upload a PDF and ask questions about it — backed by Claude API with streaming responses and source citations."]

What made it fast:
→ Claude API with streaming — response starts in < 1 second
→ React state machine for the loading/streaming/done states
→ No external vector DB needed for small documents — just context window

What made it production-ready:
→ Rate limiting per user session
→ Cost controls — max tokens per request
→ Error handling for API timeouts and refusals
→ Mobile-responsive from day one

The gap between "AI demo" and "AI feature users trust" is almost entirely in the error states and edge cases. That's where experience matters.

If you want AI built into your product properly — not as a demo, but as a feature:
cal.com/laban-mogire

---

## Post 6 — Social Proof / Referral Ask
**Post on:** Day 10. After first delivery or mid-sprint for momentum.

---

Quick ask — and I'll make it worth your while.

I'm growing my independent practice (Mikrosell Systems) and looking for:
→ Founders or CTOs who need a senior frontend / AI engineer
→ Businesses with stalled web or mobile projects
→ Anyone who needs M-Pesa integration done properly

If you refer someone who becomes a client — I'll send you 10% of the project value, cash, no questions asked.

My work: laban.mikrosell.com
Book a call: cal.com/laban-mogire

Tag someone who might need this, or DM me directly.

---

## Twitter/X Thread — Week 1

**Tweet 1 (hook):**
I just went independent after 6 years building enterprise software in Kenya, Germany, and Hong Kong.

Here's what I learned that nobody writes about:🧵

**Tweet 2:**
Shipping fast is a skill, not a personality trait.

Most engineers are slow because of unclear scope, not slow coding. The first 2 hours of a project define the next 2 weeks.

**Tweet 3:**
The client who says "it's simple, just a few screens" is always the hardest project.

Simple-looking UX hides complex state. Always scope from the data model, not the mockup.

**Tweet 4:**
M-Pesa Daraja will teach you more about defensive programming than any course.

Callbacks that never arrive. Tokens that expire mid-transaction. Amount fields that change type between endpoints. Production is the real test.

**Tweet 5:**
AI integration is 20% the LLM call and 80% the UX around it.

What happens when it's slow? When it fails? When it says something wrong? Those states are the product.

**Tweet 6:**
The best thing I did this year: deploy something to production every single week.

Nothing teaches you faster than real users hitting real bugs.

**Tweet 7 (CTA):**
I'm now available for frontend, AI integration, and full-stack projects.

Kenya + international. Fast delivery. No hand-holding needed.

laban.mikrosell.com | cal.com/laban-mogire
