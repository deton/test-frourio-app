import { defineController, multipartFileValidator } from './$relay'
import { getUserInfoById, changeIcon } from '$/service/user'
import { z } from 'zod';

export default defineController(() => ({
  get: ({ user }) => ({ status: 200, body: getUserInfoById(user.id) }),
  post: {
    validators: {
      body: z.object({
        icon: multipartFileValidator()
      })
    },
    handler: async ({ user, body }) => ({
      status: 201,
      body: await changeIcon(user.id, body.icon)
    })
  }
}))
