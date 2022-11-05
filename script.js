document.getElementById("submit").addEventListener("click", () => {
    if (document.getElementById("selected_classification").innerHTML) {
        document.querySelector(".thank_you_container").classList.remove("hidden")
        document.querySelector(".principal_container").style.display = "none"
    } else {
        window.alert("You need to select at least one rating before moving on.")
    }
})

document.querySelectorAll(".classification").forEach((c) => {
    c.addEventListener("click", () => {
        document.getElementById("selected_classification").innerHTML = c.innerHTML
    })
})