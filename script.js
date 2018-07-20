var defBox = document.getElementById('defBox')
var button = document.querySelector('button')
var words = document.querySelector("input[name='words']");



window.addEventListener('load', e => {
  axios.get(`http://api.urbandictionary.com/v0/define?term=hacker`)
    .then(response => {
      defBox.innerHTML = ``;

      for (let i = 0; i < 20; i++) {

        defBox.innerHTML += `<h2><b>HACKER:</b></h2>
      <h5 class='defs' id="${i}"> <span class="red">${i+1}</span> - ${removeSquareBrackets(response.data.list[i].definition)} <br> <p><i>${removeSquareBrackets(response.data.list[i].example)}</i></p>


      </h5> `;

      }

    });
})



button.addEventListener('click', e => {
  axios.get(`http://api.urbandictionary.com/v0/define?term=${words.value}`)
    .then(response => {
      defBox.innerHTML = '';

      for (let i = 0; i < 8; i++) {


        defBox.innerHTML += `
<h2>${removeSquareBrackets(words.value.toUpperCase())}:</h2>
<h5 class='defs' id="defs">

     <span class="numbers">${i+1}</span> - ${removeSquareBrackets(response.data.list[i].definition)} <br>
     <p><i>${removeSquareBrackets(response.data.list[i].example)}</i></p>
    </h5> `;


      }
    })
});


function removeSquareBrackets(str){
  for(let i = 0; i<str.length; i++){
    if(str[i]=='[' || str[i]==']'){
      str = str.slice(0, i) + str.slice(i+1);
    }
  }
  return str;
}
