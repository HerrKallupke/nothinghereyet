const message_box = document.getElementById('message');
var messages = new Array();

messages = [
    'Hi!',
    'I am really sorry, but there is nothing here.',
    'Like actually here is nothing.',
    'You do not need to stay here.',
    'What are you looking for? There is obviously nothing here.'
]

var i = 1;
message_box.innerText = messages[0];
function updateMessage(){
    if (i < messages.length){
        message_box.innerText = messages[i];

        i++;
    }else {
        clearInterval(timer);
    }
}

const timer = setInterval(updateMessage, 5000);