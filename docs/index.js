const url = "https://starbuckscalorie.azurewebsites.net/predict/?"

const getCalories = async (url) => {
  const response = await fetch(url);
  const myJson = await response.json();
  document.getElementById('output').innerHTML = `Calories : ${myJson["message"]} kcal`;
}


let calculatorForm = document.querySelector("#calculatorForm"),
  formData = new FormData(calculatorForm),
  submitButton = document.querySelector("#submitButton");


function onSubmit(e) {
  let params = ""
  e.preventDefault();
  for (const [key, value] of Object.entries(serializeArray(calculatorForm))) {
  params += value["name"]
  params += "="
  params += value["value"]
  params += "&"
}
  finalUrl = url + params.slice(0, -1)
  console.log("Hello");
  getCalories(finalUrl);
}

submitButton.addEventListener("click", onSubmit);


function serializeArray(form) {
    var serialized = [];
    for (var i = 0; i < form.elements.length; i++) {
        var field = form.elements[i];
        if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;
        if (field.type === 'select-multiple') {
            for (var n = 0; n < field.options.length; n++) {
                if (!field.options[n].selected) continue;
                serialized.push({
                    name: field.name,
                    value: field.options[n].value
                });
            }
        }
        else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
            serialized.push({
                name: field.name,
                value: field.value
            });
        }
    }





    return serialized;
};