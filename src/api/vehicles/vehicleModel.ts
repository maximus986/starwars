export interface VehicleModel {
  vehicles: Vehicle[];
  count: number;
  next: string | null;
  previous: string | null;
}

interface Vehicle {
  name: string;
  manufacturer: string;
  model: string;
  passengers: string;
}
