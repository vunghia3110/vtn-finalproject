export interface ProductFilter {
  searchKey: string;
  catagory: string;
  stockStatus: string;
  searchIn: string[];
  availability: string;
  vendor: string;
}

export interface Product {
  id: string;
  sku: string;
  price: string;
  arrivalDate: string;
  name: string;
  category: string;
  vendor: string;
  amount: string;
  checked?: boolean;
}

export interface IProductsParams {
  page: number;
  count: number;
  search: string;
  category: string;
  stock_status: string;
  availability: string;
  vendor: string;
  sort: string;
  order_by: string;
  search_type: string;
}
// {"page":1,"count":25,"search":"","category":"0","stock_status":"all","availability":"all","vendor":"","sort":"name","order_by":"ASC","search_type":""}
