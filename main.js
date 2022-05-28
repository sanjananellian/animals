//https://teachablemachine.withgoogle.com/models/KWUmVGVzF/
function start(){
    navigator.mediaDevices.getUserMedia({aduio:true})
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/KWUmVGVzF/model.json",modelready)
    
}
function modelready(){
    classifier.classify(gotresults)

}
function gotresults(error,results){
if (error) {
  console.error(error)  
} else {
  console.log(results) 
  document.getElementById("p1").innerHTML="sound is- "+results[0].label
  document.getElementById("p2").innerHTML="accuracy is- "+(results[0].confidence*100).toFixed(2)+"%"
  animal=document.getElementById("Animals")
  if (results[0].label=="cow") {
      animal.src="cow.png"
      
  } else if(results[0].label=="pig"){
    animal.src="download (3).jpeg"
   
  }
  else if(results[0].label=="dog"){
   animal.src="download (1).jpeg"
   
  }
  else{
   animal.src="download (2).jpeg"
   
  }

}
}
