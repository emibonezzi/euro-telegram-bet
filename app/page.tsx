"use client";
import WebApp from "@twa-dev/sdk";
import axios from "axios";
import { App, Block, BlockTitle, Button, Navbar, Page } from "konsta/react";
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
    <main>
      <App theme="ios">
        <Page>
          <BlockTitle large>Hello, {user?.first_name}! 👋 </BlockTitle>
          <Block>
            <p>
              The Euros 2024 are here! <br />
              Show your knowledge to your friends by making predictions on daily
              games. Climb the scoreboard and crown yourself the king of the
              Euros.
            </p>
          </Block>
          <Block>
            <Button large={true}>Join a club with passcode</Button>
          </Block>
          <BlockTitle large>Your clubs</BlockTitle>
          <Block>
            <p>Still no clubs? Create your own!</p>
          </Block>
          <Block>
            <Button href="/create-club" large={true}>
              Create a new club
            </Button>
          </Block>
        </Page>
      </App>
    </main>
  );
}
