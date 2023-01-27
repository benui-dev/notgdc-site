function filterTags(in_tags)
{
    var urlParams = new URLSearchParams();
    for(const tag of in_tags)
    {
        urlParams.append("tag", tag);
    }
    console.log(urlParams.toString())
    window.history.replaceState(null, null, "?" + urlParams.toString())
    var tags = in_tags;
    tagsClassString = ""
    for(const tag of tags){
        tagsClassString += "div.tag-" + tag;
    }
    allElementsString = "div.entry"
    entriesToShow = document.querySelectorAll(tagsClassString);
    if(entriesToShow.length > 0){
        for(entry of document.querySelectorAll(allElementsString))
        {
            entry.style.display = "None";
        }
        for(entry of document.querySelectorAll(tagsClassString))
        {
            entry.style.display = "Flex";
        }
    }
    else
    {
        for(entry of document.querySelectorAll(allElementsString))
        {
            console.log(entry);
            entry.style.display = "Flex";
        }
    }

}
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const tags = urlParams.getAll("tag");
filterTags(tags);