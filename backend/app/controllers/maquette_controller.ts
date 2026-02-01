/* eslint-disable prettier/prettier */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Maquette from 'App/Models/Maquette'

export default class MaquetteController {
  public async index({response}) {
    try{
      const maquettes = await Maquette.all()

      return response.status(200).json(maquettes);
    }
    catch (e) {
      console.error(e);
      return response.status(500).json({error: "Erreur Controlleur Maquette"});
    }
  }
}
