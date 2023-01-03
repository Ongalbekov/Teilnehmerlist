let inputField=document.querySelector('#inputField');
let hinzufugen=document.querySelector('#hinzufugen');
let loschen=document.querySelector('#löschen');
let list=document.querySelector('#listElement');

let teilnehmer=[]
hinzufugen.addEventListener('click', (event)=>{
    event.preventDefault();
    teilnehmer.push(inputField.value);
    list.innerHTML=`<li>${teilnehmer.join('</li><li>')}</li>`;
    inputField.value='';
})
loschen.addEventListener('click', (event)=>{
    event.preventDefault();
    teilnehmer.pop('');
    // list.innerHTML=`<li>${teilnehmer.join(',</li><li>')}</li>`;
   if(teilnehmer.length !=0) {
        list.innerHTML=`<li> ${teilnehmer} </li>`;
   }
   else{list.innerHTML='';}
});