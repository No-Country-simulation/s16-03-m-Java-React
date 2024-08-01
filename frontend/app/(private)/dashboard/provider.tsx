"use client";

import { useRef } from "react";

import { useUserStore } from "@/store/use.store";
import { UserType } from "@/types";

type Props = {
  user: UserType;
};
const AuthProvider = ({ user }: Props) => {
  const isInitialized = useRef(false);

  if (!isInitialized.current) {
    useUserStore.setState({
      user,
    });
    isInitialized.current = true;
  }
  return null;
};

export default AuthProvider;
