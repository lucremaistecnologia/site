export async function post({ request }) {
  try {
    const data = await request.json();
    const webhookUrl = import.meta.env.WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("WEBHOOK_URL não está definida no arquivo .env");
      return new Response(JSON.stringify({ message: "Erro de configuração no servidor." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return new Response(JSON.stringify({ message: "Formulário enviado com sucesso!" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      const errorText = await response.text();
      console.error("Erro do Zapier:", response.status, errorText);
      return new Response(JSON.stringify({ message: `Erro no servidor do Zapier: ${response.status}` }), {
        status: response.status,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Erro ao processar a requisição:", error);
    return new Response(JSON.stringify({ message: "Erro interno ao processar o formulário." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}