import type { AddAccount, AddAccountModel, AccountModel, Encrypter } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter

  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    const encryptedPassword = await this.encrypter.encrypt(account.password)
    return await new Promise(resolve => {
      resolve({
        id: 'some-unique-id',
        name: account.name,
        email: account.email,
        password: encryptedPassword
      })
    })
  }
}
