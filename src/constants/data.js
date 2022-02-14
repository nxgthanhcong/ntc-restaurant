import images from './images';

const foods = [
  {
    title: 'Bò Xào',
    price: '200.000 VND',
    tags: 'F | Xào',
  },
  {
    title: 'Lẩu Bò',
    price: '200.000 VND',
    tags: 'F | Lẩu',
  },
  {
    title: 'Bò Chiên',
    price: '200.000 VND',
    tags: 'F | Chiên',
  },
  {
    title: 'Bò Hấp Sả',
    price: '200.000 VND',
    tags: 'F | Hấp',
  },
  {
    title: 'Lẩu Sườn Bò',
    price: '200.000 VND',
    tags: 'F | Lẩu',
  },
];

const cocktails = [
  {
    title: 'Rượu Đế',
    price: '15.000 VND',
    tags: 'D | Rượu',
  },
  {
    title: "Rượu thuốc",
    price: '20.000 VND',
    tags: 'D | Rượu',
  },
  {
    title: 'Rượu Nếp',
    price: '30.000 VND',
    tags: 'D | Rượu',
  },
  {
    title: 'Bia các loại',
    price: 'Giá các loại',
    tags: 'D | Bia',
  },
  {
    title: 'Trà Đá',
    price: 'free',
    tags: 'D | Trà',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines: foods, cocktails, awards };
