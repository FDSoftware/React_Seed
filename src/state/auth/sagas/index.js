import sessionSagas from "./session.saga";
import refreshSagas from "./refresh.saga";

export const sagas = [...sessionSagas, ...refreshSagas];
