function filterTags()
{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const tags = urlParams.getAll("tag");
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

filterTags();