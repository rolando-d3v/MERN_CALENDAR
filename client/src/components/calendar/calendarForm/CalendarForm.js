import React, { useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import DateTimePicker from "react-datetime-picker";
import styles from "./calendarForm.module.scss";
import { Toast } from "../../alert/Alertas";
import { eventAddNew } from "../../../redux/calendar/calendarAction";

//horas iniciales y finales con moment
const now = moment().minutes(0).seconds(0).add(1, "hours");
const nowPlus1 = now.clone().add(1, "hour");

export default function CalendarForm({ closeModal }) {
  const dispatch = useDispatch();

  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(nowPlus1.toDate());

  const [formValues, setFormValues] = useState({
    title: "Evento",
    notes: "",
    start: now.toDate(),
    end: nowPlus1.toDate(),
  });

  const { notes, title, start, end } = formValues;

  const changeDataForm = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleStartDateChange = (e) => {
    console.log(e);
    setDateStart(e);
    setFormValues({
      ...formValues,
      start: e,
    });
  };

  const handleEndDateChange = (e) => {
    console.log(e);
    setDateEnd(e);
    setFormValues({
      ...formValues,
      end: e,
    });
  };

  //enviar registro de submit
  const submitForm = (e) => {
    e.preventDefault();

    const momentStart = moment(start);
    const momentEnd = moment(end);

    if (momentStart.isSameOrAfter(momentEnd)) {
      return Toast.fire({
        icon: "warning",
        title: "Hora final no puede ser menor que la hora inicial",
      });
    }

    if (title.trim().length < 2) {
      return Toast.fire({
        icon: "warning",
        title: "Hora final no puede ser menor que la hora inicial",
      });
    }

    dispatch(
      eventAddNew({
        ...formValues,
        id: new Date().getTime(),
        user: {
          _id: '123',
          name: 'Rolando mamani'
        }
      })
    );

    console.log(formValues);
    closeModal();
  };

  return (
    <form className={styles.container_form} onSubmit={submitForm}>
      <h1 className={styles.form_title}> Nuevo evento </h1>
      <hr />
      <div className={styles.form_group}>
        <label>Fecha y hora - Inicio</label>
        <DateTimePicker
          className={styles.form_picker}
          onChange={handleStartDateChange}
          value={dateStart}
        />
      </div>

      <div className={styles.form_group}>
        <label>Fecha y hora - Fin</label>
        <DateTimePicker
          className={styles.form_picker}
          onChange={handleEndDateChange}
          minDate={dateStart}
          value={dateEnd}
        />
      </div>

      <hr className={styles.form_divisor} />
      <div className={styles.form_group}>
        <label>Titulo y notas</label>
        <input
          type="text"
          className={styles.form_input}
          placeholder="Título del evento"
          name="title"
          value={title}
          autoComplete="off"
          onChange={changeDataForm}
        />
      </div>

      <div className={styles.form_group}>
        <small id="emailHelp" className={styles.form_text_small}>
          Una descripción corta
        </small>
        <textarea
          type="text"
          className={styles.form_input}
          placeholder="Notas"
          rows="5"
          name="notes"
          value={notes}
          onChange={changeDataForm}
        ></textarea>
        <small id="emailHelp" className={styles.form_text_small}>
          Información adicional
        </small>
      </div>

      <button type="submit" className={styles.form_btn_submit}>
        <i className="far fa-save"></i>
        <span> Guardar</span>
      </button>
    </form>
  );
}
