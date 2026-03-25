import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

export function useNewsletterSubscribe() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    const { error } = await supabase.from('leads').insert({
      email,
      interest: 'newsletter',
      source_page: window.location.pathname,
    });
    setLoading(false);
    if (error) {
      console.error('Newsletter subscribe error:', error);
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setSuccess(true);
    }
  };

  return { email, setEmail, loading, success, handleSubmit };
}
