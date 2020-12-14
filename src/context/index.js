import { useContext } from "react";
import { AppContext } from "./AppContext/AppContext";

export const useAppContext = () => useContext(AppContext);