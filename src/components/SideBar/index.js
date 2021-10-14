import React, { useEffect, useState, useCallback } from "react";

// components
import SearchInput from "../SearchInput";

// styles
import * as T from "../styles/Typography";
import * as Layout from "../styles/Layout";
import * as Styled from "./styles";

// components
import ItemsList from "../itemsList";

// api
import { GetItems } from "../../api/Item";

// hooks
import useDebounce from "../../hooks/useDebounce";

const SideBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [items, setItems] = useState({
    data: {},
    isFetching: true,
  });

  // used to prevent multiple server requests on every type
  const debouncedSearchValue = useDebounce(searchValue, 250);

  useEffect(() => {
    getItems(debouncedSearchValue);
  }, [debouncedSearchValue]);

  const getItems = async (searchValue) => {
    !items.isFetching && setItems({ isFetching: true });
    const fetchedItems = await GetItems(searchValue);

    // build items map
    let itemsMap = {};

    fetchedItems.forEach((r) => {
      itemsMap[r.id] = r;
    });

    // set items to local state
    setItems({ data: itemsMap, isFetching: false });
  };

  const memoizedOnChange = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  return (
    <Styled.Wrapper>
      <Layout.Flex direction="column" gap="5px" padding="0 10px 10px 10px">
        <T.Headline>My Resources</T.Headline>
        <T.Paragraph>explanation under each section. lorem ipsum.</T.Paragraph>

        <SearchInput
          onChangeHandler={memoizedOnChange}
          searchValue={searchValue}
        />
      </Layout.Flex>

      <ItemsList items={items} />
    </Styled.Wrapper>
  );
};

export default SideBar;
