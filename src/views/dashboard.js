import React, { useContext, useEffect, useState } from "react";
import { Container } from "@mui/material";
import MockCountryData from "../mockData/country";
import { PageTitle } from "../components/pageTitle";
import { getCountries } from "../store/actions/countries";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../components/loading";
import { getAppMode } from "../helpers/modeSwitch";
import { Countries } from "../components/countries";
import { getRandomArrayNumber } from "../helpers/randomNumber";
import SkeletonLoading from "../components/skeleton";
import { useTranslation } from "react-i18next";
import { SearchContext } from "../contexts/Search";

const Dashboard = () => {
  const { t } = useTranslation();
  const [countryList, setCountryList] = useState([]);
  const [loader, setLoader] = useState(true);

  let dispatch = useDispatch();
  const appMode = getAppMode();
  const countriesResult = useSelector((state) => state.countries);
  const countries =
    appMode === "live" ? countriesResult?.data : MockCountryData;

  const [state] = useContext(SearchContext);
  const countryResult = state.searchResults["countries"];

  useEffect(() => {
    if (appMode === "live") {
      dispatch(getCountries());
    }
  }, [appMode]);

  useEffect(() => {
    setCountryList(countries);
  }, [countries]);

  useEffect(() => {
    const randomTimeout = getRandomArrayNumber();

    setTimeout(() => {
      setLoader(false);
    }, randomTimeout);
  }, []);

  return (
    <Container maxWidth="xl">
      {countries?.loading && <Loading />}

      <PageTitle
        title={t("title_dashboard")}
        count={`(${t("total_countries")} ${countryResult.length})`}
      />

      {loader && <SkeletonLoading />}
      {loader && (
        <SkeletonLoading
          wrapper={true}
          radius="2rem"
          width={320}
          height={300}
          count={20}
        />
      )}

      {!loader && <Countries countries={countries} countryList={countryList} />}
    </Container>
  );
};

export default Dashboard;
