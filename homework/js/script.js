let allInform = document.querySelectorAll(".all");
let password = document.querySelector("#password");
let password2 = document.querySelector("#password2");
let formMain = document.querySelector("#registration")

for (let i = 0; i < allInform.length; i++) {

    allInform[i].addEventListener("blur", function () {
        if (this.value == "") {
            let str = this.getAttribute("data-note");
            if (this.nextElementSibling == null) {
                let small = alertNote(str);
                this.parentNode.appendChild(small);
            }
        }
        else {
            if (this.nextElementSibling != null) {
                this.nextElementSibling.remove();
            }
        }
    })

}

for (let i = 0; i < allInform.length; i++) {

    allInform[i].addEventListener("keyup", function () {
        if (this.value == "") {
            let str = this.getAttribute("data-note");
            if (this.nextElementSibling == null) {
                let small = alertNote(str);
                this.parentNode.appendChild(small);
            }
        }
        else {
            if (this.nextElementSibling != null) {
                this.nextElementSibling.remove();
            }
        }
    })

}
function alertNote(str) {
    let small = document.createElement("small");
    small.classList.add("text-danger");
    small.innerText = str;
    return small;

}

function alertNote(str2) {
    let small2 = document.createElement("small2");
    small2.classList.add("text-danger");
    small2.innerText = str2;
    return small2;

}




formMain.addEventListener("submit", function () {
     
        if (password2.value != password.value) {
        alert("Zəhmət olmasa parolun eyniliyini yoxlayın!");
    }
})
























