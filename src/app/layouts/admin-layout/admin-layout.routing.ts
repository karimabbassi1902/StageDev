import { Routes } from '@angular/router';
import { ListeDesOffresComponent } from 'app/liste-des-offres/liste-des-offres.component';
import { AddOfferComponent } from 'app/add-offer/add-offer.component';
import { DetailComponent } from 'app/detail/detail.component';
import { AddcandidatComponent } from 'app/addcandidat/addcandidat.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'Offres',      component: ListeDesOffresComponent },
    { path: 'AddOffer',           component: AddOfferComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: 'Candidature', component: AddcandidatComponent },

];
