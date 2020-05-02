import oeuvres from './data.js';

export class OeuvreService {
  static list(type = 'Sculptures') {
    return oeuvres
      .filter(o => o.typeNom === type)
      .sort((o1, o2) => o2.dateCreation.localeCompare(o1.dateCreation));
  }
}
