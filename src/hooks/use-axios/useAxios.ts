import { useRouter } from 'next/router';
import { axios } from './config';
import { useToken } from '@hooks/use-token/useToken';
import { formDataConverter} from '@utils/formDataConverter'

export const useAxios = () => {
  const router = useRouter();
  const { getToken } = useToken();
  /** GET APIをコールする関数。
   * @type {TFetchParams} パラメータのデータ型
   * @type {TFetchResponse} レスポンスのデータ型
   * @param endPoint: リクエスト先のエンドポイント
   * @param params: リクエストパラメータ
   */

  async function get<TFetchParams, TFetchResponse>(
    endPoint: string,
    params?: TFetchParams
  ) {
    try {
      const { data } = await axios.get<TFetchResponse>(endPoint, {
        headers: {
          Authorization: `Bearer ${getToken()}` 
        },
        params,
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  /** POST API をコールする関数
   * @type {TCreateReqBody} レスポンスのデータ型
   * @param endPoint リクエスト先のエンドポイント
   * @param {TCreateReqBody} body リクエストボディ
   */
  async function post<TCreateReqBody, TPostResponse>(
    endPoint: string,
    body: TCreateReqBody
  ) {
    try {
      await axios.post<TPostResponse>(endPoint, body, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  /** PUT API をコールする関数 */
  async function put<TputequestBody, TPromiseCallback>(
    endPoint: string,
    body: TputequestBody,
    callback?: () => Promise<TPromiseCallback>
  ) {
    try {
      await axios.put<{ status: number }>(endPoint, body, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        },
      });
      if (callback) await callback();
    } catch (e) {
      console.log(e);
    }
  }

  /** DELETE API をコールする関数 */
  async function deleter<TPromiseCallback>(
    endPoint: string,
    callback?: () => Promise<TPromiseCallback>
  ) {
    try {
      await axios.delete<{ status: number }>(endPoint, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        },
      });
      if (callback) await callback();
    } catch (e) {
      console.log(e);
    }
  }

  async function filePost(
    endPoint: string,
    files: File[],
    fileType: "pdf" | "image" | "csv"
  ) {
    try {
      const data = formDataConverter(files);
      await axios.post<{ status: number; id: number }>(endPoint, data, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
          "content-type":
            fileType === "pdf" ? "application/pdf" : "multipart/form-data",
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  return {
    get,
    post,
    put,
    deleter,
    filePost
  };
};
