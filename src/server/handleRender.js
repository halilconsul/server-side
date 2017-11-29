function renderFullPage() {
  return `
    <html>
      <head>
        <meta charset=utf-8>
        <title>React Server Side Rendering</title>
      </head>
      <body>
        <div id="mount-point"></div>
        <script src="./public/build/bundle.js"></script>
      </body>
    </html>
  `
}

function handleRender(req, res) {
  res.send(renderFullPage());
}

// export default handleRender;
