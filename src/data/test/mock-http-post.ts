import { faker } from '@faker-js/faker/.';
import { HttpPostParams } from '../protocols/http';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: {
    name: faker.person.fullName,
    phone: faker.phone
  }
});
