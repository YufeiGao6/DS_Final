function sendFeatureInfo() {

    var input_f1 = document.getElementById("f1");
    var input_f2 = document.getElementById("f2");
    var input_f3 = document.getElementById("f3");

    var f1 = input_f1.value;
    var f2 = input_f2.value;
    var f3 = input_f3.value;

    var featureInfo = f1 + "*" + f2 +"*" + f3;

    // open the link
    var ws = new WebSocket("ws://localhost:4200");

    // send the data by using the send()
    ws.onopen = function () {
        ws.send(featureInfo);
    };

    // receive data
    ws.onmessage = function (evt) {
        var received_msg = evt.data;
        alert(received_msg);
        ws.close(); //close after the data is received
    };
    // event after close
    ws.onclose = function () {
    };
}