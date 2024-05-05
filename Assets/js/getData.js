function getDataTestimonial(url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

    xhr.open("GET",url , true)

    xhr.onload = () => {
        resolve(JSON.parse(xhr.response));
    }

    xhr.onerror = () =>
        reject("Network Error!")

    xhr.send()
    });
}

async function allTesti() {

    const testimonials = await getDataTestimonial("https://api.npoint.io/e4ba1f281f13bf545215")

    const allTestimonial = testimonials.map((testimonial) => {
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

async function filterTestimonial(rating){

    const testimonials = await getDataTestimonial("https://api.npoint.io/e4ba1f281f13bf545215")

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