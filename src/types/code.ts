export interface Places {
  'place name': string;
  longitude: string;
  state: string;
  'state abbreviation': string;
  latitude: string;
}

export interface Code {
  'post code': string;
  country: string;
  'country abbreviation': string;
  places: Places[];
}