const message_box = document.getElementById('message');
var messages = new Array();

messages = [
    'Hi!',
    'I am really sorry, but there is nothing here yet.',
    'Like actually there is nothing here yet.',
    'You do not need to stay here.',
    'I can assure you that there is nothing here!',
    'You can trust me.',
    'Whatever it is that you are here for you are not gonna find it.',
    'Please leave! I am not interested in staying here all day.',
    'Please! Come on!',
    'If you are not gone until I counted to 10...'
];

var i = 1;
message_box.innerText = messages[0];
function updateMessage(){
    if (i < messages.length){
        message_box.innerText = messages[i];

        i++;
    }else {
        clearInterval(timer);
        countDown();
    }

    console.log("Interval")
}

var countDownTimer = null;
function countDown(){
    if (!countDownTimer){
        countDownTimer = setInterval(countDown, 1000);
        i = 1;
    }

    if (i > 10){
        clearInterval(countDownTimer);

        message_box.innerText = 'I warned you!';
        setTimeout(() => {
            finalMessage();
        }, 2000)
    }

    message_box.innerText = i;

    i++;
}

function finalMessage(){
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('content', {
            height: '360',
            width: '640',
            videoId: 'M7lc1UVf-VE',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

    function onPlayerReady(event) {
        event.target.playVideo();
    }

}

const timer = setInterval(updateMessage, 6000);