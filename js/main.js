document.getElementById("top-player-color").style.color='red';
document.getElementById("top-blog-color").style.color='pink';
document.getElementById("top-bgColor").style.backgroundColor='rgb(94 234 212)';

document.getElementById('add-item').addEventListener('click', function()
{const li = document.createElement('li');
li.innerText = "new li kr";
li.classList.add('list');
const parent = document.getElementById("list");
parent.appendChild(li);
})

