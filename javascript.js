// var collapseDiv = document.getElementById('navbarSupportedContent')
// let windowWidth = window.innerWidth
// window.addEventListener('DOMContentLoaded', (event) => {
//     responsive()
// });
// window.addEventListener('resize',()=>{
//     responsive()
// })
// const responsive = ()=>{
//     if(windowWidth < 770){
//         collapseDiv.className = "collapse navbar-collapse"
//     }
//     else{
//         collapseDiv.className="d-flex justify-content-end"
//     }
// }
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }