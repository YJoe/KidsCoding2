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
        "<input type='text' id = 'subMessageInput" + threads + "' class='form-control' name='messageInput' required placeholder='Send a message'>" +
        "<button class='btn btn-primary' onclick='messageInThread(" + threads + ")'>Reply</button>"
    ));
    threads += 1;
}

function messageInThread(threadID){
    var threadDiv = '#' + 'thread' + threadID;
    var threadIn = '#' + 'subMessageInput' + threadID;

    $(threadDiv).append(
        "<div class = 'subMessageBox'>" +
        $(threadIn).val()+
        "</div>"
    )
}