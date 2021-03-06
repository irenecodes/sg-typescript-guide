// instructions to every other class on how they can be an argument to 'addMarker' 
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    // adding a new requirement 
    markerContent(): string,
    color: string;
}

export class CustomMap {
    // carry a reference to the google map. googleMap will be an instance of google.maps.Map
    private googleMap: google.maps.Map;
    // instantiate 
    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });
            infoWindow.open(this.googleMap, marker);
        })
    }
}
