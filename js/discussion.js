var threads = 0;

function addNewThread() {
    $("#discussionThread").append($(
        "<div class = 'messageBox' >" +
        "<div class = 'bodyText' "+
        " style='color: #fbfbfb'>" +
        $('#messageInput').val() +
        "</div>" +
        "<div id = 'thread" + threads + "'>"+
        "</div>" +
        "<button class='btn btn-primary' onclick='messageInThread(" +
        threads +
        ")'>Reply</button>"
    ));
    threads += 1;
}

function messageInThread(threadID){
    $('#' + 'thread' + threadID).append(
        "<div class = 'subMessageBox'>" +
        "" +
        "This is a reply test" +
        "" +
        "</div>"
    )
}