function loc(){
    // document.querySelector('.side-menu').offsetLeft;
    // document.querySelector('.side-menu').offsetTop;
    
    // if((document.querySelector('.side-menu').getBoundingClientRect().top)<(document.querySelector('.otherprods').getBoundingClientRect().top)){
    //     document.querySelector('.side-menu').style.display="inline-block";
    //     // document.querySelector('.side-menu').style.top="1200px";
    // }else if((document.querySelector('.side-menu').getBoundingClientRect().top)>(document.querySelector('.otherprods').getBoundingClientRect().top)){
    //     document.querySelector('.side-menu').style.position="absolute"; 
    // }
    // console.log(document.querySelector('.otherprods').offsetTop);



    // var aRect = document.querySelector('.side-menu').getBoundingClientRect();
    // var bRect =document.querySelector('.otherprods').getBoundingClientRect();

    // if (document.body.scrollTop <= 0) {
        
    //     if(((aRect.top + aRect.height) < (bRect.top)) ||(aRect.top > (bRect.top + bRect.height)) ||((aRect.left + aRect.width) < bRect.left) ||(aRect.left > (bRect.left + bRect.width))){
    //     document.querySelector('.side-menu').style.display="inline-block"
    // }
    // //else if(){

    // //}
    // else{
    //     document.querySelector('.side-menu').style.position="absolute";
    //     document.querySelector('.side-menu').style.top="1200px";
    // }
    // } else {
    //     alert ("scrolling up");
    // }
    
}
function readmore(){
    document.querySelector(".dots").style.display="none";
    document.querySelector(".read-more2").style.display="inline";
    document.querySelector(".less").style.display="inline";
}

function less(){
    document.querySelector(".dots").style.display="inline";
    document.querySelector(".read-more2").style.display="none";
    document.querySelector(".less").style.display="none";
}

function selectMonth(){
    var select = document.getElementById('cards');
    // var value = select.options[select.selectedIndex].value;
    
    document.querySelector(".side-menu").style.height="500px";

    document.querySelector(".price").style.height="39%";
    document.querySelector(".order").style.height="23%";
    document.querySelector(".card-order").style.height="35%";
    document.querySelector("#cards").style.height="20%";
    calc=document.querySelector(".calc");
    calc.style.display="block";
    rangevalue=document.querySelector("#vol").value;
    console.log(rangevalue);
}
function changePhoto(val){
    mainPhoto=document.querySelector(".mainphoto2");
    // console.log(val)
    switch (val) {
        case "1":
            mainPhoto.setAttribute("src","photos/img1.jpg");
            mainPhoto.setAttribute("style","width:60%;");
            break;
        case "2":
            mainPhoto.setAttribute("src","photos/img2.jpg");
            mainPhoto.setAttribute("style","width:60%;");
            break;
        case "3":
            mainPhoto.setAttribute("src","photos/img3.jpg");
            mainPhoto.setAttribute("style","width:49.3%;");
            break;
        case "4":
            mainPhoto.setAttribute("src","photos/img4.jpg");
            mainPhoto.setAttribute("style","width:60%;");
            break;       
        default:
            break;
    }
}

function changePhotoMobile(val){
    mainPhoto=document.querySelector(".mainphoto3");
    console.log(val)
    switch (val) {
        case "1":
            for(i=1;i<5;i++){
                if(i==1){document.getElementById(`${i}`).style.color="orange";}
                else{document.getElementById(`${i}`).style.color="gray";}
            }

            mainPhoto.setAttribute("src","photos/img1.jpg");
            mainPhoto.setAttribute("style","width:60%;");
            break;
        case "2":
            for(i=1;i<5;i++){
                if(i==2){document.getElementById(`${i}`).style.color="orange";}
                else{document.getElementById(`${i}`).style.color="gray";}
            }
            mainPhoto.setAttribute("src","photos/img2.jpg");
            mainPhoto.setAttribute("style","width:60%;");
            break;
        case "3":
            for(i=1;i<5;i++){
                if(i==3){document.getElementById(`${i}`).style.color="orange";}
                else{document.getElementById(`${i}`).style.color="gray";}
            }
            mainPhoto.setAttribute("src","photos/img3.jpg");
            mainPhoto.setAttribute("style","width:49.3%;");
            break;
        case "4":
            for(i=1;i<5;i++){
                if(i==4){document.getElementById(`${i}`).style.color="orange";}
                else{document.getElementById(`${i}`).style.color="gray";}
            }
            mainPhoto.setAttribute("src","photos/img4.jpg");
            mainPhoto.setAttribute("style","width:60%;");
            break;       
        default:
            break;
    }
}

i=0;
imgarray=["photos/img1.jpg","photos/img2.jpg","photos/img3.jpg","photos/img4.jpg"];
function setslide(num){
    mainPhoto=document.querySelector(".mainphoto2");
    mainPhoto.setAttribute("src",imgarray[i]);
    if(i==0){
        mainPhoto.setAttribute("style","width:60%;");
    }else if(i==1){
        mainPhoto.setAttribute("style","width:60%;");
    }else if(i==2){
        mainPhoto.setAttribute("style","width:49.3%;");
    }else if(i==3){
        mainPhoto.setAttribute("style","width:60%;");
    }
    i-=num;
    if(i==imgarray.length){
        i=0;
    }else if(i<0){
        i=3;
    }
}

