import { NextPageContext } from 'next';
import Cookies from 'js-cookie';

/**tokenを取得する。 */
export const useToken = () => {
  const setToken = (token: string, ctx?: NextPageContext) => {
    Cookies.set('accessToken', token, { expires: 30 * 24 * 60 * 60 });
  };

  // Cookie情報内のアクセストークンを取得する。
  const getToken = (ctx?: NextPageContext) => {
    const cookie = Cookies.get('accessToken');
    if (cookie) return cookie;
    else return null;
  };

  const accessToken = getToken();

  // Cookie情報内のアクセストークンを削除する
  const deleteToken = () => {
    Cookies.remove('accessToken');
  };

  return {
    accessToken,
    setToken,
    getToken,
    deleteToken,
  };
};
