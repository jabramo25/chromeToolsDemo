//wait for DOM to be loaded before selecting elements.
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("performCalculation").addEventListener("click", () => {
        performCalculation();
    });
});

performCalculation = () => {
    for (let i = 1; i <= 10000; i++) {
        if (isPrime(i)) {
            $("#numberList").append("<li>" + i + "</li>");
        }

    }
}

isPrime = (n) => {
    if (n === 1) {
        return false;
    }
    else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}
