export default function searshMovies(arr, key, togle) {

  const keyMovies = (arr, key) => arr.filter((item) => {
    return (item.nameRU + item.nameEN).toLowerCase().includes(key.toLowerCase());
  });
  if (togle) {
    return keyMovies(arr, key).filter((item) => {
      return item.duration <= 40;
    });
  } else {
    return keyMovies(arr, key);
  }
}