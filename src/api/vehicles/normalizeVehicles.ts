import { VehicleDto } from './vehicleDto';
import { VehicleModel } from './vehicleModel';

export const normalizeVehicles = (vehicles: VehicleDto): VehicleModel => {
  return {
    next: vehicles.next,
    previous: vehicles.previous,
    count: vehicles.count,
    vehicles:
      vehicles.results.map((vehicle) => ({
        manufacturer: vehicle.manufacturer,
        model: vehicle.model,
        name: vehicle.name,
        passengers: vehicle.passengers,
      })) ?? [],
  };
};
