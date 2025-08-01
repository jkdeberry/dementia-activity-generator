  // Display the generated activity

  function displayActivity(response) {
    
    new Typewriter("#activity", {
      strings: response.data.answer.replace("```html", "").replace("```", ""),
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
    let context = "You are a Dementia activity expert. Your mission is to return a list of 3–5 short, clear activity steps using simple <ul><li> HTML for better readability. Always end the output with <strong>SheCodes AI</strong> on its own line.";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let activityElement = document.querySelector("#activity");
    activityElement.classList.remove("hidden");
    activityElement.innerHTML = `<div class="generating">⏳Generating an activity related to ${instructionsInput.value}</div>`

    axios.get(apiURL).then(displayActivity);    
}

let activityFormElement = document.querySelector("#activity-generator-form")
activityFormElement.addEventListener("submit", generateActivity);