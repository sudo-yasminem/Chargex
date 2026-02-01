import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class TestsController {
  public async test({ response }: HttpContext) {
    const users = await User.all()

    console.log(users)
    response.json(users)
  }
}
