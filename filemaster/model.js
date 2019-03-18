let data = [
  { id: 1, title: ' '},
];

function getNextId() {
  return Math.max(...data.map(movie => movie.id)) + 1;
}

function insert(movie) {
  movie.id = getNextId();
  data.push(movie);
  console.log(data);
}

function update(movie) {
  movie.id = parseInt(movie.id, 10);
  const index = data.findIndex(item => item.id === movie.id);
  data[index] = movie;
}

module.exports = {
  getAll() {
    return data;
  },
  get(id) {
    return data.find(movie => movie.id === id);
  },
  delete(id) {
    data = data.filter(movie => movie.id !== id);
  },
  save(movie) {
    movie.id === '' ? insert(movie) : update(movie);
  },
};
