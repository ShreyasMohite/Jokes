const jokes = () => {
    fetch("https://api.icndb.com/jokes/random").then((data) => {
        return data.json();
    }).then((actualdata) => {
        const jokes = actualdata.value.joke;
        const jokesection = document.getElementById("joke");
        jokesection.innerHTML = jokes;
    }).catch((err) => {
        console.log(err);
    })

}