
document.getElementById('mainPictureWrapper').style.opacity = '1';

setTimeout(function () {
    document.getElementById('headerWrapper').style.height = '70px';
    document.getElementById('mainPictureWrapper').style.height = '80vh';

}, 2000)


let testimonials = [
    {
        author: 'Stephanie Bixby, Nurse Practitioner',
        content: '“Chris is a kind and loving caregiver that you can trust with all of your phlebotomy needs!”',
        imgUrl: './assets/stephanie.jpeg'
    },
    {
        author: 'Brandy Berry RN, Critical Care',
        content: '"West Mobile Phlebotomy adheres to all safety protocols.... Just knowing the patients, as well as the patients families are a top priority in preventing immunocompromised patients from being exposed to COVID-19, other viruses, and diseases. This personalized care makes West Mobile Phlebotomy Corporation the number one choice for all your phlebotomy and Labs needs."',
        imgUrl: './assets/brandy.jpeg'
    },
    {
        author: 'Kent Robinson PhD, MBA',
        content: '"The ease, speed, and safety provided by West Mobile Phlebotomy greatly increases patients\' quality of life."',
        imgUrl: './assets/kent.jpeg'
    }
]

let testimonyCount = 0;

setInterval(() => {
    document.getElementById('authorBio').src = testimonials[testimonyCount].imgUrl;
    document.getElementById('testimonyText').innerHTML = testimonials[testimonyCount].content;
    // document.getElementById('testimonyBioName').innerHTML = testimonials[testimonyCount].author;
    testimonyCount++;
    
    if(testimonyCount >= testimonials.length) {
        testimonyCount = 0;
    }

    console.log(testimonyCount)

}, 7000);