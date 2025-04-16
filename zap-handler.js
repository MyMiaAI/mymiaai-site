// zap-handler.js
// 🔗 Universal event trigger module for Zapier webhooks

const zapierWebhookURL = "https://hooks.zapier.com/hooks/catch/XXXXXXX/ZZZZZZZ"; // TODO: Replace with your Zapier webhook

function sendZapEvent(eventName, data = {}) {
  fetch(zapierWebhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event: eventName, ...data })
  });
}

// Auto-bind any element with data-zap="event_name"
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-zap]").forEach(el => {
    el.addEventListener("click", () => {
      const event = el.getAttribute("data-zap");
      sendZapEvent(event, { page: window.location.pathname });
    });
  });
});
