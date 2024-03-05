console.log('bobbyhadz.com');

const checkbox = document.getElementById('show');

const box = document.getElementById('box');

checkbox.addEventListener('click', function handleClick() {
  if (checkbox.checked) {
    box.style.display = 'block';
  } else {
    box.style.display = 'none';
  }
});
