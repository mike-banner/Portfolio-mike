import type { APIRoute } from 'astro';

export const prerender = false; // Ensures this route is server-rendered

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Tous les champs sont requis.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Access env vars in Astro (works locally and on Cloudflare Pages)
    // @ts-ignore
    const env = import.meta.env.RESEND_API_KEY ? import.meta.env : (locals.runtime?.env || {});
    
    const RESEND_API_KEY = env.RESEND_API_KEY;
    const TO_EMAIL = env.TO_EMAIL;

    if (!RESEND_API_KEY || !TO_EMAIL) {
      console.error('RESEND_API_KEY ou TO_EMAIL non configuré');
      return new Response(JSON.stringify({ error: 'Configuration serveur incomplète (clés manquantes).' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: TO_EMAIL,
        reply_to: email,
        subject: `[Portfolio] Nouveau message de ${name}`,
        html: `<p><strong>Nom:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <br/>
               <p><strong>Message:</strong></p>
               <p>${message.replace(/\n/g, '<br/>')}</p>`,
      }),
    });

    if (res.ok) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      const errorData = await res.text();
      console.error('Erreur API Resend:', errorData);
      return new Response(JSON.stringify({ error: 'Échec de l\'envoi de l\'email.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('Erreur Formulaire Contact:', error);
    return new Response(JSON.stringify({ error: 'Erreur Interne Serveur.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
