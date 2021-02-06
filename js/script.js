var btn = document.getElementById("getLocalizacion");

btn.addEventListener('click', mostrarContenido);

function mostrarContenido() {

    fetch('https://ipapi.co/json').then(
        function (response) {
            console.log(response);
            return response.json();
        }
    )
        // en esta parte se obtiene los datos de la API IP GEOLOCATION 
        .then(function (data) {
            console.log(data)
            let mostrar = document.getElementById("contenidoLocalizacion")
            mostrar.innerHTML = `

        
        <ul class="col-md-12 text-center list-group">
           <li class="list-group-item active" aria-current="true">Los siguientes datos obtenidos son de una IP-API </li>
           <li class="list-group-item"> Continente : <span class="badge bg-warning text-dark">${data.continent_code}</span> </li>
           <li class="list-group-item"> País :  <span class="badge bg-warning text-dark"> ${data.country_name}</span></li>
           <li class="list-group-item"> Capital : <span class="badge bg-warning text-dark"> ${data.country_capital}</span></li>
           <li class="list-group-item"> Región : <span class="badge bg-warning text-dark"> ${data.region}</span></li>
           <li class="list-group-item"> Código de Región : <span class="badge bg-warning text-dark"> ${data.region_code}</span></li>
           <li class="list-group-item"> Latitude : <span class="badge bg-warning text-dark"> ${data.latitude}</span></li>
           <li class="list-group-item"> Longitude : <span class="badge bg-warning text-dark"> ${data.longitude}</span></li>
           <li class="list-group-item"> Zona Horaria : <span class="badge bg-warning text-dark"> ${data.timezone}</span></li>
           <li class="list-group-item"> Proveedor de Servicio : <span class="badge bg-warning text-dark"> ${data.org}</span></li>
        </ul>
        `;
        })

        .catch(function (err) {
            console.log(err);
        });


}