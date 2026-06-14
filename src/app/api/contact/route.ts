import { NextRequest, NextResponse } from "next/server";

interface ContactFormBody {
  name: string;
  email: string;
  whatsapp?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormBody = await request.json();
    const { name, email, whatsapp, message } = body;

    // Validación básica de campos requeridos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos obligatorios deben ser completados." },
        { status: 400 }
      );
    }

    const wpUrl = process.env.NEXT_PUBLIC_WP_URL || "https://api.mesolabpro.com.co";
    // Endpoint oficial de Contact Form 7 para recibir el envío del formulario (ID 33)
    const cf7Endpoint = `${wpUrl}/wp-json/contact-form-7/v1/contact-forms/33/feedback`;

    // Contact Form 7 espera los datos en formato multipart/form-data (FormData)
    const formData = new FormData();
    formData.append("_wpcf7", "33"); // ID del formulario
    formData.append("_wpcf7_unit_tag", "wpcf7-f33-p33-o1"); // Tag de unidad requerido por la API
    formData.append("your-name", name);
    formData.append("your-email", email);
    formData.append("your-whatsapp", whatsapp || "");
    formData.append("your-subject", "Mensaje de contacto desde el sitio web");
    formData.append("your-message", message);

    const res = await fetch(cf7Endpoint, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok || data.status !== "mail_sent") {
      throw new Error(data.message || "Error al enviar el mensaje a través de WordPress.");
    }

    return NextResponse.json({ success: true, message: data.message });
  } catch (error) {
    console.error("Contact Form API Error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Error interno al enviar el correo." },
      { status: 500 }
    );
  }
}
