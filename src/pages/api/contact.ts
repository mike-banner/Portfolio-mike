import type { APIRoute } from 'astro';

export const prerender = false; // Ensures this route is server-rendered

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Access env vars in Astro (works locally and on Cloudflare Pages)
    // Cloudflare Pages puts env variables in locals.runtime.env
    // Locally, Astro exposes them via import.meta.env
    // @ts-ignore - locals.runtime is specific to Cloudflare adapter
    const env = import.meta.env.RESEND_API_KEY ? import.meta.env : (locals.runtime?.env || {});
    
    const RESEND_API_KEY = env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return new Response(JSON.stringify({ error: 'Server configuration error' }), {
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
        // For testing, Resend allows sending from onboarding@resend.dev to your verified email
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: env.CONTACT_EMAIL || 'your-email@example.com', // Replace or set in .env
        reply_to: email,
        subject: `[Portfolio] New message from ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p>
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
      console.error('Resend API Error:', errorData);
      return new Response(JSON.stringify({ error: 'Failed to send email' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('Contact Form Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
