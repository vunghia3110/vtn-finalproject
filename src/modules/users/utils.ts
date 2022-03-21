export const checkBoxValue = ['Name', 'SKU', 'Full Description'];

interface TabelHeader {
  name: string;
  canSort: boolean;
}

export const optionItemPerPage = [10, 25, 50, 75, 100];

export const tableHeaderLabel: TabelHeader[] = [
  {
    name: 'Login/Email',
    canSort: true,
  },
  {
    name: 'Name',
    canSort: true,
  },
  {
    name: 'Access level',
    canSort: true,
  },
  {
    name: 'Products',
    canSort: false,
  },
  {
    name: 'Orders',
    canSort: false,
  },
  {
    name: 'Wishlist',
    canSort: false,
  },
  {
    name: 'Created',
    canSort: true,
  },
  {
    name: 'Last Login',
    canSort: true,
  },
];
