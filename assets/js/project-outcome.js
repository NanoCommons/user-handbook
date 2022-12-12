async function getUsers() {
  await fetch('https://cordis.europa.eu/project/id/731032/en?format=xml')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
}