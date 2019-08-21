import { GoogleMapsAPIWrapper } from '@agm/core/services/google-maps-api-wrapper';
import { Directive, Input } from '@angular/core';
declare let google: any;

@Directive({
  selector: 'agm-map-directions'
})
export class DirectionsMapDirective {
  @Input() origin;
  @Input() destination;
  constructor(private gmapsApi: GoogleMapsAPIWrapper) {
  }

  ngOnInit() {
    this.gmapsApi.getNativeMap().then(map => {
      let directionsService = new google.maps.DirectionsService;
      let directionsDisplay = new google.maps.DirectionsRenderer;
      directionsDisplay.setMap(map);
      directionsService.route({
        origin: { lat: this.origin.latitude, lng: this.origin.longitude },
        destination: { lat: this.destination.latitude, lng: this.destination.longitude },
        waypoints: [],
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
      }, function (response, status) {
        //console.log("direction-"+JSON.stringify(response));
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    });
  }

}
