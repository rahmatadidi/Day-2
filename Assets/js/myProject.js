async function deleteProject(index){
    e.preventDefault()
    const response = await fetch(`http://localhost:5000/project/${index}` , {
        method: "DELETE"
    })

}

// var myProject  = [];

// function submitProject() {
//     let pName = document.getElementById("pName").value;
//     let sDate = document.getElementById("sDate").value;
//     let eDate = document.getElementById("eDate").value;
//     let desc = document.getElementById("desc").value;
//     var checkBox = document.getElementsByName("techno")
//     let uImage = document.getElementById("uImage").files[0];

//     if (!uImage) {
//         return alert("Input All Your Data!")
//     }

//     let URLimage = URL.createObjectURL(uImage)

//     if (pName === "") {
//         return alert("Input All Your Data!")
//     } else if (sDate === "") {
//         return alert("Input All Your Data!")
//     } else if (eDate === "") {
//         return alert("Input All Your Data!")
//     } else if (desc === "") {
//         return alert("Input All Your Data!")
//     }  
    
    
    
    
//     // console.log(URLimage)
//     if (eDate < sDate) { 
//         return alert("Your Dates dont match")
//     } 

//     var techno = "";
//     for (i = 0; i < checkBox.length; i++){
//         if (checkBox[i].checked==true){
//             techno += checkBox[i].value
//         } 
//     } if (techno==""){
//         return alert ("Check Your Technologies")
//     }

//     let StartDate = sDate.split("/")
//     let EndDate = eDate.split("/")

//     let formatSdate = StartDate[2] + "-" + StartDate[1] + "-" + StartDate[0]
//     let formatEdate = EndDate[2] + "-" + EndDate[1] + "-" + EndDate[0]

//     let newSdate = new Date(formatSdate)
//     let newEdate = new Date(formatEdate)

//     let timeDiff = newEdate - newSdate
//     let diffDay = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
//     let diffMonth = Math.floor(diffDay / 30.44)
//     let diffYear = Math.floor(diffMonth / 12)

//     let duration;

//     if (diffYear > 0 ){
//         duration = `${diffYear} Years`
//     } else if (diffMonth > 0 ){
//         duration = `${diffMonth} Months`
//     } else{
//         duration = `${diffDay} Days`
//     }


//     myProject.push ({
//     Name: pName,
//     StartDate: sDate,
//     EndDate: eDate,
//     Description: desc,
//     Technologies: techno,
//     Image : URLimage,
//     Duration : duration
//     })
//     // console.log(myProject)
//     newProject()
// }


// function newProject() {
//     document.getElementById("result-project").innerHTML = ""
// console.log(myProject)
//     for (let i = 0; i < myProject.length; i++) {
//         const nProject = myProject[i]

//         document.getElementById("result-project").innerHTML += 
//         `<div class="mProject" style="margin-right: 0px;"> 
//         <div class="mImage ">
//             <img style="width: 100%;" src="${nProject.Image}" alt="Project Image">
//         </div>
//         <h3>${nProject.Name}</h3>
//         <p style="color: rgb(156, 155, 155);">durasi : ${nProject.Duration}</p>
//         <p style="width: 100%;">${nProject.Description}</p>
//         <div class="icon">
//                 <img src="./Assets/img/play-store.svg" alt="Play Store" style="margin-right: 20px;">
//                 <img src="./Assets/img/html5.svg" alt="HTML5" style="margin-right: 20px;">
//                 <img src="./Assets/img/css3.svg" alt="CSS3" style="margin-right: 20px;">
//             </div>
//             <div class="btn d-flex">
//                 <button type="button" class="btn btn-secondary" style="margin-right: 10px;">Edit</button>
//                 <button type="button" class="btn btn-secondary">Delete</button>
//             </div>
//     </div>`
//     console.log(nProject)
//     }
    
// }