
import { Store, StoreModule} from "@ngrx/store";
import { reducers } from "./reducers.factory";

export const AppStoreModule=[
  StoreModule.forRoot(reducers)
]