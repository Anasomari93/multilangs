var english=document.getElementById("english")
var arabic=document.getElementById("arabic")
var name_title=document.getElementById("name")
var text=document.getElementById("text")
var about=document.getElementById("about")
var student=document.getElementById("student")
var academy=document.getElementById("academy")
var btn=document.getElementById("btn")


english.onclick=()=>{
    languages("english")
localStorage.setItem("lang","english")

}
arabic.onclick=()=>{
    languages("arabic")
    localStorage.setItem("lang","arabic")
    
}
onload=()=>{
    languages(localStorage.getItem("lang"))
}







function languages(language){
    if(language=="english"){
        name_title.innerHTML="Anas Alomari"
        text.innerHTML="I will become Front-End Developer"
        about.innerHTML="ABOUT US"
        student.innerHTML="Student at Shiyar School"
        academy.innerHTML="To find all tutorials -please- click on shiyar academy"
        btn.innerHTML="shiyar academy"
        

    }else if(language=="arabic"){
        name_title.innerHTML="أنس العمري"
        text.innerHTML="ساصبح مطور الواجهات الامامية لصفحات الويب"
        about.innerHTML="عن الاكاديمية"
        student.innerHTML="طالب في مدرسة شيار للبرمجة"
        academy.innerHTML="لمشاهدة جميع الدروس انقر على زر اكاديمية شيار "
        btn.innerHTML="اكاديمية شيار"


    }
    
}