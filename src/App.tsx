import { AppRouter } from "./routes/AppRouter";
import { RestaurantContextProvider } from "./store/restaurant-context";
import "./styles.css";

function App() {
  return (
    <RestaurantContextProvider>
      <AppRouter />
    </RestaurantContextProvider>
  );
}

export default App;
