import { Contact } from './components/contact/contact';
import { Portfolio } from './components/portfolio/portfolio';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: Home},
    {path: 'portfolio', component: Portfolio},
    {path: 'about', component:About },
    {path: 'contact', component: Contact}
];
