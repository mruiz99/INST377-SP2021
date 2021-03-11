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
  const marker = L.marker([38.7849, -76.8721]).addTo(mymap)

  return map;
}

async function dataHandler(mapObjectFromFunction) {
  const form = document.querySelector('.userform');
  const search = document.querySelector('#city')
  const suggestions = document.querySelector('.suggestions');}

async function windowActions() {
  const map = mapInit();
  await dataHandler(map);
}

window.onload = windowActions;