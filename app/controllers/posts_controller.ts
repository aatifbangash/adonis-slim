// import type { HttpContext } from '@adonisjs/core/http'

// import { appKey, http } from "#config/app"
import { HttpContext } from "@adonisjs/core/http"
// import config from "@adonisjs/core/services/config"

export default class PostsController {

    public async index({ view }: HttpContext) {
        // return config.get('app.http.allowMethodSpoofing')
        // return http.allowMethodSpoofing
        // return 'here'
        return view.render('welcome')
    }
}