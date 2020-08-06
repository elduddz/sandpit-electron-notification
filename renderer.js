function loadInfo() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "ajax_info.json", true);
    xhttp.send();

    var listItems = "";


    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText)
            var tickets = json.tickets
            for (var i = 0; i < tickets.length; i++) {

                var item = tickets[i]

                listItems += "<li>" + item.id + " - " + item.title + "</li>"

                const myNotification = new Notification(item.id, {
                    body: item.title
                })

                myNotification.onclick = () => { window.open("https://www.google.co.uk", "_blank") }
            }

            const replaceText = (selector, text) => {
                const element = document.getElementById(selector)
                if (element) element.innerHTML = text
            }

            replaceText(`workItemList`, listItems)

        }
    }


}

loadInfo()

setInterval(function () {
    loadInfo()
}, 10000)