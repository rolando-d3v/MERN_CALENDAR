import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../components/auth/LoginPage";
import CalendarPage from "../components/calendar/calendarPage/CalendarPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/login" component={LoginPage} />
        <Route exact={true} path="/calendar" component={CalendarPage} />
      </Switch>
    </BrowserRouter>
  );
}
