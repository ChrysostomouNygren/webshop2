import { atom } from "recoil";

export const authState = atom({
  key: "auth",
  default: "",
});

export const roleState = atom({
  key: "role",
  default: "",
})

export const userState = atom({
  key: "user",
  default: null,
});

export const nameState = atom({
  key: "name",
  default: "",
});

export const addressState = atom({
  key: "address",
  default: "",
});

export const userDataState = atom({
  key: "userData",
  default: {},
});
