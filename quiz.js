
let questions = [
    {
      id: 1,
      question: "Apa kepanjangan dari RAM?",
      answer: "Random Access Memory",
      options: [
        "Run Accept Memory",
        "Random All Memory",
        "Random Access Memory",
        "Tidak ada yang benar"
      ]
    },
    {
      id: 2,
      question: "Apa kepanjangan dari CPU?",
      answer: "Central Processing Unit",
      options: [
        "Central Program Unit",
        "Central Processing Unit",
        "Central Preload Unit",
        "Tidak ada yang benar"
      ]
    },
    {
      id: 3,
      question: "Apa kepanjangan dari E-mail?",
      answer: "Electronic Mail",
      options: [
        "Electronic Mail",
        "Electric Mail",
        "Engine Mail",
        "Tidak ada yang benar"
      ]
    },
    {
      id: 4,
      question: "'DB' dalam komputer berarti?",
      answer: "DataBase",
      options: [
        "Double Byte",
        "Data Block",
        "DataBase",
        "Tidak ada yang benar"
      ]
    },
    {
      id: 5,
      question: "Apa itu FMD?",
      answer: "Fluorescent Multi-Layer Disc",
      options: [
        "Fluorescent Multi-Layer Disc",
        "Flash Media Driver",
        "Fast-Ethernet Measuring Device",
        "Tidak ada yang benar"
      ]
    },
    {
      id: 6,
      question: "Berapa banyak bit dalam satu byte?",
      answer: "8",
      options: [
        "32",
        "16",
        "8",
        "64"
      ]
    },
    {
      id: 7,
      question: "JPG berarti?",
      answer: "Format untuk file gambar",
      options: [
        "Format untuk file gambar",
        "A Jumper Programmed Graphic",
        "Jenis hard disk",
        "Satuan ukur untuk memori"
      ]
    },
    {
      id: 8,
      question: "Mana yang merupakan komputer mainframe awal?",
      answer: "ENIAC",
      options: [
        "ENIAC",
        "EDVAC",
        "UNIC",
        "ABACUS"
      ]
    },
    {
      id: 9,
      question: "Papan sirkuit utama dalam komputer adalah?",
      answer: "Mother board",
      options: [
        "Harddisk",
        "Mother board",
        "Mikroprosesor",
        "Tidak ada yang benar"
      ]
    },
    {
      id: 10,
      question: "ISP berarti?",
      answer: "Internet Service Provider",
      options: [
        "Internet Survey Period",
        "Integrated Service Provider",
        "Internet Security Protocol",
        "Internet Service Provider"
      ]
    }
  ];
  

let question_count = 0;
let points = 0;


window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();  
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){

    if(question_count == questions.length -1){
        location.href = "final.html";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points += 10;
    sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
}