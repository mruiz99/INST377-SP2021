function mapInit() {
  const mymap = L.map('mapid').setView([38.7849, -76.8721], 13);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibXJ1aXo5OSIsImEiOiJja201M2dyNGgwYW5hMnVvNXFnNWh3c3RqIn0.tt500DzwIpYLLCs1gsWrrQ'
  }).addTo(mymap);
  //const marker = L.marker([38.7849, -76.8721]).addTo(mymap)

  return mymap;
}

async function dataHandler(mapObjectFromFunction) {
  const form = document.querySelector('.userform');
  const search = document.querySelector('#zip');
  const submit = document.querySelector('#submit');
  const suggestions = document.querySelector('.suggestions');

  const result = [];
  const request = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
  const data = await request.json();

  search.addEventListener('input', (event) => {
    console.log('input', event.target.value);
  })

  function unique(arr) {
    for (let thing of arr) {
      if (!result.includes(thing)) {
        result.push(thing);
      }
    }
  
    return result;
  }

  function findMatches(wordToMatch, data) {
    console.log("FINDMATCHES");
    return data.filter(place => {
      // here we need to figure out if the zipcode 		
      // MATCHES what was searched
      const regex = new RegExp(wordToMatch, 'gi');
      //'g' means global, 'i' means case insensitive
      return place.zip.match(regex);
    });
  }
  

  form.addEventListener('submit', async (event) => { 
    if (event.target.value.length > 0) {
      console.log("HELLO");
      const matchArray = findMatches(event.target.value, data);
      const html = matchArray.map(place => {
        const regex = new RegExp(event.target.value, 'gi');
        const zipCode = place.zip.replace(regex, '<span class="hl">${event.target.value}</span>');
        return `
        
          <address class="results">
              <li>
                  <span class="name">${place.name}</span>
              </li>
              <li>
                  <span class="category">${place.category}</span>
              </li>
              <li>
                  <span class="address">${place.address_line_1}</span>
              </li>
              <li>
                  <span class="name">${place.city}, ${place.state}</span>
              </li>
              <li>
                  <span class="zipcode">${place.zip}</span>
              </li>
          </address>
          
          `;
      }).join('');
      console.log("SUGGESTIONS");
      suggestions.innerHTML = html;
  } else {
      suggestions.innerHTML = "";
      console.log("ELSE");
  }
  });
}

async function windowActions() {
  const map = mapInit();
  await dataHandler(map);
}

window.onload = windowActions;