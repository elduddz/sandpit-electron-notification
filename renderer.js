function loadInfo() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "ajax_info.json", true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText)
            var tickets = json.tickets
            for (var i = 0; i <= tickets.length; i++) {
                var item = tickets[i]

                const myNotification = new Notification(item.id, {
                    body: item.title
                })

                myNotification.onclick = () => { window.open("https://www.google.co.uk","_blank") }
            }
        }
    }
}

setInterval(function () {
    loadInfo()
}, 5000)