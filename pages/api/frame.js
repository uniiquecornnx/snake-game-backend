export const config = {
    runtime: "edge",
  };
  
  export default async function handler(req) {
    const frameHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta property="og:title" content="Play Snake Game 🎮" />
        <meta property="og:image" content="https://yourdomain.com/screenshot.png" />
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:button:1" content="Play Now" />
        <meta name="fc:frame:post_url" content="https://yourdomain.com/api/frame" />
      </head>
      <body></body>
      </html>
    `;
  
    return new Response(frameHtml, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  }