import {Address} from "./address";

export class User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  date_of_birth: string;
  email: string;
  gender: string;
  phone_number: string;
  social_insurance_number: string;
  username: string;
  address: Address;
}
