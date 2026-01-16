
import "styled-components";
import { AppTheme } from "./app/features/theme/theme";

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}
