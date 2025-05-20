let filter = "All"

window.onload = async function () {

}

function metaData() {
    return {
        theme: "light",
        extensions: [],
        filter: "All",
        init() {
            this.loadExtensions()
            this.loadTheme()
        },
        async loadExtensions() {
            let res = await fetch('data.json')
            extensions = await res.json()
            this.extensions = extensions.map(extension => {
                extension.show = true
                return extension
            })
        },
        loadTheme() {
            if (localStorage.getItem("theme"))
                this.theme = localStorage.getItem("theme")
            else
                localStorage.setItem("theme", "light")

            document.querySelector("html").dataset.theme = this.theme
        },
        toggleTheme() {
            this.theme = this.theme === "light" ? "dark" : "light"
            localStorage.setItem("theme", this.theme)

            document.querySelector("html").dataset.theme = this.theme
        },
        filterExtensions(filter) {
            if (filter === "All") {
                this.extensions = this.extensions.map(extension => {
                    extension.show = true
                    return extension
                })
            }
            else if (filter === "Active") {
                this.extensions = this.extensions.map(extension => {
                    extension.show = extension.isActive
                    return extension
                })
            }
            else if (filter === "Inactive") {
                this.extensions = this.extensions.map(extension => {
                    extension.show = !extension.isActive
                    return extension
                })
            }
            else {
                console.error("unrecognized filter")
                return
            }
            this.filter = filter
        },
        removeExtension(index) {
            this.extensions.splice(index, 1)
        }
    }
}

function filterExtensions(f) {
    if (f === "All") {

    }
    else if (f === "Active") {

    }
    else if (f === "Inactive") {

    }
    else {
        return
    }
    filter = f
    // change active pill
    // filter extensions
}
