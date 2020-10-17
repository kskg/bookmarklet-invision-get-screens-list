(function (func, script) {
    // Load jQuery
    script = document.createElement("script")
    script.src = "//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"
    script.onload = function () {
        func(jQuery.noConflict(true))
    }
    document.body.appendChild(script)
})(function ($) {

    // Settings
    // --------------------------------------------------
    const screens_list_prefix = "---\n"
    const screens_list_suffix = "\n---"
    const project_title_prefix = "# "
    const project_title_suffix = "\n\n"
    const divider_title_prefix = "## "
    const divider_title_suffix = "\n\n"
    const screen_title_prefix = ""
    const screen_title_suffix = "\n"
    const screen_url_prefix = ""
    const screen_url_suffix = "\n\n"
    // --------------------------------------------------

    let screens_list = ""
    let result = ""

    const base_url = location.href.replace(/([^/]+?)?$/, "")
    const target = $(".screens .ng-scope>div")

    for (let i = 1; i < target.length; i++) {
        let class_name = $(target[i]).attr("class")
        let title = ""
        let url = ""

        switch (class_name) {
            case "header":
                // Get Project Title
                title = $(target[i]).find(".ng-binding").text().replace(/(^\s+)|(\s+$)/g, "")
                screens_list += project_title_prefix + title + project_title_suffix
                break;

            case "divider":
                // Get Divider Title
                title = $(target[i]).find(".divider .title").text()
                screens_list += divider_title_prefix + title + divider_title_suffix
                break;

            case "screenObj":
                // Get Screen Title & URL
                title = $(target[i]).find(".name-container .name").text().replace(/(^\s+)|(\s+$)/g, "")
                url = base_url + $(target[i]).find(".thumbnail-viewport img").attr("src").match(/(\d*).png/)[1]
                screens_list += screen_title_prefix + title + screen_title_suffix
                screens_list += screen_url_prefix + url + screen_url_suffix
                break;

            default:
                break;
        }
    }

    result = screens_list_prefix + screens_list.replace(/(^\s+)|(\s+$)/, "") + screens_list_suffix
    window.prompt("InVision Screens List", result)

});