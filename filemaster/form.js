module.exports = function render(movie) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>serviceworker</title>
    <link rel="stylesheet" href=" /style.css" />
  </head>
  <body>
    <form action="/filemaster/save" method="post">
      <input type="hidden" id="id" name="id" value="${movie.id}" />
      <div>
        <label for="id">Notiz:</label>
        <input size="150" type="text" id="title" name="title" value="${movie.title}" />
      </div>
      <div>
        <button type="submit">Speichern</button>
      </div>
    </form>
  </body>
  </html>  
  `;
};
