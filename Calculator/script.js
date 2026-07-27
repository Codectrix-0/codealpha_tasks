const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    // Add click event to each button

    button.addEventListener("click", function () {

        let value = this.innerText;

        // Clear display

        if (value === "C") {
            display.value = "";
        }

        // Remove last character

        else if (value === "⌫") {
            display.value = display.value.slice(0, -1);
        }

        // Calculate result

        else if (value === "=") {

            try {
                display.value = eval(display.value);
            }

            catch {
                display.value = "Error";
            }

        }

        // Add clicked value

        else {
            display.value += value;
        }

    });

});
