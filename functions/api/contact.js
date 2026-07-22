export async function onRequestPost({ request, env }) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json;charset=UTF-8"
  };

  try {
    const data = await request.json();
    const { name, email, message } = data;

    // Validation basique
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Tous les champs sont requis." }),
        { status: 400, headers: corsHeaders }
      );
    }

    const apiKey = env.RESEND_API_KEY;
    const toEmail = env.TO_EMAIL;

    // Si les variables d'environnement ne sont pas configurées, on retourne une erreur explicite
    if (!apiKey || !toEmail) {
      console.error("Variables RESEND_API_KEY ou TO_EMAIL manquantes. Impossible d'envoyer le mail.");
      return new Response(
        JSON.stringify({ 
          error: "Configuration serveur incomplète (clés d'API manquantes)." 
        }),
        { status: 500, headers: corsHeaders }
      );
    }

    // Envoi via Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>",
        to: toEmail,
        subject: `Contact Portfolio: ${name}`,
        html: `
          <h3>Nouveau message de contact</h3>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>E-mail :</strong> ${email}</p>
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-line;">${message}</p>
        `
      })
    });

    if (resendResponse.ok) {
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: corsHeaders }
      );
    } else {
      const errorText = await resendResponse.text();
      return new Response(
        JSON.stringify({ error: `Erreur Resend: ${errorText}` }),
        { status: 500, headers: corsHeaders }
      );
    }
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: corsHeaders }
    );
  }
}

// Support des requêtes de preflight CORS (OPTIONS)
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Max-Age": "86400"
    }
  });
}
