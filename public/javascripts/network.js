//wait for DOM to be loaded before selecting elements.
document.addEventListener("DOMContentLoaded", function () {
    new LoadFrameworks();
});



class LoadFrameworks {
    constructor() {
        document.getElementById("loadFromServer").addEventListener("click", () => {
            this.loadFromServer();
        });
        this.frameworks = [];
    }

    ajaxCall(method, url) {
        return new Promise((resolve, reject) => {
            return $.ajax({
                method: method,
                url: url
            }).done(resolve).fail(reject);
        });
    }

    loadFromServer() {
        let promise = this.ajaxCall("get", "/framworks");

        promise.then((results) => {
            this.frameworks = results;
            this.displayResults(results);
        }).catch(() => {
            console.log("some error happened");
        });
    }

    displayResults(results) {
        let list = document.getElementById("#frameworkList");
        for (let framework of results) {
            let li = document.createElement("li");
            //show the call stack from here. 
            let text = document.createTextNode(`${framework.nane} is maintained by ${framework.maintainer} and was originally released on ${framework.release}`);
            li.appendChild(text);
            list.appendChild(li);
        };

    }

}


