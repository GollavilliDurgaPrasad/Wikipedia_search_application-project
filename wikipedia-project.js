let searchInput = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");



function createAndappend(result) {
    let {
        title,
        link,
        description
    } = result;
    console.log(result);
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");




    let titleEl = document.createElement("a");
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.textContent = title;
    titleEl.classList.add("result-title");
    resultItemEl.appendChild(titleEl);

    let titleBreakEl = document.createElement("br");
    resultItemEl.appendChild(titleBreakEl);

    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.textContent = link;
    resultItemEl.appendChild(urlEl);

    let linkBreakEl = document.createElement("br");
    resultItemEl.appendChild(linkBreakEl);

    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;
    resultItemEl.appendChild(descriptionEl);
    searchResultsEl.appendChild(resultItemEl);

}


function creates(jsondata) {
    for (let result of jsondata) {
        console.log(result);
        createAndappend(result);

    }

}

function s(event) {
    if (event.key === "Enter") {
        searchInput.textContent = "";
        let data = searchInput.value;
        let o = {
            method: "GET"
        };
        let url = "https://apis.ccbp.in/wiki-search?search=" + data;
        fetch(url, o)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsondata) {
                let {
                    search_results
                } = jsondata;

                creates(search_results);
            });
    }
}

searchInput.addEventListener("keydown", s);