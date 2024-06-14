"use client";
import WebApp from "@twa-dev/sdk";
import axios from "axios";
import { useEffect, useState } from "react";
import useTelegramInitData from "./hooks/useTelegramInitData";

export default function Home() {
  // keep track if user is from telegram
  const [isUserFromTelegram, setIsUserFromTelegram] = useState(false);
  const { user } = useTelegramInitData();

  // validate hash
  useEffect(() => {
    const hash = WebApp.initData;
    WebApp.expand();
    axios
      .post("/api/validate-hash", {
        hash: hash,
      })
      .then(() => setIsUserFromTelegram(true))
      .catch((err) => console.error(err));
  }, []);

  // if user not from telegram
  if (!isUserFromTelegram) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        This is a Telegram Mini App and needs to be accessed from the Telegram
        app.
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Telegram Mini App, {user?.id}</h1>
    </main>
  );
}
