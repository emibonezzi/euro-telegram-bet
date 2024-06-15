"use client";
import { App, Block, BlockTitle, Button, Navbar, Page } from "konsta/react";

const Home = () => {
  return (
    <App theme="ios">
      <Page>
        <BlockTitle large>Hello, Chris! 👋 </BlockTitle>
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
  );
};

export default Home;
