import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

export const ContentWrapper = styled(Container)`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 749px) {
    width: 100%;
  }
`;
