# Frontend Challenge

Goal: Country table with filter and internationalization

### General requirements

- React
- Redux
- JavaScript or TypeScript
- Responsive for 1366×768 (desktop) and 375×667 (mobile)
- Reusability of components and custom hooks

### Deliverables

- Git repository with the source code
- Readme.md with the documentation on how to run the project.
- Test coverage of 70%
- Use redux

Create 2 pages (home, countries). The home page only displays the user name (fixed  value). On the second page display the country list.

Consume a rest api (  https://restcountries.com/  ) to  get the countries. Display the countries in  a page with pagination. Allow the user to filter by name and by alpha code. Depending on  the selection, refresh the list.

By switching between home page and country page, the search criteria selected must be  persisted. If the user selected name equals “Italy” and then goes to the home page and  returns to the country, the criteria “Italy” has to be selected by loading the page.

Include a toggle to switch between English and German languages. Only translate the labels  display but do not translate the output of the api.
