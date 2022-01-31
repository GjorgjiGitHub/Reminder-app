// ## 2. Reminder App
// * Create a reminder app
// * There should be:
//     * An input for entering the title
//     * An input for entering priority
//     * An input for color
//     * A textarea for adding a description
//     * A button for adding the reminder
//     * A button for showing all reminders
// * When the button for adding is clicked an object needs to be created with the properties from the inputs ( title, priority, color, and description )
// * The object should then be added to an array of reminders
// * When the button for showing all reminders is clicked it should show a table with title, priority, and description columns
// * The title should be the color of the "color" property

// ***najprvo da si gi selektiram elementite
let titleInput = document.getElementById("titleInput");
let inputPriority = document.getElementById("inputPriority");
let inputColor = document.getElementById("inputColor");
let inputTextArea = document.getElementById("inputTextArea");
let btnAdd = document.getElementById("btnAdd");
let btnShow = document.getElementById("btnShow");
let resultOutput = document.getElementById("resultOutput");
// --------------------------------------------------------------------

// sega da si napravam edna constructor function
function Note(title, priority, color, description) {
    this.title = title,
        this.priority = priority,
        this.color = color,
        this.description = description
}

// sega ke si napravam edna array i vo nea kako object ke se zacuvuva sekoj reminder
let remindersArray = [];

// so ovaa funkcija gi pechatime site reminders na nashiot page pri klik na Show all reminders
function addResult(list, element) {
    element.innerHTML = "";
    for (let i = 0; i < list.length; i++) {
        element.innerHTML += `
        <tr>
        <td style="color: ${list[i].color};">${list[i].title}</td>
        <td>${list[i].priority}</td>
        <td>${list[i].description}</td>
        </tr>`
    }
}

// pri klik na ovoj button sozdavame object koj shto go dodavame vo remindersArray
btnAdd.addEventListener("click", function () {
    if (titleInput.value !== "" || inputPriority.value !== "" || inputColor.value !== "" || inputTextArea.value !== "") {
        let note = new Note(titleInput.value, inputPriority.value, inputColor.value, inputTextArea.value);
        remindersArray.push(note);
        console.log(remindersArray);
    }
    titleInput.value = "";
    inputPriority.value = "";
    inputTextArea.value = "";
});

// pri klik na ovoj button gi pechatime site reminders na nashiot page
btnShow.addEventListener("click", function () {
    addResult(remindersArray, resultOutput);
})
















































































































