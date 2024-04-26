class testimonial {
    image = ""
    content = ""
    author = ""

    constructor(image,content,author){
        this.image = image
        this.content = content
        this.author = author
    }
    testi() {
        return `
        <div class="part-testi" id="part-testi">
            <div class="testi">
                    <img style="width: 100%;" src="${this.image}">
                    <p>"${this.content}"</p>
                    <h2 style="display: flex; justify-content: flex-end;">- ${this.author}</h2>
            </div>
        </div>`
    }
} 
// console.log(testimonial)

const testimonial1 = new testimonial ("https://images.pexels.com/photos/20508970/pexels-photo-20508970/free-photo-of-pria-laki-laki-lelaki-tembok.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","gilak keren", " Rahmat Adi Santoso")
const testimonial2 = new testimonial ("../Assets/img/pacar.jpg","Mantap Sekali bang!", " Putri Ayu Fanisah")
const testimonial3 = new testimonial ("https://images.pexels.com/photos/19261795/pexels-photo-19261795/free-photo-of-trotoar-anak-pedesaan-fotografi-binatang.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","Mbeeek!! mbekk!!", " Kambing Bandot")

const testimonials = [testimonial1,testimonial2,testimonial3];
console.log(testimonial1)

let allTestimonial = ""

for (i = 0; i < testimonials.length; i++){
    allTestimonial += testimonials[i].testi()
}

document.getElementById("part-testi").innerHTML = allTestimonial