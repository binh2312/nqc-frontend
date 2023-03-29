import { FC, ReactNode } from "react";
import { ContentWrapper } from "./style";
import { useToken } from "@hooks/use-token/useToken";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { getToken } = useToken();
  const token = getToken();

  return (
    <>
        <ContentWrapper>
          <div>{children}</div>
        </ContentWrapper>
    </>
  );
};
