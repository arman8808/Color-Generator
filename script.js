console.log("Ramdom Color Generator");
function gen(){
    let random_num=Math.floor(Math.random()*16777215);
    let random_color="#"+random_num.toString(16);
    document.getElementById("new_color").innerHTML=random_color;
    document.body.style.background=random_color
    // console.log(random_num,random_color)

}
gen()