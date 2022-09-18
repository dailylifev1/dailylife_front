import { methodFormat } from '../common/utils';
import client from './client';

const PATH = {
  reply: 'api/reply',
  heart: 'api/heart',
};
const commentApi = {
  getComments: methodFormat(async (boardNum) => {
    const response = await client.get(
      `/${PATH.reply}/getReply/${boardNum}`,
    );
    return response;
  }),
  getCommentHeart: methodFormat(
    async (replyNum) => {
      const response = await client.get(
        `/${PATH.heart}/countHeartReply/${replyNum}`,
      );
      return response;
    },
  ),
};

export default commentApi;
