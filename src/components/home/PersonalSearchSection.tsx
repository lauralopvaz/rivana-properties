import { useState } from 'react';
import { Search, MapPin, MessageCircle, Check, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { ScrollReveal } from '@/components/ScrollReveal';

export function PersonalSearchSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('');
  const [goal, setGoal] = useState('');
  const [callTime, setCallTime] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setLoading(true);
    const { error } = await supabase.from('leads').insert({
      first_name: name,
      email,
      phone,
      interest: 'personal_search',
      message: `Budget: ${budget || '—'} | Goal: ${goal || '—'} | Best time: ${callTime || '—'}`,
      source_page: window.location.pathname,
    });
    setLoading(false);
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setSuccess(true);
    }
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: 'hsl(var(--paper))',
    border: '1px solid rgba(0,0,0,0.07)',
    color: '#1C1C1C',
    borderRadius: 0,
  };

  return (
    <section id="advisory-search" className="py-16 lg:py-24 bg-background border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-start gap-12" style={{ columnGap: '3rem' }}>
          <div className="w-full md:w-[55%]">
            <ScrollReveal>
              <div className="mb-10">
                <p className="eyebrow mb-4">Personal Property Search</p>
                <h2 className="text-secondary mb-3">
                  We find it. <em className="text-primary not-italic font-display italic">You decide.</em>
                </h2>
                <p className="font-body font-light text-muted-foreground" style={{ fontSize: '17px' }}>
                  Your personal property search service in Cancún and the Riviera Maya.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-5 font-body font-light text-secondary/85 mb-10" style={{ fontSize: '19px', lineHeight: 1.8 }}>
                <p>
                  Most buyers arrive at the Caribbean coast with a budget, a rough idea of what they want, and no idea which development, which floor, or which zone actually delivers it. The internet shows you renders. We show you reality.
                </p>
                <p>
                  Tell us your profile — budget, intended use, timeline, what keeps you up at night about buying in Mexico — and we design a shortlist built around your specific goals, not around what we happen to have in inventory. We attend developer meetings on your behalf, visit sites before you fly down, and give you an honest comparison across every option that fits your criteria.
                </p>
                <p>
                  When you arrive for your property tour — or join us by video call — the decision is yours to make with full information, not a sales pitch.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { Icon: Search, label: 'We search the full market', text: "Not just our listings. If the right property for you is somewhere else, we tell you." },
                  { Icon: MapPin, label: 'We are on the ground', text: "Our team lives and works in Cancún and the Riviera Maya. We know what the renders don't show." },
                  { Icon: MessageCircle, label: 'Bilingual. No obligation.', text: 'Every conversation in English or Spanish. No fees to the buyer — ever.' },
                ].map(({ Icon, label, text }) => (
                  <div key={label} className="p-6" style={{ border: '1px solid rgba(0,0,0,0.07)', backgroundColor: 'hsl(var(--paper))' }}>
                    <div className="w-10 h-10 flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(207,174,96,0.08)', border: '1px solid rgba(207,174,96,0.22)' }}>
                      <Icon size={18} style={{ color: 'hsl(var(--gold))' }} />
                    </div>
                    <h3 className="font-display mb-2 text-secondary" style={{ fontSize: '21px' }}>{label}</h3>
                    <p className="font-body font-light text-muted-foreground" style={{ fontSize: '17px', lineHeight: 1.7 }}>{text}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="w-full md:w-[45%] md:sticky md:top-24">
            <ScrollReveal>
              <div className="p-8 lg:p-10" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)' }}>
            {success ? (
              <div className="flex flex-col items-center py-8 gap-3">
                <div className="w-12 h-12 flex items-center justify-center" style={{ backgroundColor: 'rgba(207,174,96,0.08)', border: '1px solid rgba(207,174,96,0.22)' }}>
                  <Check size={20} style={{ color: 'hsl(var(--gold))' }} />
                </div>
                <p className="font-body font-light text-center" style={{ color: 'hsl(var(--gold))' }}>
                  Thank you. A Rivana advisor will reach out within 2 business hours.
                </p>
              </div>
            ) : (
              <>
                <p className="eyebrow mb-3">Personal Brief</p>
                <h3 className="font-display text-2xl mb-6 text-secondary">Tell us what you're looking for</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required className="w-full px-3 py-3 font-body font-light text-sm focus:outline-none" style={inputStyle} />
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" required className="w-full px-3 py-3 font-body font-light text-sm focus:outline-none" style={inputStyle} />
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Your phone" className="w-full px-3 py-3 font-body font-light text-sm focus:outline-none" style={inputStyle} />
                  <select value={budget} onChange={(e) => setBudget(e.target.value)} className="w-full px-3 py-3 font-body font-light text-sm focus:outline-none" style={inputStyle}>
                    <option value="">Budget</option>
                    <option>Under $300K USD</option>
                    <option>$300K – $600K USD</option>
                    <option>$600K – $1M USD</option>
                    <option>$1M – $2M USD</option>
                    <option>$2M+ USD</option>
                  </select>
                  <select value={goal} onChange={(e) => setGoal(e.target.value)} className="w-full px-3 py-3 font-body font-light text-sm focus:outline-none" style={inputStyle}>
                    <option value="">What matters most</option>
                    <option>Rental income / investment returns</option>
                    <option>Vacation home / snowbird retreat</option>
                    <option>Retirement / full-time living</option>
                    <option>Pure appreciation play</option>
                    <option>Not sure yet — I need guidance</option>
                  </select>
                  <select value={callTime} onChange={(e) => setCallTime(e.target.value)} className="w-full px-3 py-3 font-body font-light text-sm focus:outline-none" style={inputStyle}>
                    <option value="">Best time to reach you</option>
                    <option>Morning (9–12 EST)</option>
                    <option>Afternoon (12–5 EST)</option>
                    <option>Evening (5–8 EST)</option>
                    <option>Weekends only</option>
                  </select>
                  <button type="submit" disabled={loading} className="w-full py-3.5 mt-2 font-body font-light uppercase flex items-center justify-center gap-2" style={{ letterSpacing: '3px', backgroundColor: 'hsl(var(--gold))', color: '#FFFFFF', fontSize: '13px', opacity: loading ? 0.7 : 1, borderRadius: 0 }}>
                    {loading ? (<><Loader2 size={14} className="animate-spin" />Sending…</>) : (<>Find My Property →</>)}
                  </button>
                  <p className="font-body font-light text-center text-muted-foreground mt-3" style={{ fontSize: '12px' }}>
                    Bilingual team · ES · EN · Response within 2 business hours · No fees to the buyer · Ever.
                  </p>
                </form>
              </>
            )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}