for(var j=0;j<5;j++){
    const star = document.createElement("span");
    star.setAttribute("class","material-symbols-outlined");
    star.innerText="star";
    document.querySelector(".main-star").appendChild(star);
    if(j==4){
        star.style.color="gray";
    }
}
for(var j=0;j<5;j++){
    const coms=document.querySelectorAll(".comment-stars")
    for(k=1;k<6;k++){
    const star2 = document.createElement("span");
    star2.setAttribute("class","material-symbols-outlined");
    star2.innerText="star";
    document.querySelector(`.comment-stars${k}`).appendChild(star2);
    }
}

function moreComments(){
    cmt3=document.querySelector(".cmt3");
    newcmmts=document.querySelector(".newcmmts");

    cmt3.classList.remove("grad");
    newcmmts.style.display="block";
    document.querySelector(".more-comment").style.display="none";
    document.querySelector(".less-comment").style.display="block";
}
function lessComments(){
    cmt3=document.querySelector(".cmt3");
    newcmmts=document.querySelector(".newcmmts");

    cmt3.classList.add("grad");
    newcmmts.style.display="none";
    document.querySelector(".more-comment").style.display="block";
    document.querySelector(".less-comment").style.display="none";
}
x=0;
function scrolltime(){
    x+=1
    console.log(x);
    if(x>44){
        document.querySelector(".detcom").style.display="block";
        document.querySelector(".xus").style.display="none";
    }
}

function addcmm(){
    ad=document.getElementById("ad").value;
    soyad=document.getElementById("soyad").value;
    text=document.getElementById("rey").value;
    // console.log(ad,soyad,text)
    if(ad!="" && soyad!="" && text!=""){
        const newcmm = document.createElement("div");
        newcmm.setAttribute("class","comment");
        cmmtemplate=
        `
        <div class="comment" style="border-bottom:none;">
        <h4 style="display: inline;">${ad} ${soyad} </h4> <span> &nbsp;   | &nbsp; 12.06.2021</span>
        <span class="comment-stars comment-stars5"></span>
        <p>${text}</p>
        </div>
        `;
        newcmm.innerHTML=cmmtemplate;
        document.querySelector(".newcmmts").appendChild(newcmm);
        document.getElementById("ad").value="";
        document.getElementById("soyad").value="";
        document.getElementById("rey").value="";
    }
}

// function viewport() {
//     const rect = document.querySelector(".proces").getBoundingClientRect();
//     if(!(rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth))){
//         document.querySelector(".test").style.display="none";
//     }
        

// }
// window.addEventListener('scroll', function() {
// 	var element = document.querySelector('.test');
// 	var position = element.getBoundingClientRect();

// 	// checking whether fully visible
// 	if(position.top >= 0 && position.bottom <= window.innerHeight) {
// 		document.querySelector(".test").style.display="none";
// 	}

// 	// checking for partial visibility
// 	if(position.top < window.innerHeight && position.bottom >= 0) {
// 		console.log('Element is partially visible in screen');
// 	}
// });

function showdetails(){
    trArray=document.querySelectorAll(".hide");
    for(i=0;i<trArray.length;i++){
        trArray[i].style.display="table-row";
    }
    document.querySelector(".sts").style.display="none";
    document.querySelector(".ndn").style.display="block";
    document.querySelector(".blur").classList.remove("grad");
}
function hidedetails() {
    trArray=document.querySelectorAll(".hide");
    for(i=0;i<trArray.length;i++){
        trArray[i].style.display="none";
    }
    document.querySelector(".sts").style.display="block";
    document.querySelector(".ndn").style.display="none";
    document.querySelector(".blur").classList.add("grad");
}


function MmoreComments(){
    cmt3=document.querySelector(".cmt32");
    newcmmts=document.querySelector(".newcmmts2");

    cmt3.classList.remove("grad");
    newcmmts.style.display="block";
    document.querySelector(".more-comment2").style.display="none";
    document.querySelector(".less-comment2").style.display="block";
}
function MlessComments(){
    cmt3=document.querySelector(".cmt32");
    newcmmts=document.querySelector(".newcmmts2");

    cmt3.classList.add("grad");
    newcmmts.style.display="none";
    document.querySelector(".more-comment2").style.display="block";
    document.querySelector(".less-comment2").style.display="none";
}
function addcmm2(){
    ad=document.getElementById("ad2").value;
    soyad=document.getElementById("soyad2").value;
    text=document.getElementById("rey2").value;
    // console.log(ad,soyad,text)
    if(ad!="" && soyad!="" && text!=""){
        const newcmm = document.createElement("div");
        newcmm.setAttribute("class","comment");
        cmmtemplate=
        `
        <div class="comment" style="border-bottom:none;">
        <h4 style="display: inline;">${ad} ${soyad} </h4>
        <span class="comment-stars comment-stars5"></span>
        <p>${text}</p>
        </div>
        `;
        newcmm.innerHTML=cmmtemplate;
        document.querySelector(".newcmmts2").appendChild(newcmm);
        document.getElementById("ad2").value="";
        document.getElementById("soyad2").value="";
        document.getElementById("rey2").value="";
    }
}

// function isInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)

//     );
// }


const box = document.querySelector('.proces');

document.addEventListener('scroll', function () {

    const rect = box.getBoundingClientRect();
    if(rect.top >= 0 &&rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)){
            // console.log('The box is visible in the viewport');
            document.querySelector(".bottom").style.display="none";
        }else{
            // console.log('The box is not visible in the viewport');
            document.querySelector(".bottom").style.display="block";
            document.querySelector(".addcmt2").style.marginBottom="130px";
        }
}, {
});