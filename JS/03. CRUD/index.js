const siteName = document.getElementById("bookmark");
const siteURL = document.getElementById("URL");
const bookmarks = localStorage.getItem("bookmarks") ? JSON.parse(localStorage.getItem("bookmarks")) : [];

const addItem = () => {
    const bookmark = {
        siteName: siteName.value,
        siteURL: siteURL.value,
    }
    if (validation(siteName, "bookmarkMsg") && validation(siteURL, "URLMsg")) {
        bookmarks.push(bookmark);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        
        clearData();
        displayData();
    }

}

const displayData = () => {
    var cartoon = "";
    for (var i = 0; i < bookmarks.length; ++i) {
        cartoon += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${bookmarks[i].siteName}</td>
                    <td><a class="btn btn-success" href="${bookmarks[i].siteURL}" target="_blank">Visit</a></td>
                    <td><button class="btn btn-danger" onclick="deleteItem(${i})">Delete</button></td>
                </tr>
        `;
    }
    document.getElementById("body").innerHTML = cartoon;
}

const clearData = () => {
    siteName.value = null;
    siteURL.value = null;
}

const deleteItem = (i) => {
    bookmarks.splice(i, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    displayData();
}

const validation = (element, msgId) => {
    var msg = document.getElementById(msgId);
    const regex = {
        bookmark: /^[a-zA-Z]+[\w\s-]*$/,
        URL: /^https?:\/\/(www\.)?[\w-]{3,}\.(com|org|net|edu)$/,
    }
    if (regex[element.id].test(element.value)) {
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        msg.classList.add("d-none");
        return true;
    } else {
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        msg.classList.remove("d-none");
        return false;
    }
}

displayData();