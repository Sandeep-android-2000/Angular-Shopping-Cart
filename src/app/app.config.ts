import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,withComponentInputBinding()), provideFirebaseApp(() => initializeApp({"projectId":"ng-shopping-cart-93b41","appId":"1:919647346104:web:270e96a368650f6e3dc34d","storageBucket":"ng-shopping-cart-93b41.firebasestorage.app","apiKey":"AIzaSyDelskuoSV33MtFnAv_8BzbCFV9BW6UYzg","authDomain":"ng-shopping-cart-93b41.firebaseapp.com","messagingSenderId":"919647346104"})), provideAnalytics(() => getAnalytics()), ScreenTrackingService]
};
