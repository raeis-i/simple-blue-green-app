const http = require('http');

const blueColor = process.env.PAGE_BLUE_COLOR || '#0000FF';
const greenColor = process.env.PAGE_GREEN_COLOR || '#00FF00';

// Use the PAGE_COLOR environment variable to choose the color (blue or green)
const pageColor = process.env.PAGE_COLOR === 'green' ? greenColor : blueColor;

// Create the HTTP server
const server = http.createServer((req, res) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Blue/Green Deployment</title>
      <style>
        body {
          background-color: ${pageColor};
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          font-size: 2rem;
          color: black; /* Set text color to black */
        }
      </style>
    </head>
    <body>
      <div>
        <h1>Greetings from Iran ❤️</h1>
      </div>
    </body>
    </html>
  `;

  // Send the HTML content as the response
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlContent);
});

// Set the server to listen on port 8080
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
