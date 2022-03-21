export interface AuthToken {
  accessToken: string;
  expiresIn: number;
  tokenType: string;
}

export interface IUser {
  id: number;
  email: string;
  name: string;
  gender: string;
  avatar: string;
  region: number;
  state: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  token: string;
}

export interface User {
  profile_id: string;
  vendor: string;
  fistName: string;
  lastName: string;
  created: string;
  last_login: string;
  access_level: string;
  vendor_id: string;
  storeName: string;
  product: number;
  order: {
      order_as_buyer: number;
      order_as_buyer_total: number;
  };
  wishlist: string;
  checked?: boolean;
}

export interface UserFilter {
  
}

// "profile_id": "8481",
//             "vendor": "Candicenorthrip@yahoo.com",
//             "fistName": "Candice",
//             "lastName": "Northrip",
//             "created": "1611750250",
//             "last_login": "1611750255",
//             "access_level": "Vendor",
//             "vendor_id": "5588",
//             "storeName": "Candice's Gear Shop",
//             "product": 1,
//             "order": {
//                 "order_as_buyer": 0,
//                 "order_as_buyer_total": 0
//             },
//             "wishlist": "1"
