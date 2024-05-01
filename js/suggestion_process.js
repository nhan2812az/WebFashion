// getting all required elements
const searchWrapper = document.querySelector(".search-bar-input()");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector("search-bar-input-history");
// if user press any key and release
inputBox.onkeyup = (e) => {
    console.log(e.target.value);
}