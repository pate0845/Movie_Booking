'use strict';
const input=document.getElementById('input');
const btn=document.getElementById('btn-click');
const output=document.getElementById('output');

const url='https://api.funtranslations.com/translate/minion.json';



const translatedUrl=function(text){
    return `${url}Text?=${text}`;
}

const translate=async function(text){
    const data=await fetch(translatedUrl(text));   
    const result=await data.json();
     console.log(result);
}

btn.addEventListener('click',()=>{
     let userText=input.value;
     output.innerText=userText;
     input.value='';
     translate(userText);
    });

