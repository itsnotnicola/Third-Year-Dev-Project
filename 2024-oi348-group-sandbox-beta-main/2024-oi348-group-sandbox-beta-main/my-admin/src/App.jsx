import { Admin, Resource, ListGuesser, ShowGuesser, EditGuesser, nanoLightTheme } from "react-admin";
import { PocketBaseProvider } from "./ra-pocketbase"
import { Select_courseList, Select_courseShow } from "./select_course";

const pbProvider = PocketBaseProvider("https://congenial-broccoli-pjrpjvqggq562rpvg-8090.app.github.dev")

const App = () => (
  <Admin 
    dataProvider={pbProvider.dataProvider}
    // authProvider={pbProvider.authProvider}
    lightTheme={nanoLightTheme}
    >
      <Resource name="select_course" list = {Select_courseList} show={Select_courseShow}/>
  </Admin>
);

export default App;