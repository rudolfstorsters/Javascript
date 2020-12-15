

function init() {

//     const parseParams = (querystring) => {

//         // parse query string 
//         const params = new URLSearchParams(querystring);
    
//         const obj = {};
    
//         // iterate over all keys
//         for (const key of params.keys()) {
//             if (params.getAll(key).length > 1) {
//                 obj[key] = params.getAll(key);
//             } else {
//                 obj[key] = params.get(key);
//             }
//         }
    
//         return obj;
//     };
    
//     const demoEl = document.getElementById('demo')
//     const params = parseParams(window.location.search);
    
    
   
   
// console.log(params);
// console.log(params["0"]);
// console.log(params.length, questions.length);

// function checkResults(){
//     var form = document.forms[0];
//     var selectElement = form.querySelectorAll(('input[type=radio]:checked'));
//     var selectedValue = selectElement.value;
//     console.log(selectedValue)
// }




// if(Object.keys(params).length === questions.length){



//    checkResults()

//   const result = `
//    <p>
    
//    <p>
//    `
        
//     return (demoEl.innerHTML = result);
// };

    
    let quizStr=''
   
        const quizEl = document.getElementById('quiz')
        questions.forEach( function(question, qIndex){
            
        let answerStr = ''
        
        question.a.forEach( function(answer, aIndex){

        
            
            

             answerStr += `
            
            <li>
            <lable>
            ${answer}
            <input type="radio"  Id="question${qIndex}" name ="${qIndex}" 
            data-correct="${question.correct === aIndex}" 
            checked>
            </lable>
            </li>
            `
            })
        quizStr += `
         <div>
            <h1>${question.q}</h1>
            <ul>
            ${answerStr}
            </ul>
           
        </div>
        `
    })
     
    quizEl.innerHTML = quizStr;

    
    /*
    let score = 0;
    

  quizEl.addEventListener('submit',function(element){
        element.preventDefault()
        
       const selectedInput = element.target.querySelectorAll('input[type=radio]:checked')
       if (selectedInput.dataset.correct === "true"){
        score ++;
        console.log(score + "+1 point")
    } else {
    console.log(score + "no points")
    }
    const result = questions.filter(question =>{
        return question.g === 1
    })
if (score >= 12){
    console.log (result + "jūs piederat pie intravertā tipa cilvēkiem")
} else {
    console.log("jūs piederat pie ekstravertā tipa cilvēkiem")
}

    })
    */
}


init()

