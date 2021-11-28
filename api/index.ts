import { URLController } from './controller'

const urlController = new URLController()

export const get = async (hash: string) => await urlController.redirect(hash)
export const post = async (originURL: string) => await urlController.shorten(originURL)
