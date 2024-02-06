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

export interface AlertBoxProps {
  status: 'info' | 'warning' | 'success' | 'error' | 'loading' | undefined;
  title?: string;
  desc: string;
}

export interface InputProps {
  zipCode: string;
}

export interface PageNumberProps {
  number: number;
}
