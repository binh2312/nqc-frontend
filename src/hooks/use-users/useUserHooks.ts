import { useMutation, useQuery } from "@tanstack/react-query";
import { useAxios } from "@hooks/use-axios/useAxios";
import { UserModel } from "./type";
import { USERS } from "@api/endpoints";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useToken } from "@hooks/use-token/useToken";


type LoginRequestBody = {
  login_id: string;
  password: string;
}

export const useUserHooks = () => {
  const router = useRouter();
  const { get, post } = useAxios();
  const { deleteToken } = useToken();

  const useFetchMe = (callback?: {
    onSuccess?: () => void;
    onError?: () => void;
  }) => {
    const userData = useQuery(
      () => get<undefined, any>(`api/get-issues`),
      {
        keepPreviousData: true,
        staleTime: 1000,
        onSuccess: () => {
          if (callback && callback.onSuccess) callback.onSuccess();
        },
        onError: (err) => {
          if (callback && callback.onError) callback.onError();
        },
      }
    );

    return {
      data: userData.data,
    };
  };

  const useCheckLogin = () => {
    const router = useRouter();
    const { getToken } = useToken();

    useEffect(() => {
      const token = getToken();
      if (!token) router.push("/login");
    }, []);
  };

  return {
    useFetchMe,
  };
};
