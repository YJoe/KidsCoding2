var threads = 0;

function addNewThread() {
    $("#discussionThread").append($(
        "<div class = 'messageBox'>" +
            "<div class = 'bodyText'>" +
                "<div class = subMessageBox>" +
                    $('#messageInput').val() +
                "</div>" +
            "</div>" +
            "<div id = 'thread" + threads + "'>"+
        "</div>" +
        "<div class = input-group>" +
            "<input type='text' id = 'subMessageInput" + threads + "' class='form-control' style='margin: 20px; margin-top: 0;' placeholder='Reply to this thread...'>"+
            "<span class='input-group-btn'>" +
                "<button class='btn btn-default' type='button' style='margin: 20px; margin-top: 0' onclick='messageInThread(" + threads + ")'>Send</button>"+
            "</span>" +
        "</div>"
    ));
    threads += 1;
}

function messageInThread(threadID){
    var d = new Date();
    var month = d.getMonth()+1;
    var day = d.getDate();
    var date = "Date " + d.getFullYear() + '/' + ((''+month).length<2 ? '0' : '') + month + '/' + ((''+day).length<2 ? '0' : '') + day;
    date += " Time " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() ;
    var threadDiv = '#' + 'thread' + threadID;
    var threadIn = '#' + 'subMessageInput' + threadID;

    $(threadDiv).append(
        "<div class = 'subMessageBox'>" +
            "<div class = bodyText>" +
                $(threadIn).val() +
            "</div>" +
        "</div>"
    )
}