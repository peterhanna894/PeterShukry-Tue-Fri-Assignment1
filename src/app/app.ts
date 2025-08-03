import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { Portfolio } from "./components/portfolio/portfolio";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Navbar, Home, About, Contact, Portfolio],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PeterShukry-Tue-Fri-Assignment1');
}
