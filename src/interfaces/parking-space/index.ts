import { BookingInterface } from 'interfaces/booking';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ParkingSpaceInterface {
  id?: string;
  location: string;
  availability?: boolean;
  price: number;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  company?: CompanyInterface;
  _count?: {
    booking?: number;
  };
}

export interface ParkingSpaceGetQueryInterface extends GetQueryInterface {
  id?: string;
  location?: string;
  company_id?: string;
}
