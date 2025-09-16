import { AbstractControl } from "@angular/forms";

 export function checkAbusiveWords(control:AbstractControl){
    const abusiveWords = ["idiot","fool"];
    const sentence = control.value;
    let isAbusive = false;
    let abusiveWord: String ="";
    const wordsArray = sentence.split(" ");
    for(let words of wordsArray){
        if(abusiveWords.includes(words)){
            isAbusive= true;
            abusiveWord = words;
        }
    }
    return isAbusive?{isAbusive:true,abusiveWord:abusiveWord
    }:null;
 }