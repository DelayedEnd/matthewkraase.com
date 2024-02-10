if (document.title == "Home - Matthew Kraase") {
    var cards = document.getElementsByClassName("card");
    var lines = document.getElementsByClassName("cardline");
    
    for (var card of cards) {
        for (var line of lines) {
            if (card.classList[2] == line.classList[1]) {
                line.style.height = card.clientHeight * 0.75 + "px";
            }
        }
    }
    
    var selectionLine = document.createElement("div");
    selectionLine.id = "selectionLine";
    selectionLine.style = "height:100px;width:10px;background-color:white;position:absolute;opacity:0.25;";
    selectionLine.style.left = lines[0].offsetLeft + "px";
    document.body.append(selectionLine);
    
    document.onpointermove = ((e) => {
        //selectionLine.style.left = e.clientX + "px";
        selectionLine.style.top = e.pageY - selectionLine.offsetHeight / 2 + "px";
        for (var line of lines) {
            if (selectionLine.offsetTop < line.offsetTop + line.offsetHeight && selectionLine.offsetTop - selectionLine.offsetHeight > line.offsetTop - line.offsetHeight) {
                line.classList = "cardline bg-primary position-relative";
            } else {
                var colors = ["bg-success", "bg-warning", "bg-danger"];
                line.classList = "cardline " + colors[line.id] + " position-relative";
            }
        }
    });
    onresize = (e) => {selectionLine.style.left = lines[0].offsetLeft + "px";};
}