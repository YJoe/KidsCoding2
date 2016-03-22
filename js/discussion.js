var threads = 0;

function validateForm(formId) {
    var inputs, index;
    var form=document.getElementById(formId);
    inputs = form.getElementsByTagName('input');
    for (index = 0; index < inputs.length; ++index) {
        if (inputs[index].value==null || inputs[index].value=="") {
            alert("Field is empty");
            return false;
        }
    }
    return true;
}

function getDate(){
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var date = "Date " + d.getFullYear() + '/' + (('' + month).length < 2 ? '0' : '') + month + '/' + (('' + day).length < 2 ? '0' : '') + day;
    date += " Time " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

    return date;
}

function addNewThread(validation) {
    if (validation) {
        $("#discussionThread").append($(
            "<div class = 'box' style = 'background-color: #65bfcc; margin-top: 30px'>" +
                "<div class = subMessageBox style = 'padding: 20px;'>" +
                    "<div class = 'bodyText'>" + "" +
                        $('#messageInput').val() +
                        "<div style='font-family: Roboto-Bold'>" +
                        "[" + getDate() + "]" +
                        "</div>" +
                    "</div>" +
                "</div>" +
            "<div id = 'thread" + threads + "'>" +
            "</div>" +
            "<div class = input-group id='form" + threads +"'>" +
                "<input type='text' id = 'subMessageInput" + threads + "' class='form-control' style='margin: 20px; margin-top: 0;' placeholder='Reply to this thread...'>" +
                "<span class='input-group-btn'>" +
                    "<button class='btn btn-default' type='button' style='margin: 20px; margin-top: 0' onclick='messageInThread(" + threads + ", validateForm(\"form" + threads + "\"))'>Send</button>" +
                "</span>" +
            "</div>"
        ));

        threads += 1;
    }
}

function messageInThread(threadID, validation){
    if (validation) {
        var threadDiv = '#' + 'thread' + threadID;
        var threadIn = '#' + 'subMessageInput' + threadID;

        $(threadDiv).append(
            "<div class = 'subMessageBox' style='padding: 20px'>" +
            "<div class = bodyText>" +
            $(threadIn).val() +
            "<div style='font-family: Roboto-Bold'>" +
            " [" + getDate() + "]" +
            "</div>" +
            "</div>" +
            "</div>"
        )
    }
}