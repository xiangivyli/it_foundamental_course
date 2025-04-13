function handleCreatePost() {
    document.getElementById("post-form-container").style.display = "block";
    document.getElementById("author-info").style.display = "none";
    document.getElementById("main-section-container").style.display = "none";
}
function hidePostFormAndShowMain() {
    document.getElementById("post-form-container").style.display = "none";
    document.getElementById("author-info").style.display = "block";
    document.getElementById("main-section-container").style.display = "flex";
}
