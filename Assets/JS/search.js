let data = JSON.parse(jsonData)

function search_jsonData() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.querySelector('#list-holder');
    x.innerHTML = ""

    for (i = 0; i < data.length; i++) {
        let obj = data[i];

        if (obj.Name.toLowerCase().includes(input) || obj.Type.toLowerCase().includes(input) || obj.Added.toLowerCase().includes(input) || obj.ID.toLowerCase().includes(input)) {
            const elem = document.createElement("p")
            elem.innerHTML = `${obj.Name} - ${obj.Type} - ${obj.Added} - ${obj.ID}`
            x.appendChild(elem)
        }
    }
}
