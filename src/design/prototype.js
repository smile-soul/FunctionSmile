// 防止忘记new

const book = function(id) {
  if(this instanceof book) {
    this.id = id;
  } else {
    return new book(id);
  }
}