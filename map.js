var mymap = L.map('mapid').setView([47.6, -122.3], 10);

            var url ='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=';
            var apiKeyLocal = secrets.apiKey;
            var finalUrl = url + apiKeyLocal;
          
            L.tileLayer(finalUrl, {
              maxZoom: 18,
              attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
              id: 'mapbox.dark'
            }).addTo(mymap);