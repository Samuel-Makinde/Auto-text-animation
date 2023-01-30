const containerEl = document.querySelector(".container");
const careers = ["web developer", "instructor", "freelancer", "youtuber", "programer"];
let careerOption = 0;
let characterIndex = 0;

updateCareers();
function updateCareers(){
characterIndex++;
    containerEl.innerHTML = `
    <h1>i am ${careers[careerOption].slice(0,1) === "i" ? "an" : "a"} ${careers[careerOption].slice(0,characterIndex)}</h1>
`;
if(characterIndex === careers[careerOption].length){
    careerOption++;
    characterIndex = 0;
}
// to make it startall over again
if (careerOption === careers.length) {
    careerOption = 0;
}
setTimeout(updateCareers, 500);
}

