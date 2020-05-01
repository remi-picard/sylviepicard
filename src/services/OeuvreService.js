import oeuvres from './data.js';

export class OeuvreService {
  static list(type = 'Sculptures') {
    return oeuvres.filter(o => o.typeNom === type).reverse();
  }
}
