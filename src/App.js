import React from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import HomeLayout from './layouts/HomeLayout';
import Accueil from './pages/Accueil';
import Panier from './pages/Panier';
import AppRoutes from './layouts/AppRoutes';
import { Provider } from 'react-redux';
import { persistor, store } from './reducers/store';
import { PersistGate } from 'redux-persist/integration/react';
import Produit from './pages/Produit';
import Categories from './pages/Categories';


function App() { 
  return (
    <>
    <Provider  store={store}    >
      {/*<PersistGate  loading={null} persistor={persistor} >*/}
         <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                      <AppRoutes   exact={true} path="/"   component={Accueil}  layout={HomeLayout} />
                      <AppRoutes   path="/panier"   component={Panier}  layout={HomeLayout} />
                      <AppRoutes   path="/produit/:id"   component={Produit}  layout={HomeLayout} />
                      <AppRoutes   path="/categorie/:id"   component={Categories}  layout={HomeLayout} />
              </Switch>
          </Router>
       {/* </PersistGate> */}
     </Provider>
    </>
  );
}

export default App;
