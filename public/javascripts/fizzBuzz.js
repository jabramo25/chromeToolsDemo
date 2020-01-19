//wait for DOM to be loaded before selecting elements.
document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("fizzBuzzButton").addEventListener("click", () => {
        performFizzBuzz();
    });
});

performFizzBuzz = () => {
    let container = document.getElementById("fizzBuzzResults");
    let ul = document.createElement("ul"); 
    
    //possible bugs for demo.  using = instead of ===.  putting dual compare at bottom
    for (let i=1; i <= 30; i++) {
        let li = document.createElement("li");
        let text;
        if (i % 3 === 0 && i % 5 === 0 ) {
            text = "fizzbuzz";
        } else if (i % 3 === 0) {
            text = "fizz";
        } else if (i % 5 === 0) {
            text = "buzz";
        } else {
            text = i; 
        }
        let textNode = document.createTextNode(text);
        li.appendChild(textNode);
        ul.appendChild(li);
    }
         
    container.appendChild(ul);
}
