const URL = "https://api.adviceslip.com/advice";
const factPara = document.querySelector("#quote-text");
const btn = document.querySelector("#fetch-btn");

const getFacts = async()=>{
    //console.log("getting data....");
    let response = await fetch(URL);
    if(!response.ok){
        factPara.innerText = "Error";
        return;
    }
    //console.log(response);
    let data = await response.json();
    factPara.innerText = data.slip.advice;
}
btn.addEventListener("click",getFacts)
getFacts();