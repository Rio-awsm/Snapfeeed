import { ID, Query } from "appwrite";
import { INewUser } from "@/types";
import { account } from "./config";

//AUTH

//===== Sign-up
export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = await account.create(
        ID.unique(),
        user.email,
        user.password,
        user.name
    )
  } catch (error) {
    console.log(error);
    return error;
  }
}