// server.js
const http = require("http");
const os = require("os");

// Use port from .env or default to 7000
const PORT = process.env.PORT || 7000;

// Helper: random emoji
const emojis = ["😀", "🚀", "🎉", "🔥", "🌍", "💻"];
const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

// Helper: time-based greeting
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

// Create server
const server = http.createServer((req, res) => {
  const userAgent = req.headers["user-agent"] || "";
  const isMobile = /mobile/i.test(userAgent);

  const currentTime = new Date().toLocaleString();

  // HTML response
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Week 1 Server Demo</title>
        <style>
          body { font-family: Arial, sans-serif; background: #f0f8ff; text-align: center; padding: 50px; }
          h1 { color: #333; }
          p { font-size: 18px; }
        </style>
      </head>
      <body>
        <h1>${getGreeting()} from Oluwatimilehin Abayomi ${randomEmoji}</h1>
        <p>You are visiting from a ${isMobile ? "📱 Mobile" : "💻 Desktop"} device.</p>
        <p>Current date and time: ${currentTime}</p>
        <p>This simple server shows how the internet connects us!</p>
      </body>
    </html>
  `;

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

// Start server
server.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
