document.addEventListener('DOMContentLoaded', getData());

async function getData() {
  await fetch('pahlawan.json')
    .then(pahlawan => pahlawan.json())
    .then(hero => {
      new DataTable('#tablePahlawan', {
        data: hero,
        columns: [
          { data: 'name', title: 'Nama' },
          { data: 'birth_year', title: 'Tahun Lahir' },
          { data: 'death_year', title: 'Tahun Wafat' },
          { data: 'description', title: 'Deskripsi' },
          { data: 'ascension_year', title: 'Tahun Pengangkatan' }
          ],
      })
    })
    .catch(err => console.log(err));
}