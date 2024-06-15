"use client";
import { BlockTitle, List, ListInput } from "konsta/react";
import React from "react";

const CreateClub = () => {
  return (
    <div className="h-dvh flex flex-col justify-center">
      <BlockTitle large>Create new club</BlockTitle>
      <List strongIos insetIos>
        <ListInput
          label="Name"
          floatingLabel
          type="text"
          placeholder="The name of your club"
        />

        <ListInput
          label="Passcode"
          floatingLabel
          type="passcode"
          placeholder="The passcode to join the club"
        />
      </List>
    </div>
  );
};

export default CreateClub;
