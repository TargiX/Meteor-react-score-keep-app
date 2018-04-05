import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/players';

Meteor.startup(() => {});

let house = {
  bedrooms: 2,
  bathrooms: 1.5
};

let yearBuilt = 1995;

let houseInfo = {
  ...house,
  bedrooms: 3,
  yearBuilt,
  flooring: 'Carpet'
};

console.log(houseInfo);
