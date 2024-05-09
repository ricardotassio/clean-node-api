import { MongoClient, type Collection } from 'mongodb'

export const MongoHelper = {
  client: MongoClient,
  async connect (uri: string = globalThis.__MONGO_URI__): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map (id, collection: any): any {
    return {
      id: id.toString(),
      ...collection
    }
  }
}
