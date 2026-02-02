/* eslint-disable prettier/prettier */

import Maquette from '#models/maquette'

export default class MaquetteController {
   async index() {
    return await Maquette.query().preload('promotion')
   }

    async show({params}){
      return await Maquette
        .query()
        .where('id',params.id)
        .preload('promotion')
        .preload('module')
        .firstOrFail()
    }

}
