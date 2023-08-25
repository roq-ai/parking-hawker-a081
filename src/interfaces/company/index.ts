import { BusinessOwnerInterface } from 'interfaces/business-owner';
import { ParkingSpaceInterface } from 'interfaces/parking-space';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  business_owner?: BusinessOwnerInterface[];
  parking_space?: ParkingSpaceInterface[];
  user?: UserInterface;
  _count?: {
    business_owner?: number;
    parking_space?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
