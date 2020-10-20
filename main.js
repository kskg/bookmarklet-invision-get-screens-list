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
    const SCREENS_LIST_PREFIX = "---\n\n"
    const SCREENS_LIST_SUFFIX = "\n\n---"
    const PROJECT_TITLE_PREFIX = "# "
    const PROJECT_TITLE_SUFFIX = "\n\n"
    const DIVIDER_TITLE_PREFIX = "## "
    const DIVIDER_TITLE_SUFFIX = "\n\n"
    const SCREEN_TITLE_PREFIX = ""
    const SCREEN_TITLE_SUFFIX = "\n"
    const SCREEN_URL_PREFIX = ""
    const SCREEN_URL_SUFFIX = "\n\n"
    // --------------------------------------------------


    function get_project_screens_list() {
        let screens_list = []

        // Get Project Title
        const project_name = $(".project-name").text().replace(/(^\s+)|(\s+$)/g, "")
        screens_list.push({
            type: "project_name",
            title: project_name
        })

        const base_url = location.href.replace(/\/d\/main.*/, "")
        const target = $(".ng-scope .screens-group")

        for (let i = 1; i < target.length; i++) {
            $(target[i]).children("div").each(function () {
                let class_name = $(this).attr("class")

                if (class_name == "divider") {
                    // Get Divider Title
                    screens_list.push({
                        type: "divider",
                        title: $(target[i]).find(".divider_label").text().replace(/ \d+$/, "")
                    })

                } else if (class_name == "screen grid") {
                    // Get Screen Title & URL
                    screens_list.push({
                        type: "screen",
                        title: $(this).find(".screen-name").text(),
                        url: base_url + $(this).find(".view-screen-wrap a").attr("href")
                    })
                }
            })
        }

        return screens_list
    }


    function get_share_screens_list() {
        let screens_list = []

        const base_url = location.href.replace(/([^/]+?)?$/, "")
        const target = $(".screens .ng-scope>div")

        for (let i = 1; i < target.length; i++) {
            let class_name = $(target[i]).attr("class")

            if (class_name == "header") {
                // Get Project Title
                screens_list.push({
                    type: "project_name",
                    title: $(target[i]).find(".ng-binding").text().replace(/(^\s+)|(\s+$)/g, "")
                })

            } else if (class_name == "divider") {
                // Get Divider Title
                screens_list.push({
                    type: "divider",
                    title: $(target[i]).find(".divider .title").text()
                })

            } else if (class_name == "screenObj") {
                // Get Screen Title & URL
                screens_list.push({
                    type: "screen",
                    title: $(target[i]).find(".name-container .name").text().replace(/(^\s+)|(\s+$)/g, ""),
                    url: base_url + $(target[i]).find(".thumbnail-viewport img").attr("src").match(/(\d*).png/)[1]
                })
            }
        }

        return screens_list
    }


    function format_screens_list(list) {
        let screens_list = ""

        for (let i = 0; i < list.length; i++) {
            let type = list[i].type

            if (type == "project_name") {
                screens_list += PROJECT_TITLE_PREFIX + list[i].title + PROJECT_TITLE_SUFFIX

            } else if (type == "divider") {
                screens_list += DIVIDER_TITLE_PREFIX + list[i].title + DIVIDER_TITLE_SUFFIX

            } else if (type == "screen") {
                screens_list += SCREEN_TITLE_PREFIX + list[i].title + SCREEN_TITLE_SUFFIX
                screens_list += SCREEN_URL_PREFIX + list[i].url + SCREEN_URL_SUFFIX
            }
        }

        screens_list = SCREENS_LIST_PREFIX + screens_list.replace(/(^\s+)|(\s+$)/, "") + SCREENS_LIST_SUFFIX
        return screens_list
    }


    function check_view_mode() {
        let current_url = location.href
        let view_mode = ""

        if (current_url.match(/projects.invisionapp.com\/.*\/projects\/prototypes\/\d+$/)) {
            view_mode = "Project"

        } else if (current_url.match(/projects.invisionapp.com\/share\/.*screens.*\?browse$/)) {
            view_mode = "Share"
        }

        return view_mode
    }


    function main() {
        let view_mode = check_view_mode()
        let screens_list = []
        let formatted_screens_list = ""

        try {
            if (view_mode == "Project") {
                screens_list = get_project_screens_list()
                formatted_screens_list = format_screens_list(screens_list)

            } else if (view_mode == "Share") {
                screens_list = get_share_screens_list()
                formatted_screens_list = format_screens_list(screens_list)

            } else {
                throw "Error"
            }

            window.prompt("InVision " + view_mode + " Screens List", formatted_screens_list)

        } catch (e) {
            let error_message = ""
            error_message += "Please run it at the following URL.\n\n"
            error_message += "- https://projects.invisionapp.com/d/main#/projects/prototypes/[Project ID]\n"
            error_message += "- https://projects.invisionapp.com/share/[Share ID]#/screens?browse"

            alert(error_message)
        }
    }


    main()

});