import axios from "axios";
import { stall } from "../helpers/utils";

export const GetItems = async (searchValue = "") => {
  // mimick slow db
  await stall(1000);

  try {
    const res = await axios.get("data.json");

    // mimicking db querying. also case insensitive
    const items = res.data.resources,
      filtered = searchValue
        ? items.filter((r) =>
            r.name.toLowerCase().includes(searchValue.toLowerCase())
          )
        : items;

    return filtered;
  } catch (error) {
    console.log("error in GetItems", error);
  }
};
