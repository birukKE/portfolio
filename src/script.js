


// Making the screen limits for experience and education

const education = document.getElementById('education__id')
const experience = document.getElementById('experience__id')
const project = document.getElementById('project__id')

const education_link = document.querySelector('a[href="about_me.html#education__id"]')
const experience__link = document.querySelector('a[href="about_me.html#experience__id"]')
const project__link = document.querySelector('a[href="about_me.html#project__id"]')




const actualSize = window.getComputedStyle(experience__link).fontSize


function checkScreepSpot(){
    
    if(Math.abs(experience.getBoundingClientRect().top) > Math.abs(project.getBoundingClientRect().top)){
        project__link.style.color = "#1b1446"
        project__link.style.fontSize = "1.2em";
        // document.querySelectorAll('.column__one ul li a')[2].style.setProperty('--before-width', '60px')

        experience__link.style.color = "black"
        experience__link.style.fontSize = ""
        // document.querySelectorAll('.column__one ul li a')[0].style.setProperty('--before-width', '30px')
        // document.querySelectorAll('.column__one ul li a')[1].style.setProperty('--before-width', '30px')

        education_link.style.color = "black"
        education_link.style.fontSize = ""
        
        project.style.background = "#498672ff"
        experience.style.background = ""
        education.style.background = ""
    }else if(Math.abs(education.getBoundingClientRect().top) < Math.abs(experience.getBoundingClientRect().top)){
        education_link.style.color = "#1b1446"
        education_link.style.fontSize = "1.2em";
        // document.querySelectorAll('.column__one ul li a')[0].style.setProperty('--before-width', '60px')
        // document.querySelectorAll('.column__one ul li a')[1].style.setProperty('--before-width', '30px')
        // document.querySelectorAll('.column__one ul li a')[2].style.setProperty('--before-width', '30px')


        experience__link.style.color = "black"
        experience__link.style.fontSize = ""

        
        project__link.style.color = "black"
        project__link.style.fontSize = ""

        education.style.background = "#498672ff"
        experience.style.background = "";
        project.style.background = "";
    }else if(Math.abs(education.getBoundingClientRect().top) > Math.abs(experience.getBoundingClientRect().top)){
        experience__link.style.color = "#1b1446"
        experience__link.style.fontSize = "1.2em";
        // document.querySelectorAll('.column__one ul li a')[1].style.setProperty('--before-width', '60px')
        // document.querySelectorAll('.column__one ul li a')[2].style.setProperty('--before-width', '30px')

        education_link.style.color = "black"
        education_link.style.fontSize = ""

        project__link.style.color = "black"
        project__link.style.fontSize = ""
        // document.querySelectorAll('.column__one ul li a')[0].style.setProperty('--before-width', '30px')
        // document.querySelectorAll('.column__one ul li a')[2].style.setProperty('--before-width', '30px')
        
        experience.style.background = "#498672ff"
        education.style.background = ""
        project.style.background = "";
    }
}

window.addEventListener("scroll", checkScreepSpot);



// Form verification
const sender_name = document.getElementById('full_name')
const email = document.getElementById('email')
const message = document.getElementById('message')


const form = document.getElementById('contact_form')


function sendMail(){
    let params = {
        name: sender_name.value,
        email: email.value,
        message: message.value
    }

    emailjs.send("service_7tm60fe", "template_w6tx8ci", params).then(() => alert(`Email sent!${sender_name.value}`)).catch(err => console.error("s: ", err))
    form.reset()
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    sendMail();

})








// 
// // Create a test account or replace with real credentials.
// const transporter = nodemailer.createTransport({
//     // service: 'gmail',
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//         // user: process.env.USER,
//         // pass: process.env.APP_PASSWORD,
//         user: "1birukde@gmail.com",
//         pass: "9mepmsbm",
//     },
// });
// 
// 
// form.addEventListener('submit', (e)=>{
//     alert("LOL")
//     e.preventDefault()
// 
//     (async () => { 
// 
//         const info = await transporter.sendMail({
//         from: "Biruk <1birukde@gmail.com>",
//         to: "1birukde@gmail.com",
//         subject: "New contact made from portfolio!",
//         text: `Message from: ${name.value} \n ${email.value} \n\n ${message.value}`, // plain?text body
//         // console.log("Message sent:", info.messageId)
//     });
// 
//  })();
// })
//     


