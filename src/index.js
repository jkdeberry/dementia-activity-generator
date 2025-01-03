  // Display the generated activity

function displayActivity(response) {
  console.log("Activity generated");
  new Typewriter("#activity", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}


function generateActivity(event) {
  event.preventDefault();
  

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "4e2df5aotaa983694533f2b4440ef095";
    let prompt = `User instructions: Generate an activity for a person with dementia involving ${instructionsInput.value}`;
    let context = "You are a Dementia activity expert and love to assist the elderly with exercises indoors and outside. Your mission is to find different exercises for them to perform that are very simple with short text in basic html. Make sure to follow the user instructions below. Sign the activity with `SheCodes AI` inside a <strong> element";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let activityElement = document.querySelector("#activity");
    activityElement.classList.remove("hidden");
    activityElement.innerHTML = `<div class="generating">⏳Generating a dementia activity related to ${instructionsInput.value}</div>`
    

    console.log("Generating activity");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiURL).then(displayActivity);

  

    
}

let activityFormElement = document.querySelector("#activity-generator-form")
activityFormElement.addEventListener("submit", generateActivity);