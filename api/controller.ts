import shortId from 'shortid'
import { createShortURL, getShortURL, getOriginalURL, } from './repository'
import type { IUrlInfo } from './repository'


export class URLController {

	public async shorten<String>(originURL: string) {
		const url = await getShortURL(originURL)

		if (url) {
			return url.shortURL
		}

		const hash = shortId.generate()
		const shortURL = `${process.env.API_URL}/${hash}`
		const urlInfo = { hash, shortURL, originURL }
		const resp = await createShortURL(urlInfo)
		return shortURL
	}

	public async redirect<String>(hash: string) {
		const originUrl = await getOriginalURL(hash) as string
		console.log('Recebendo...',hash, 'Chegando...', originUrl)
		return originUrl
	}

}
