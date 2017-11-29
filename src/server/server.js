var express = require ('express');
// var handleRender = require ('./handleRender.js');
const port = 8000;
const server = express();

server.use(express.static('public'));
server.get('/*', handleRender);

server.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});

function handleRender(req, res) {
  res.send(renderFullPage());
}

function renderFullPage() {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset=utf-8>
        <title>React Server Side Rendering</title>
      </head>
      <body>
        <div id='mount-point'></div>
        <script type="text/javascript" src="build/bundle.js"></script>
      </body>
    </html>
  `

  // console.log('ssssssssss');
}
