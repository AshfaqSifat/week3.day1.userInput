//Define Variables
let button = document.getElementById("submit_button");
let mainTitle = document.querySelector("#main_title");
let titleInput = document.querySelector("#title_input");
let noun = document.querySelector("#noun");
let verb = document.querySelector("#verb");
let adjective = document.querySelector("#adjective");

//Assign the events to functions
button.addEventListener("click", clickListener);
titleInput.addEventListener("change", title);

function title(event) {
    //This makes the title update somehow
    mainTitle.textContent = event.target.value;
}

function clickListener(event) {
    //Stops the page from refreshing
    event.preventDefault();

    //Assign the inputs to variables 
    let titleInputValue = titleInput.value;
    let nounValue = noun.value;
    let verbValue = verb.value;
    let adjectiveValue = adjective.value;

    if (titleInputValue == "" || nounValue == "" || verbValue == "" || adjectiveValue == "") {
        //Prompts user to fill out the entire form
        alert("Please fill in all the sections.")
    }
    else {
        //Displays the finishing story based on user's responses
        let form = document.querySelector("form");
        form.style.display = "none";
        let resultValue = document.createElement("p");
        resultValue.textContent = "Last night I ate a " + nounValue + " and today I just had to " + verbValue + ". What a " + adjectiveValue + " day!";
        let result = document.querySelector("p");
        result.appendChild(resultValue);
    }
}
