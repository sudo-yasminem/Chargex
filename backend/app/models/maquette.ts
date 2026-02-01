import { BaseModel, column } from "@adonisjs/lucid/orm"

export default class Maquette extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nom: string

  @column()
  public nb_modules: number

  @column()
  public promotion_id: number

}
