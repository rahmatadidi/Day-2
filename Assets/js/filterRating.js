function allTesti() {


const allTestimonial = testimonials.map((testimonial)=> {
    return `
    <div class="part-testi" id="part-testi">
        <div class="testi">
                <img style="width: 100%;" src="${testimonial.image}">
                <p>"${testimonial.content}"</p>
                <h2 style="display: flex; justify-content: flex-end;">- ${testimonial.author}</h2>
        </div>
    </div>`
});

document.getElementById("part-testi").innerHTML = allTestimonial.join("")
}
const testimonials = [
    {
        image : "https://images.pexels.com/photos/20508970/pexels-photo-20508970/free-photo-of-pria-laki-laki-lelaki-tembok.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        content : "gilak keren",
        author : "Rahmat Adi Santoso",
        rating : 5
    },
    {
        image : "../Assets/img/pacar.jpg",
        content : "Mantap Sekali bang!",
        author : "Putri Ayu Fanisah",
        rating : 4
    },
    {
        image : "https://images.pexels.com/photos/19261795/pexels-photo-19261795/free-photo-of-trotoar-anak-pedesaan-fotografi-binatang.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        content : "Mbeeek!! mbekk!!",
        author : "Kambing Bandot",
        rating : 1
    }  
]

function filterTestimonial(rating){
    const fillterTesti = testimonials.filter(testimonial => testimonial.rating == rating)
    console.log(fillterTesti)
    if(!fillterTesti.length){
        return document.getElementById("part-testi").innerHTML = `<h1 style="margin:auto;">Data Not Found!</h1>`
    }
    const fillteredTesti = fillterTesti.map((testimonial) => {
        return `
        <div class="part-testi" id="part-testi">
            <div class="testi">
                    <img style="width: 100%;" src="${testimonial.image}">
                    <p>"${testimonial.content}"</p>
                    <h2 style="display: flex; justify-content: flex-end;">- ${testimonial.author}</h2>
            </div>
        </div>`
    });
    document.getElementById("part-testi").innerHTML = fillteredTesti.join("")
} allTesti()