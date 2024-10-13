document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío del formulario

    const email = document.getElementById('email').value;
    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje').value;

    // Webhook de Discord (usa el tuyo)
    const webhookURL = 'https://discord.com/api/webhooks/1294866813363945502/SLmiyqKAXQeF9agZPKPeuACFsu1XNkJjEGdbNbWZopYxHmUGa2ruHEMHtetIL119b-EF';

    // Construcción del payload para Discord
    const payload = {
        content: `Nuevo mensaje de contacto:\n**Nombre**: ${nombre}\n**Gmail**: ${email}\n**Mensaje**: ${mensaje}`
    };

    // Enviar el mensaje al webhook de Discord
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('result').innerText = 'Mensaje enviado correctamente a Discord.';
        } else {
            document.getElementById('result').innerText = 'Hubo un problema al enviar el mensaje.';
        }
    })
    .catch(error => {
        document.getElementById('result').innerText = 'Error: No se pudo enviar el mensaje.';
        console.error('Error:', error);
    });
});
