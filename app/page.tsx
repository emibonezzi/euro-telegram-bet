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
          <Navbar
            title="EURO 2024 Tracker"
            subtitle="Challenge your friends!"
            className="top-0 sticky"
          />
          <BlockTitle large>Hello, {user?.first_name}! 👋 </BlockTitle>
          <Block>
            <p>
              Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
              Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet
              quam mollis, vulputate turpis vel, sagittis felis. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Accusamus facere
              dolore, tempora, saepe nulla laborum quis ipsa nobis non eum omnis
              fugit ut delectus molestiae corrupti. Ea dolorum officia ratione.
            </p>
          </Block>
          <Block>
            <Button large={true}>Join a club with passcode</Button>
          </Block>
          <Block>
            <Button large={true}>Create a new club</Button>
          </Block>
        </Page>
      </App>
    </main>
  );
}
