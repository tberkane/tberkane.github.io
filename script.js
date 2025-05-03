function toggleSection(header) {
    var content = header.nextElementSibling;
    content.style.display = content.style.display == "block" ? "none" : "block";
}
