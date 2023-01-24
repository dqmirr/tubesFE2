function getJson() {
    fetch('heroes.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        let output = "";
        data.forEach(function (hero) {
          output += `<tr>
                  <td>${hero.name}</td>
                  <td>${hero.birth_year}</td>
                  <td>${hero.death_year}</td>
                  <td>${hero.description}</td>
                  <td>${hero.ascension_year}</td>
                  
              </tr>`;
        });
        document.getElementById('tablebody').innerHTML = output;
      })
      .catch(err => console.log(err));
  }
  getJson()