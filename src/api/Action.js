import axios from "axios";
import { stall } from "../helpers/utils";

export const GetActions = async (actionIds = []) => {
  // mimick slow db
  await stall(1000);

  try {
    const res = await axios.get("data.json");

    const actions = res.data.actions;

    // mimicking db querying
    if (actionIds.length) {
      return actions.filter((action) => actionIds.includes(action.id));
    }

    return actions;
  } catch (error) {
    console.log("error in Getactions", error);
  }
};
