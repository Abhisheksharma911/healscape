let slide = document.querySelectorAll(".patientReview");
let card = document.querySelectorAll(".card");

slide.forEach(function(slides,index){
    slides.style.left='${index * 100}%
})

function myFun(){
    slide.forEach(function(cur$Val){
        curVal.style.transform='translatteX(-${count * 100}%)'
    })
}

setInterval(function(){
    count++;
    if (count == slide.length){
        count =0;
    }
    myFun()
},2000)