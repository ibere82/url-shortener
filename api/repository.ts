
import { MongoClient } from "mongodb";

export interface IUrlInfo {
    hash: string,
    shortURL: string,
    originURL: string
}

const database = () => new MongoClient(process.env.DB_CONNECTION as string);

async function createShortURL(urlInfo: IUrlInfo) {
    const db = database();
    try {
        await db.connect();
        await db.db("data").collection("shortURLs").insertOne(urlInfo);
    } catch (err) {
        throw err;
    } finally {
        await db.close();
    }
}

async function getShortURL(originURL: string) {
    const db = database();
    try {
        await db.connect();
        return await db.db("data").collection("shortURLs").findOne({ originURL });
    } catch (err) {
        throw err;
    } finally {
        await db.close();
    }
}

async function getOriginalURL(hash: string) {

    const db = database();
    try {
        await db.connect();
        const urlInfo = (await db.db("data").collection("shortURLs").findOne({ hash }))
    
        if (Object.keys(urlInfo).includes('originURL')) {
            return urlInfo.originURL
        }

    } catch (err) {
        throw err;
    } finally {
        await db.close();
    }
    return '/'
}

export {
    createShortURL,
    getShortURL,
    getOriginalURL,
}