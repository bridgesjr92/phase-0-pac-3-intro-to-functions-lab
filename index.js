function shout(string){
    return string.toUpperCase()
}

function whisper(string){
    return string.toLowerCase()
}


function logShout(string){
    console.log(string);
    console.log(string.toUpperCase());
    console.log(string === string.toUpperCase())
    return string
}



function logWhisper(string){
    console.log(string);
    console.log(string.toLowerCase());
    console.log(string === string.toLowerCase())
    return string
}


function sayHiToHeadphonedRoommate(string)
{
    if (string === string.toLowerCase()){
        console.log("I can\'t hear you!")
        return "I can\'t hear you!";
    }
    else if (string === string.toUpperCase()){
        console.log("YES INDEED!")
        return "YES INDEED!";
    }
    if (string ===  "Let's have dinner together!"){
        console.log("I would love to!")
        return "I would love to!"
    }
}

