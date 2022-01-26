import { FC } from "react";
import { SvgPropsType } from "./logos/logo.types";

export const Loader: FC<SvgPropsType> = ({ width = 8, height = 8 }) => (
  <div className="flex items-center justify-center">
    <div
      className={`w-4 h-4 border-b-2 border-gray-900 rounded-full animate-spin`}
    ></div>
  </div>
);
