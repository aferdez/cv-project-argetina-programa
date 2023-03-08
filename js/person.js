
function getPersona() {
    var min = 1;
    var max = 10;
    let idperson = Math.floor(Math.random() * (max-min+1)+min)
    const url = 'https://jsonplaceholder.typicode.com/users/'+idperson;

      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("cvName").innerHTML = data.name+"<hr>";
        document.getElementById("website").innerHTML = " "+data.website;
        document.getElementById("phone").innerHTML = " "+data.phone;
        document.getElementById("localidad").innerHTML = " " +data.address.street +" | " + data.address.city;
        document.getElementById("email").innerHTML = " "+data.email;                
      })
    }