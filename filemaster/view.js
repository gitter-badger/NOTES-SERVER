module.exports = function render(movies) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Notes:</title>
  <link rel="stylesheet" href=" /style.css" />
</head>
<body>
  <table>
    <thead><tr><!--<th>Id</th>--><th>Notiz:</th><th></th><th></th></tr></thead>
    <tbody>
      ${movies
        .map(
          movie => `
          <tr>
            <!--<td>${movie.id}</td>-->
            <td>${movie.title}</td>
            <td><a href="/filemaster/delete/${movie.id}"><button>l&ouml;schen</button></a></td>
            <td><a href="/filemaster/form/${movie.id}"><button>bearbeiten</button></a></td>
          </tr>`,
        )
        .join('')}
    </tbody>
  </table>
  <a href="/filemaster/form"><button>neu</button></a><br><a href="http://sharkbyte.bplaced.net/#serviceworker" target="_blanc">Powered by Sharkbyteprojects</a>
</body>
</html>
  `;
};
