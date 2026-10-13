import emailjs from "@emailjs/browser";

export function sendContactMessage(form) {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    form,
    { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
  );
}
