const student = JSON.parse(localStorage.getItem("user"));
const infoStudentBox = document.querySelector(".student__wrapper")
let reset = document.querySelector("#reset"); 

if(student){
    infoStudentBox.innerHTML = 
    `
    <img style="width:300px; border-radius:50%;" src="./images/mars.jpg">
    <h2 class="ismi">${student.name} ${student.surname}</h2>
    <p>ID: ${student.id}</p>
    <p>Group: ${student.group}</p>
    <p style="color:yellow;     transition: 0.3s ease-in-out;
">Coins: ${student.coin}<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvCJqtLG0UvCYK5Ts2ym6NEsCKAO7hZUPbzw&s" width="32px"></p>
    <p>Teacher:${student.teacher}</p>
    <p>XP:${student.hp}</p>
    `
}


reset.addEventListener("click", () => {
    localStorage.removeItem("user");
    window.location.href = "./index.html";
})