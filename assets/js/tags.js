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

    var filterItems = document.querySelectorAll(".filter-item");

    for(filter of filterItems)
    {
        filter.classList.remove("filter-enabled");
    }
    
    if(tags.length > 0)
    {    
        for( const tag of tags)
        {
            var tagsList = []
            for(filter of filterItems)
            {
                if(filter.attributes['value'].value == tag)
                {
                    filter.classList.add("filter-enabled");
                }
            }
        }

        var years = tags.filter( tag => tag.startsWith("year") );
        var others = tags.filter( tag => !tag.startsWith("year"));
        if( others.length > 0)
        {
            for(const tag of others)
            {
                var classString = "div.tag-" + tag;
                tagsClassStringArray.push(classString);
            }
        }
        else
        {
            for(const tag of years)
            {
                var classString = "div.tag-" + tag;
                tagsClassStringArray.push(classString);
            }
        }
    }
    else
    {
        allFilter = document.querySelector("#filter-toggle-all");
        if(allFilter)
        {
            allFilter.classList.add("filter-enabled");
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
            entry.classList.add("tag-entry-hide");
            entry.classList.remove("tag-entry-show");
        }
        for(entry of document.querySelectorAll(tagsClassString))
        {
            if( years.length > 0 )
            {
                for(const year of years)
                {
                    if(entry.classList.contains("tag-"+year))
                    {
                        entry.classList.add("tag-entry-show");
                        entry.classList.remove("tag-entry-hide");
                        break;
                    }
                }
            }
            else
            {
                entry.classList.add("tag-entry-show");
                entry.classList.remove("tag-entry-hide");
            }
        }
    }
    else
    {
        for(entry of document.querySelectorAll(allElementsString))
        {
            entry.classList.add("tag-entry-show");
            entry.classList.remove("tag-entry-hide");
        }
    }

}

function toggleFilters()
{
    var filters = document.querySelectorAll(".filter-toggle.filter-enabled");
    var tagsList = []
    for(filter of filters)
    {
        if(filter.attributes['value'].value != 'all')
        {
            tagsList.push(filter.attributes['value'].value);
        }
    }
    filterTags(tagsList);
}

function toggleFilterRow()
{
    filter_row = document.querySelector("#filter-row");
    filter_row.classList.toggle("clicked");
}

function toggleFilter(filter)
{
    filter.classList.toggle("filter-enabled");
    toggleFilters();
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const tags = urlParams.getAll("tag");
filterTags(tags);
window.onscroll = function () {
    const down_arrow = document.querySelector('.down-arrow');
    if (down_arrow) {
        if (window.scrollY > (window.innerHeight * 0.5)) {
            down_arrow.classList.add('fade');
        } else {
            down_arrow.classList.remove('fade');
        }
    }
};