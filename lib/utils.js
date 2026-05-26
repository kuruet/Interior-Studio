// Construct WhatsApp URL
export function getWhatsAppUrl(phone, message) {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encoded}`;
}

// Truncate text
export function truncate(text, length = 100) {
    if (text.length <= length) return text;
    return text.slice(0, length) + "...";
}