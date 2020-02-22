//wait for DOM to be loaded before selecting elements.
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("fizzBuzzButton").addEventListener("click", () => {
        performFizzBuzz();
        console.log("Fizzbuzz complete");
    });
});

performFizzBuzz = () => {
    let container = document.getElementById("fizzBuzzResults");
    let ul = document.createElement("ul");

    for (let i = 1; i <= 30; i++) {
        let li = document.createElement("li");
        let text;
        if (i % 3 === 0) {
            text = "fizz";
        } else if (i % 5 === 0) {
            text = "buzz";
        } else if (i % 3 === 0 && i % 5 === 0) {
            text = "fizzbuzz";
        } else {
            text = i;
        }
        let textNode = document.createTextNode(text);
        li.appendChild(textNode);
        ul.appendChild(li);
    }

    container.appendChild(ul);
}
