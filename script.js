document.getElementById("btn").addEventListener('click', characterChange);

function characterChange() {

  document.getElementById("name").innerHTML = "Loading...";
  document.getElementById("eyeColor").innerHTML = "Loading...";
  document.getElementById("skinColor").innerHTML = "Loading...";

  const randomNumber = Math.floor(Math.random() * 83)

  fetch(`https://swapi.py4e.com/api/people/${randomNumber}/`)
    .then(response => { return response.json() })
    .then(character => {
      const name = character['name'];
      const eyeColor = character['eye_color'];
      const skinColor = character['skin_color'];

      document.getElementById("name").innerHTML = name;
      document.getElementById("eyeColor").innerHTML = eyeColor;
      document.getElementById("skinColor").innerHTML = skinColor;
    });
}

// https://swapi.py4e.com/api/people/53/
// fetch('https://swapi.dev/api/people/29/')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok ' + response.statusText);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('There has been a problem with your fetch operation:', error);
//   });
