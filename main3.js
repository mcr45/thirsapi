//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  //const url = 'https://pokeapi.co/api/v2/pokemon/'+choice
  // https://animechan.vercel.app/api/random/character?name=saitama
  const url ='https://animechan.vercel.app/api/random/character?name=' + choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText=data.character
        document.querySelector('h3').innerText=data.quote

        
        //document.querySelector('img').src= data.message 


      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}