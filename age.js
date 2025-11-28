function calculate(e){
    e.preventDefault()
    let nm=document.getElementsByName('nm')[0].value
    let dob=document.getElementsByName('dob')[0].value;
    dob=String(dob).substring(6,10)
    let cdate=new Date()
    age=cdate.getFullYear()-dob
    document.getElementById('agename').innerHTML=`Your name is ${nm} and age is ${age}`

}