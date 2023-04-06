import { Injectable } from '@nestjs/common';
import { VK_API_KEY } from 'constants/vkKey';
import { VK } from 'vk-io';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    const vk = new VK({
      token: VK_API_KEY,
    });

    let users;

    vk.api.users
      .get({
        users_ids: 1,
      })
      .then((response) => (users = response))
      .catch((error) => console.log(error));
    return JSON.stringify(users);
  }
}
