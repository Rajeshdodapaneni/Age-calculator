function CalculateAge(e){
    e.preventDefault()
    let birthDate = document.getElementById("db").value;
    let dob = new Date(birthDate);
    let today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        days += new Number(Date(today.getFullYear(), today.getMonth(), 0).getDate());
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("result").innerHTML =
        `You are ${years} years, ${months} months, and ${days} days old.`;
}
