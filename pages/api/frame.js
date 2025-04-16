export const config = {
    runtime: "edge",
  };
  
  export default async function handler(req) {
    const frameHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta property="og:title" content="Play Snake Game 🎮" />
        <meta property="og:image" content="https://upload.wikimedia.org/wikipedia/commons/6/60/Trimeresurus_sabahi_fucatus%2C_Banded_pit_viper_-_Takua_Pa_District%2C_Phang-nga_Province_%2846710893582%29.jpg" />
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