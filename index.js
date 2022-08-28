$("#exampleModal").modal("show");

$(".result").hide();

var x;
var randm;
let counter = 0;

document.querySelectorAll(".replay")[0].style.display = "none";
document.querySelectorAll(".replay")[1].style.display = "none";



$(".rock img, .paper img, .scissor img").on("click",function(event){
    $(".hand").hide();   //First hide the div
    counter++;


    /*Computer Choice */
    randm = Math.floor(Math.random() * 3)+1;       //random values btw 1 to 3
    randm = "symbol"+randm;               // we can get class name

    /* User Choice and hand image update*/
    let userChoiceImage = event.target;
    x = event.target.src;
    document.querySelector(".userchose").src = x;    //Assign the values based on user click events

    /*Update computer image */
    let compChoiceImage = document.getElementsByClassName(randm)[0];
    let compSrc = document.getElementsByClassName(randm)[0].src;
    document.querySelector(".compickimage img").src = compSrc;

    
    /* Comparison Logic */
    let userImageClass = userChoiceImage.className;
    let compImageClass = compChoiceImage.className;

    let playerScore = document.querySelectorAll(".player h1")[0].textContent;
    playerScore = parseInt(playerScore);

    let compScore = document.querySelectorAll(".computer h1")[0].textContent;
    compScore = parseInt(compScore);

    if(userImageClass.slice(-1) == '1' && compImageClass.slice(-1) == '3'){
        document.querySelectorAll(".message h3")[0].textContent = "YOU WIN!";
        document.querySelectorAll(".message h3")[1].textContent = "YOU WIN!";

        playerScore++;
        document.querySelectorAll(".player h1")[0].textContent = playerScore;
    }

    else if(userImageClass.slice(-1) == '1' && compImageClass.slice(-1) == '2'){
        document.querySelectorAll(".message h3")[0].textContent = "YOU LOOSE!";
        document.querySelectorAll(".message h3")[1].textContent = "YOU LOOSE!";

        compScore++;
        document.querySelectorAll(".computer h1")[0].textContent = compScore;
    }

    else if(userImageClass.slice(-1) == '2' && compImageClass.slice(-1) == '1'){
        document.querySelectorAll(".message h3")[0].textContent = "YOU WIN!";
        document.querySelectorAll(".message h3")[1].textContent = "YOU WIN!";

        playerScore++;
        document.querySelectorAll(".player h1")[0].textContent = playerScore;
    }

    else if(userImageClass.slice(-1) == '2' && compImageClass.slice(-1) == '3'){
        document.querySelectorAll(".message h3")[0].textContent = "YOU LOOSE!";
        document.querySelectorAll(".message h3")[1].textContent = "YOU LOOSE!";

        compScore++;
        document.querySelectorAll(".computer h1")[0].textContent = compScore;
    }

    else if(userImageClass.slice(-1) == '3' && compImageClass.slice(-1) == '1'){
        document.querySelectorAll(".message h3")[0].textContent = "YOU LOOSE!";
        document.querySelectorAll(".message h3")[1].textContent = "YOU LOOSE!";

        compScore++;
        document.querySelectorAll(".computer h1")[0].textContent = compScore;
    }

    else if(userImageClass.slice(-1) == '3' && compImageClass.slice(-1) == '2'){
        document.querySelectorAll(".message h3")[0].textContent = "YOU WIN!";
        document.querySelectorAll(".message h3")[1].textContent = "YOU WIN!";

        playerScore++;
        document.querySelectorAll(".player h1")[0].textContent = playerScore;
    }

    else{
        document.querySelectorAll(".message h3")[0].textContent = "DRAW";
        document.querySelectorAll(".message h3")[1].textContent = "DRAW";

        playerScore++;
        compScore++;
        document.querySelectorAll(".player h1")[0].textContent = playerScore;
        document.querySelectorAll(".computer h1")[0].textContent = compScore;

    }
    
    $(".result").show();                            //Finally we should show result div

    if(counter === 3){

        for (let index = 0; index < 2; index++) {
            document.querySelectorAll(".next")[index].style.display = "none";
            document.querySelectorAll(".replay")[index].style.display = "block";
            
        }
        
    }
});

/*Play Again Button*/

$(".replay").click(function() {
    window.location.reload();
});

/* Next Round Button */

$(".refresh").click(function() {
    /*Updating Round No Notification */
    document.querySelectorAll(".numeral")[0].textContent = counter+1;
    $(".hand").show();
    $(".result").hide();
});

