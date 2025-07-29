// src/pages/api/enviar-form.js
export const post = async ({ request }) => {
  const data = await request.json();

  // Adiciona os headers CORS
  const headers = new Headers();
  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Access-Control-Allow-Methods', 'POST');
  headers.set('Access-Control-Allow-Headers', 'Content-Type');
  
  // 1. Valide os dados aqui (recomendo Zod)
  // 2. Envie para o webhook externo
  const webhookURL = process.env.WEBHOOK_URL; // Mantendo process.env.WEBHOOK_URL

  if (!webhookURL) {
    console.error("WEBHOOK_URL não está definida no arquivo .env");
    return new Response(JSON.stringify({ message: "Erro de configuração no servidor." }), {
      status: 500,
      headers: { ...Object.fromEntries(headers.entries()), "Content-Type": "application/json" },
    });
  }
  
  try {
    const response = await fetch(webhookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (!response.ok) throw new Error(`Webhook error: ${response.status}`);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...Object.fromEntries(headers.entries()), 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Erro ao processar a requisição:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...Object.fromEntries(headers.entries()), 'Content-Type': 'application/json' }
    });
  }
};