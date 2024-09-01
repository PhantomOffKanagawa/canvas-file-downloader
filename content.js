// For all list items considered an attachment
// Only do so for student mode as teacher mode is untested
document.querySelectorAll("li.attachment.student-view").forEach(function(element) {
    // Use regex on the classes to get the id of the file
    const file_id = element.className.match(/Attachment_(\d+)/)[1];
    // Use regex on the child title link's url to get the remainder of the link
    const link_start = element.querySelector("a.ig-title.title.item_link").getAttribute("href").match(/^\/\w+\/\d+/)[0];

    // Create the download link element
    var newElement = document.createElement("a");
    // Give it the url of the relevant course and file
    newElement.href = link_start + "/files/" + file_id + "/download?download_frd=1";
    // Give it the icon in the style of the Canvas icons
    newElement.innerHTML = '<span class="ig-type-icon" aria-hidden="true"><i class="icon-download"></i></span>';

    // Append this icon to the list item
    element.querySelector("div.ig-row.ig-published").appendChild(newElement);
});
