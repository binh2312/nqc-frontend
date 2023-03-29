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
      ["USERS-me"],
      () => get<undefined, UserModel>(`${USERS}/me`),
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
      isLoading: userData.isLoading,
    };
  };

  const useFetchUserById = (
    userId: number,
    callback?: {
      onSuccess?: () => void;
      onError?: () => void;
    }
  ) => {
    const userData = useQuery(
      ["USER", userId],
      () => get<undefined, UserModel>(`${USERS}/${userId}`),
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
      isLoading: userData.isLoading,
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


  const logout = useMutation(
    async (body: LoginRequestBody) =>
      await post('/logout', body),
    {
      onSuccess: () => {
        deleteToken();
        router.push("/login");
      }
    }
  );

  return {
    useFetchMe,
    useFetchUserById,
    useCheckLogin,
    logout: logout
  };
};
