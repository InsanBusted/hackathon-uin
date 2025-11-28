"use client"

import Cookies from "js-cookie"

export const getFromCookies = <T>(key: string): T | null => {
  const data = Cookies.get(key);
  try {
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};