    window.addEventListener('DOMContentLoaded', (event) => {
        console.log('DOM fully loaded and parsed');

        fetch('http://localhost:3000/pups')
        .then(response => response.json())
        .then(pupsInfo => {
            pupsInfo.filter(pupInfo => renderPups(pupInfo))

        //filter method
        })
        .catch(error => {
            console.log(error)
        })
    });

    function renderPups(pupInfo) {
        const div = document.getElementById('dog-bar')
        const pupName = pupInfo.name
        const span = document.createElement('span')
        div.appendChild(span)
        span.innerText = pupName

        //const pupNameButton = document.getElementById(`dog-bar`)
        // pupNameButton.addEventListener('click', pupClicked)
        const pupNameButton = document.querySelector(`#dog-bar > span:nth-child(${pupName})`)
        pupNameButton.addEventListener('click', (e) => pupClicked(e, pupInfo))

        //create a add event listener that when you click on name
        //it shows picture of dog in id="dog-info", and dog name
    }

    function pupClicked(pupInfo) {
        console.log(pupInfo)

    }