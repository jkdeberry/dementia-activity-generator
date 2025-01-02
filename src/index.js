function generateActivity(event) {
    event.preventDefault();

    new Typewriter("#activity", {
      strings: ["Work a puzzle"],
      autoStart: true,
      delay: 1,
      cursor: "",
    });
}

let activityFormElement = document.querySelector("#activity-generator-form")
activityFormElement.addEventListener("submit", generateActivity);