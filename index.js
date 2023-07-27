console.log(
    `Hello learners! This is a test message so you can see if your setup works correctly.
If you can't see this message in the console of your browser developer tools,
something is wrong with your setup!
Please contact the mail address you were provided in the README.md file.`
);

const invisible = "invisible";

function removeSpinner() {
    // seems like some code is missing here ...
}

setTimeout(() => {
    const content = document.getElementById("content");

    if (content == null) {
        console.log("Oh no, the content of the entire website is gone! Did you change any IDs in the JS or HTML code?")
    }

    removeSpinner();
    content.classList.remove(invisible)
}, 2000)

removeSpinner();

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function toggleGuineaPig() {
    const pig = document.getElementById("pig");
    const button = document.getElementById("button");

    if (pig == null) {
        console.log("Oh no, the picture of the guinea pig is gone! Did you change any IDs in the JS or HTML code?")
    }

    if (button == null) {
        console.log("Oh no, the button is gone! Did you change any IDs in the JS or HTML code?")
    }

    if (pig.classList.contains(invisible)) {
        button.innerText = "Hide It!"
        sleep(1000);
        pig.classList.remove(invisible)
    } else {
        pig.classList.add(invisible)
        button.innerText = "Show Me!"
    }
}

function toggleDropdownOptions() {
    // seems like some code is missing here ...
}