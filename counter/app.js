const countValue = document.querySelector('#digit');

const increment = () => {
  let value = parseInt(countValue.innerHTML);
  value = value + 1;
  countValue.innerHTML = value;
};

const decrement = () => {
  let value = parseInt(countValue.innerHTML);
  value = value - 1;
  countValue.innerHTML = value;
};