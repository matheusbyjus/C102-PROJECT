
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
})

camera=document.getElementById("camera");

Webcam.attach("#camera");

function foto(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML=`<img id="captura" src="${data_uri}"/>`;
    })
}

console.log("ml5:",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/VDpbVidrY/model.json",modelLoaded);

function modelLoaded(){
    console.log("modelo carregado")
}

function checar(){
    img=document.getElementById("captura");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error)
    } else{
        console.log(results);
        document.getElementById("nomeObjeto").innerHTML=results[0].label;
        document.getElementById("precisao").innerHTML=results[0].confidence.toFixed(2);
    }
}
