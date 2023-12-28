import {
  useCatch,
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import MainNavigation from "./components/MainNavigation";
import styles from './styles/main.css';

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function CatchBoundary(){
  const caughtResponse = useCatch();
  const message = caughtResponse.data?.message || 'Data Not Found';
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <title>An Error Occured</title>
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <main>
          <h1>{caughtResponse.statusText}</h1>
          <p>{message}</p>
          <p>Back To <Link to='/'>safety</Link>!</p>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary(error){
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <title>An Error Occured</title>
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <main>
          <h1>An Error Occured</h1>
          <p>{error.message}</p>
          <p>Back To <Link to='/'>safety</Link>!</p>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function links(){
  return[{
    rel :'stylesheet',
    href : styles
  }]
}
