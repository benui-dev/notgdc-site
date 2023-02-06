function filterTags(in_tags)
{
    var urlParams = new URLSearchParams();
    for(const tag of in_tags)
    {
        urlParams.append("tag", tag);
    }
    urlString = urlParams.toString();
    if(urlString != "")
    {
        window.history.replaceState(null, null, "?" + urlParams.toString());
    }
    else
    {
        const url_current = new URL(location);
        url_current.search = ''
        window.history.replaceState(null,null,url_current.toString());
    }
    var tags = in_tags;
    tagsClassStringArray = [];

    var checkBoxes = document.querySelectorAll(".checkbox-filter");

    for(checkBox of checkBoxes)
    {
        checkBox.checked = false;
    }

    for(const tag of tags){
        tagsClassStringArray.push("div.tag-" + tag);

        var tagsList = []
        for(checkBox of checkBoxes)
        {
            if(checkBox.value == tag)
            {
                if(checkBox.checked != true)
                {
                    checkBox.checked = true;
                }
            }
        }
    }
    tagsClassString = tagsClassStringArray.join(",");
    allElementsString = "div.entry"
    entriesToShow = [];
    if(tagsClassString != ""){
        entriesToShow = document.querySelectorAll(tagsClassString);
    }
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
            entry.style.display = "Flex";
        }
    }

}

function toggleFilters()
{
    var checkBoxes = document.querySelectorAll(".checkbox-filter");
    var tagsList = []
    for(checkBox of checkBoxes)
    {
        if(checkBox.checked == true)
        {
            tagsList.push( checkBox.value);
        }
    }
    filterTags(tagsList);
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const tags = urlParams.getAll("tag");
filterTags(tags);