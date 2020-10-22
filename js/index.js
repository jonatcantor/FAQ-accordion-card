document.addEventListener("DOMContentLoaded", () => {
    let containerStyle = window.getComputedStyle(document.querySelector(".container"));
    let boxImage = document.querySelector(".top-image");
    let boxImageStyle = window.getComputedStyle(boxImage);
    
    ChangeBoxPosition();
    
    window.addEventListener("resize", ChangeBoxPosition);

    document.querySelectorAll("dt").forEach(item => {
        item.addEventListener("click", UserClick);
    });

    function UserClick(e) {
        if(e.target.className == "list__word") {
            let selectedQuestion = document.querySelector(".list__word--selected");
            
            if(selectedQuestion != null) {
                DisableQuestion(selectedQuestion);
            }

            EnableQuestion(e.target);
        }

        else{
            DisableQuestion(e.target)
        }
    }

    function DisableQuestion(question){
        question.classList.remove("list__word--selected");
        question.children[1].classList.remove("flip-vertically");
        question.nextElementSibling.classList.remove("list__description--selected");
    }

    function EnableQuestion(question){
        question.classList.add("list__word--selected");
        question.children[1].classList.add("flip-vertically");
        question.nextElementSibling.classList.add("list__description--selected");
    }
        
    function ChangeBoxPosition() {
        if(document.body.clientWidth < 768) {
            boxImage.style.left = (document.body.clientWidth / 2 - parseFloat(boxImageStyle.width) / 2) + "px";
            boxImage.style.top = "50px";
        }
    
        else {
            boxImage.style.left = parseFloat(containerStyle.marginLeft) - parseFloat(boxImageStyle.width) / 2 + 10 + "px";
            boxImage.style.top = parseFloat(containerStyle.marginTop) + parseFloat(boxImageStyle.height) + 10 + "px"
        }
    }
});

