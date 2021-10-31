import React from "react";

const UserContext=React.createContext()

const Sender=UserContext.Provider
const Reciever = UserContext.Consumer

export {Sender, Reciever}