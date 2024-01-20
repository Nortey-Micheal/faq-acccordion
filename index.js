const buttons = document.querySelectorAll(`input[type="button"]`);
let para1 = document.querySelector(".first");
let para2 = document.querySelector(".second");
let para3 = document.querySelector(".third");
let para4 = document.querySelector(".fourth");



buttons.forEach(function (button) {
    button.addEventListener("click" , verifyImage);
    button.addEventListener("click" , verifyPara);
})

function verifyImage(event) {
    if (event.target.style.backgroundImage == `url("assets/images/icon-minus.svg")`) {
        event.target.style.backgroundImage = `url("assets/images/icon-plus.svg")`;
    }  else {
        event.target.style.backgroundImage = `url("assets/images/icon-minus.svg")`;
    }
}

function verifyPara(event) {
    if (event.target.style.backgroundImage == `url("assets/images/icon-minus.svg")`) {
        switch (event.target) {
            case buttons[0]:
                para1.style.display = "block";
                para2.style.display = "none";
                para3.style.display = "none";
                para4.style.display = "none";
                buttons[1].style.backgroundImage =`url("assets/images/icon-plus.svg")`;
                buttons[2].style.backgroundImage =`url("assets/images/icon-plus.svg")`;
                buttons[3].style.backgroundImage =`url("assets/images/icon-plus.svg")`;
                break;
            case buttons[1]:
                para2.style.display = "block";
                para1.style.display = "none";
                para3.style.display = "none";
                para4.style.display = "none";
                buttons[0].style.backgroundImage =`url("assets/images/icon-plus.svg")`;
                buttons[2].style.backgroundImage =`url("assets/images/icon-plus.svg")`;
                buttons[3].style.backgroundImage =`url("assets/images/icon-plus.svg")`;
                
                break;
            case buttons[2]:
                para3.style.display = "block";
                para1.style.display = "none";
                para2.style.display = "none";
                para4.style.display = "none";
                buttons[0].style.backgroundImage =`url("assets/images/icon-plus.svg")`;
                buttons[1].style.backgroundImage =`url("assets/images/icon-plus.svg")`;
                buttons[3].style.backgroundImage =`url("assets/images/icon-plus.svg")`;
                break;
            case buttons[3]:
                para4.style.display = "block";
                para1.style.display = "none";
                para2.style.display = "none";
                para3.style.display = "none";
                buttons[0].style.backgroundImage =`url("assets/images/icon-plus.svg")`;
                buttons[1].style.backgroundImage =`url("assets/images/icon-plus.svg")`;
                buttons[2].style.backgroundImage =`url("assets/images/icon-plus.svg")`;
                break;
        }
    } else {
        para1.style.display = "none";
        para2.style.display = "none";
        para3.style.display = "none";
        para4.style.display = "none";
    }
}