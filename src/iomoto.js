import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
import Routes from "./routes";
import { Provider } from "react-redux";

import store from "./store";
import { SearchProvider } from "./contexts/Search";
import "./translations/i18n";

function IomotoApp() {
  return (
    <Suspense fallback="loading">
      <Provider store={store}>
        <BrowserRouter>
          <ThemeConfig>
            <GlobalStyles />
            <SearchProvider>
              <Routes />
            </SearchProvider>
          </ThemeConfig>
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
}

export default IomotoApp;
