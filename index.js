const express = require("express")
const app = express()
const port = 5000
const path = require("path")
const config = require("./config/config.json")
const {Sequelize, QueryTypes} = require("sequelize")
const sequelize = new Sequelize(config.development)

app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "views"))

app.use("/assets", express.static(path.join(__dirname, "./Assets")))
app.use(express.urlencoded({extended:false}))




app.get("/", home)
app.get("/contact", contact)
app.get("/addProject", addProjecForm)
app.get("/testimonial", testimonial)
app.get("/project", project)
app.get("/editProject/:id", editProject)
app.get("/projectDetail/:id", projectDetail)



app.post("/addProject", addProject)
app.post("/deleteProject/:id", deleteProject)
app.post("/project/:id", editNewProject)




const data = [];

// service/Controller
async function project(req, res){
    const query = "SELECT * FROM projects";
    const dataProject = await sequelize.query(query, {type: QueryTypes.SELECT});
    console.log(dataProject);
    res.render("project", {data : dataProject})
}
function home(req, res){
    res.render("newHome")
}
function editProject(req,res){
    const {id} = req.params;
    const selectedProject = data[id]
    selectedProject.id = id

    res.render("editProject", {data : selectedProject})
}

function editNewProject(req, res){

    const {
        projectName,
        content,
        startDate,
        endDate,
        react,
        next,
        node,
        typeScript,
        image,
        id
    } = req.body;

    const newSdate = new Date(startDate)
    const newEdate = new Date(endDate)
    const timeDiff = newEdate - newSdate
    const diffDay = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
    const diffMonth = Math.floor(diffDay / 30.44)
    const diffYear = Math.floor(diffMonth / 12)
    let duration;
    if (diffYear > 0 ){
        duration = `${diffYear} Years`
    } else if (diffMonth > 0 ){
        duration = `${diffMonth} Months`
    } else{
        duration = `${diffDay} Days`
    }

    data[id] = {
    projectName,
    content,
    duration,
    react,
    next,
    node,
    typeScript,
    image : "https://images.pexels.com/photos/16890700/pexels-photo-16890700/free-photo-of-kedudukan-posisi-condong-tas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}
    res.redirect("/project")
}
function contact(req, res){
    res.render("newContact")
}
function addProjecForm(req, res){
    res.render("addProject")
}
function testimonial(req, res){
    res.render("testimonial")
}
async function projectDetail (req,res){
    const {id} = req.params;
    const query = `SELECT * FROM projects WHERE id=${id}`;
    const dataProject = await sequelize.query(query, {type: QueryTypes.SELECT});
    console.log(dataProject);

    res.redirect("/projectDetail", dataProject)
}
function deleteProject (req, res){
    const { id } = req.params;
    data.splice(id, 1)
    res.redirect("/project")
}

function addProject(req,res){

    const {
        projectName,
        content,
        startDate,
        endDate,
        react,
        next,
        node,
        typeScript,
        image
    } = req.body;
    const newSdate = new Date(startDate)
    const newEdate = new Date(endDate)
    const timeDiff = newEdate - newSdate
    const diffDay = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
    const diffMonth = Math.floor(diffDay / 30.44)
    const diffYear = Math.floor(diffMonth / 12)
    let duration;
    if (diffYear > 0 ){
        duration = `${diffYear} Years`
    } else if (diffMonth > 0 ){
        duration = `${diffMonth} Months`
    } else{
        duration = `${diffDay} Days`
    }

    data.unshift({
        projectName,
        duration,
        image : "https://images.pexels.com/photos/16890700/pexels-photo-16890700/free-photo-of-kedudukan-posisi-condong-tas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        react,
        next,
        node,
        typeScript,
        content
    });
    res.redirect("project")
}


app.listen(port, () => {
    console.log("Server Running On Port: ", port )
})