function submitHandler(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone  = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let massage = document.getElementById("massage").value;


if (name == "") {
    return alert("Please Input Your Data!")
    } else if (email == ""){
    return alert("Please Input Your Data!")
    } else if (phone == ""){
    return alert("Please Input Your Data!")
    } else if (subject == ""){
    return alert("Please Input Your Data!")
    } else if (massage == ""){
    return alert("Please Input Your Data!")
    }

    const data =  {
        name, email, phone, subject, massage
    }

    const yourEmail = "rahmat.adi1052@gmail.com"

    let a = document.createElement("a");
    a.href = `https://mail.google.com/mail?view=cm&fs=1&to=${yourEmail}&su=${subject}&body=${massage}`
    a.click();

    console.log(data);
}