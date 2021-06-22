import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { messages } from "../../../helper/messages-esp"; //pone en español

import "react-big-calendar/lib/css/react-big-calendar.css"; //styles de calendar por default
import styles from "./calendar.module.scss";
import "moment/locale/es";

import Navbar from "../../layout/navbar/Navbar";
import CalendarEvent from "../calendarEvent/CalendarEvent";
import CalendarModal from "../calendarModal/CalendarModal";
import { layoutOpenModal } from "../../../redux/layout/layoutAction";
import { eventSetActive } from "../../../redux/calendar/calendarAction";
import AddNewFab from "../../layout/addNewFab/AddNewFab";

//moment en español
moment.locale("es");

const localizer = momentLocalizer(moment);

// const events = [
//   {
//     title: "Cumpleaños del jefe",
//     start: moment().toDate(),
//     end: moment(2, "hours").toDate(),
//     bgcolor: "#fafafa",
//     notes: "Comprar el pastel",
//     user: {
//       _id: "1234",
//       name: "rolando",
//     },
//   },
// ];

//componente
export default function CalendarPage() {
  const dispatch = useDispatch();
  const {events} = useSelector(state => state.calendar)

  //state para ubicar el dia y mes donde esta
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  const onDoubleClick = (e) => {
    console.log(e);
    dispatch(layoutOpenModal());
  };

  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e));
    console.log(e);
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem("lastView", e);
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    // console.log(event, start, end, isSelected);
    const style = {
      backgroundColor: "#367cf7",
      boderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };

    return {
      style,
    };
  };

  return (
    <div className={styles.calendar_page}>
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        view={lastView}
        components={{ event: CalendarEvent }}
      />
      <CalendarModal />
      <AddNewFab />
    </div>
  );
}
