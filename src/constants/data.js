import images from './images';

const wines = [
  {
    title: 'Sineann Pinot Noir',
    price: '13 | 50',
    tags: '2016 | Eola-Amity Hills, OR',
  },
  {
    title: 'Jordan Cabernet Sauvignon',
    price: '15 | 58',
    tags: '2017 | Sonoma County, CA',
  },
  {
    title: 'Chateau Miraval Rose',
    price: '12 | 44',
    tags: '2016 | AOC Côtes de Provence, FR',
  }
];

const beers = [
  {
    title: '7K IPA',
    price: '8',
    tags: 'Santa Fe Brewing Co. | Santa Fe, NM, USA',
  },
  {
    title: 'Kirin Ichiban',
    price: '7',
    tags: 'Kirin Brewing Co. | Nakano City, Tokyo, JP',
  },
]

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '12',
    tags: 'Aperol | Villa Marchesi prosecco | soda',
  },
  {
    title: "Dark 'N' Stormy",
    price: '11',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '11',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '13',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '12',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
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

export default { wines, beers, cocktails, awards };
