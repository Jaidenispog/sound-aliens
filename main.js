function start(){

    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/CtsyVT5hu/model.json', modelLoaded);

}

function modelLoaded(){

    console.log("Your Model Has Been Loaded!");
    classifier.classify(gotResults);
}

function gotResults(error, results) {

    if (error) {

        console.error(error);

    }

    else {

    console.log(results);

    ran_r = Math.floor(Math.random()*240) +1;
    ran_b = Math.floor(Math.random()*240) +1;
    ran_g = Math.floor(Math.random()*240) +1;
    
    document.getElementById("result_label").innerHTML='I Can Hear ' + results[0].label;
    document.getElementById("result_confidence").innerHTML='Accuracy:' + (results[0].confidence * 100).toFixed(2)+"%";
    document.getElementById("result_label").style.color= "rgb("+ran_r+", "+ran_g+", "+ran_b+")";
    document.getElementById("result_confidence").style.color= "rgb("+ran_r+", "+ran_g+", "+ran_b+")";

    
    img1 = document.getElementById('alien1');
    img2 = document.getElementById('alien2');
    img3 = document.getElementById('alien3');
    img4 = document.getElementById('alien4');


    if(results[0].label=="knock") {
    
        img1.src='simp1.gif';
        img2.src='simp2.png';
        img3.src='simp3.png';
        img4.src='simp4.png';

    }

    else if(results[0].label=="clap") {

        img1.src='simp1.png';
        img2.src='simp2.gif';
        img3.src='simp3.png';
        img4.src='simp4.png';
    

    }

    else if(results[0].label=="keyboard")  {

        img1.src='simp1.png';
        img2.src='simp2.png';
        img3.src='simp3.gif';
        img4.src='simp4.png';
    

    }

    else {

        img1.src='simp1.png';
        img2.src='simp2.png';
        img3.src='simp3.png';
        img4.src='simp4.gif';
    

    }
    
    }
}