var dataProject  = [];

function submitProject() {
    let pName = document.getElementById("pName").value;
    let sDate = document.getElementById("sDate").value;
    let eDate = document.getElementById("eDate").value;
    let desc = document.getElementById("desc").value;
    var checkBox = document.getElementsByName("techno")
    let uImage = document.getElementById("uImage").value;
    


    if (pName === "") {
        return alert("Input All Your Data!")
    } else if (sDate === "") {
        return alert("Input All Your Data!")
    } else if (eDate === "") {
        return alert("Input All Your Data!")
    } else if (desc === "") {
        return alert("Input All Your Data!")
    }  
    
    if (uImage === "") {
        return alert("Input All Your Data!")
    }  
    
    if (eDate < sDate) { 
        return alert("Your Dates dont match")
    } 

    var techno = "";
    for (i = 0; i < checkBox.length; i++){
        if (checkBox[i].checked==true){
            techno += checkBox[i].value
        } else if (i < 1) {
            return alert ("Check Your Technologies")
        }
    }


    dataProject.push ({
    Name: pName,
    StartDate: sDate,
    EndDate: eDate,
    Description: desc,
    Technologies: techno,
    Image : uImage
    })
    console.log(dataProject);

}