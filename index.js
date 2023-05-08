const liste = document.getElementById('ma-liste-de-donnees');

fetch('localhost:3000')
  .then(response => response.json())
  .then(data => {
    data.forEach(donnee => {
      const elementListe = document.createElement('li');
      elementListe.innerText = donnee.name + ' : ' + donnee.age + ' ans';
      liste.appendChild(elementListe);
    });
  });
