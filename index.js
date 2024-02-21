let tl = gsap.timeline()
let time = gsap.timeline()


var a = document.querySelector("#icon")
var b =document.querySelector("#colnev")
var h = document.querySelector("#boxx1") 
var h1 = document.querySelector("#boxx2") 
var h2 = document.querySelector("#boxx3") 
var h3 = document.querySelector("#hr4") 
var o1 =document.querySelector("#hide2")
var o2 =document.querySelector("#hide3")
var o3 =document.querySelector("#stay")
var o = document.querySelector("#hide")
var cont = document.querySelector("#cont")
var bx =document.querySelector("#fx3")
var opp  = document.querySelector("#hdd")
var hdd = document.querySelector("#hdd")
var fx = document.querySelector("#fx")
var ig2 = document.querySelectorAll(".igg2")
var flag = 0


tl.from("#nav h1, #nav ul li,#nav h2 ", {
    y:-100,
    delay:1,
    opacity:0,
    duration:1,
    stagger:0.2
})

time.from("#left h1", {
    x:-100,
    delay:1,
    opacity:0,
    duration:1,
    stagger:0.3
})
time.from("#right img", {
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.1
})

gsap.from(".page2 .box", {
    y:-100,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:".page2 .box"

})

//    a.addEventListener("mouseup",function(){
//     if(flag==0){
//         console.log("done")
//         flag=1
//         b.style.left="0"
//         // b.style.transi
//     }
//     else{
//         flag=0
//         b.style.left="-100%"
//     }
//    })

h.addEventListener("mouseenter", function() {
    console.log("done");
    // o.style.height = "100%";
    o.style.left ="0";
    o3.style.marginTop = "0";
    // o.style.opacity = "1"
});
o.addEventListener("mouseenter", function() {
    console.log("done");
    // o.style.height = "100%";
    o.style.left ="0";
    o3.style.marginTop = "0";

    // o.style.opacity = "1"
});
o.addEventListener("mouseleave", function() {
    console.log("done");
    // o.style.height = "100%";
    o.style.left ="-100%";
    o3.style.marginTop = "-55vh";


    // o.style.opacity = "1"
});

h.addEventListener("mouseleave", function() {
    console.log("done");
    // o.style.height = "0";
    // o.style.opacity = "0"
    o3.style.marginTop = "-55vh  3s ";

    o.style.left ="-100%";

});
   

// snd
h1.addEventListener("mouseenter", function() {
    console.log("done");
    // o.style.height = "100%";
    o1.style.left ="0";
    o3.style.marginTop = "0";

    // o.style.opacity = "1"
});
o1.addEventListener("mouseenter", function() {
    console.log("done");
    // o.style.height = "100%";
    o1.style.left ="0";
    o3.style.marginTop = "0";

    // o.style.opacity = "1"
});
o1.addEventListener("mouseleave", function() {
    console.log("done");
    // o.style.height = "100%";
    o1.style.left ="-100%";
    o3.style.marginTop = "-55vh";


    // o.style.opacity = "1"
});
o2.addEventListener("mouseleave", function() {
    console.log("done");
    // o.style.height = "100%";
    o2.style.left ="-100%";
    o3.style.marginTop = "-55vh";


    // o.style.opacity = "1"
});

h1.addEventListener("mouseleave", function() {
    console.log("done");
    // o.style.height = "0";
    // o.style.opacity = "0"
    o1.style.left ="-100%";
    o3.style.marginTop = "-55vh";


});

h2.addEventListener("mouseenter", function() {
    console.log("done");
    // o.style.height = "100%";
    o2.style.left ="0";
    o3.style.marginTop = "0";

    // o.style.opacity = "1"
});
o2.addEventListener("mouseenter", function() {
    console.log("done");
    // o.style.height = "100%";
    o2.style.left ="0";
    o3.style.marginTop = "0";

    // o.style.opacity = "1"
});
o1.addEventListener("mouseleave", function() {
    console.log("done");
    // o.style.height = "100%";
    // o.style.left ="0";
    o3.style.marginTop = "-55vh";


    // o.style.opacity = "1"
});
h2.addEventListener("mouseleave", function() {
    console.log("done");
    // o.style.height = "0";
    // o.style.opacity = "0"
    o2.style.left ="-100%";
    o3.style.marginTop = "-55vh";


});
   
   


// h1.addEventListener("mouseenter", function() {
//     console.log("done");
//     o1.style.height = "30vh";
// });

// h1.addEventListener("mouseleave", function() {
//     console.log("done");
//     o1.style.height = "0";
// });


// h2.addEventListener("mouseenter", function() {
//     console.log("done");
//     o2.style.height = "30vh";
// });

// h2.addEventListener("mouseleave", function() {
//     console.log("done");
//     o2.style.height = "0";
// });


// h3.addEventListener("mouseenter", function() {
//     console.log("done");
//     o3.style.height = "30vh";
// });

// h3.addEventListener("mouseleave", function() {
//     console.log("done");
//     o3.style.height = "0";
// });

cont.addEventListener("click", function() {
    console.log("done");
    // o.style.height = "100%";
    cont.style.height ="30vh";
    

    // o.style.opacity =
     "1"
});
ig2.forEach(function(ig2){
    bx.addEventListener("click", function() {
        console.log("done");
        // o.style.height = "100%";
        opp.style.height ="35vh";
        fx.style.transition = "right 0.7s ease-in-out"; // Add transition for smooth movement
        fx.style.right = "0"; // Move the element to the right edge      
        fx.style.borderRadius = "25px 0px 0px 25px";
        hdd.style.borderRadius = "0px 25px 25px 0px";
        ig2.style.height = "100%";
        fx.style.border = "1px black solid"; // Set the border style
    
        
    
        // o.style.opacity = "1"
    });

});
