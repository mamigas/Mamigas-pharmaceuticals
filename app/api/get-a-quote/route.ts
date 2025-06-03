import { quoteMailer } from "@/helpers/quoteMailer";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { name, phone, message, total, products, email } = body;

    const productListHtml = products
      .map((p: any) => `<li>${p.name} - Quantity: ${p.quantity}</li>`)
      .join("");

    const fullMessage = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Total Price:</strong> $${total.toFixed(2)}</p>
        <p><strong>Products:</strong></p>
        <ul>${productListHtml}</ul>
      `;

    await quoteMailer({
      name,
      email: email,
      phone: phone, // default sender
      message: fullMessage,
      subject: "New Quote Request from Website",
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
};
