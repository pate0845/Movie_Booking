'use strict';
const input=document.getElementById('input');
const btn=document.getElementById('btn-click');
const output=document.getElementById('output');

const url='https://api.funtranslations.com/translate/minion.json';



const translate=async function(text){
    const data=await fetch(translatedUrl(text));   
    const result=await data.json();
    try{
     output.innerText=result.contents.translated;
    }catch (TypeError){
        output.innerText=result.error.message;
    }
}

const translatedUrl=function(text){
    return url +'?text='+text;
}

btn.addEventListener('click',()=>{
     let userText=input.value;
     output.innerText=userText;
     translate(userText);
    });

