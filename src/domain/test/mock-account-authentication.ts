import { AuthenticationParams } from '@/domain/usecases/authentication';
import { faker, simpleFaker } from '@faker-js/faker/.';
import { AccountModel } from '../models/account-model';

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
});

export const mockAccountModel = (): AccountModel => ({
  acessToken: simpleFaker.string.uuid()
});
