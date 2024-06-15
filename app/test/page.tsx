"use client";
import { App, Block, BlockTitle, Button, Navbar, Page } from "konsta/react";

const Home = () => {
  return (
    <App theme="ios">
      <Page>
        <Navbar
          title="EURO 2024 Tracker"
          subtitle="Challenge your friends!"
          className="top-0 sticky"
        />
        <BlockTitle className="text-4xl">Hello, Chris! 👋 </BlockTitle>
        <Block>
          <p>
            Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
            Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
            mollis, vulputate turpis vel, sagittis felis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Accusamus facere dolore, tempora,
            saepe nulla laborum quis ipsa nobis non eum omnis fugit ut delectus
            molestiae corrupti. Ea dolorum officia ratione.
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
  );
};

export default Home;
