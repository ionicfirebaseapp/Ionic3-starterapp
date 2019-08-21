import { Component, ViewChild, ElementRef, NgZone, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { MapsAPILoader } from '@agm/core';
declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  providers: [Geolocation]
})

export class MapPage implements OnInit {
  @ViewChild("search")
  public searchElementRef: ElementRef;
  public searchControl: FormControl;
  public latitude: number;
  public longitude: number;
  public zoom: number;
  lat1: number;
  lng1: number;
  lat2 = 12.9719;
  lng2 = 77.6412;
  visible: boolean = false;
  origin = { longitude: this.lng1, latitude: this.lat1 };
  destination = { longitude: this.lng2, latitude: this.lat2 };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    public mapsAPILoader: MapsAPILoader,
    public ngZone: NgZone) {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.origin.latitude = resp.coords.latitude;
      this.origin.longitude = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  ngOnInit() {
    this.zoom = 4;
    //create search FormControl
    this.searchControl = new FormControl();
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place = autocomplete.getPlace();
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          //set latitude, longitude and zoom
          this.origin.latitude = place.geometry.location.lat();
          this.origin.longitude = place.geometry.location.lng();
          this.zoom = 50;
        });
      });
    });
  }

  getDirection() {
    this.visible = true;
  }

}
