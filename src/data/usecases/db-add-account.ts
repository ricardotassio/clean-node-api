import type { AddAccount, AddAccountModel } from '../../domain/usecases/add-account'
import type { AccountModel } from '../../domain/models/account'
import type { Encrypter } from '../protocols/encrypter'

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
