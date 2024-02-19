import { configureStore } from "@reduxjs/toolkit";
// import CounterLogic from "./CounterLogic";
// import ToggleLogic from "./ToggleLogic";
import ActiveLinkLogic from "./ActiveLinkLogic";


export default configureStore({
    reducer: {
    //counter: CounterLogic,
    // toggle: ToggleLogic
    LinkActive: ActiveLinkLogic
    },
    });
