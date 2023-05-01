// /* eslint-disable no-lone-blocks */
// // /* eslint-disable no-lone-blocks */
import { nextWeeks, firstWeek, workingHours } from './utils/working-time';
import styles from './App.module.css';
import { useEffect, useState } from 'react';
import AppointmentForm from './components/appointment-form';
const mon = firstWeek.filter((day) => day.toDateString().startsWith('Mon'));
const tue = firstWeek.filter((day) => day.toDateString().startsWith('Tue'));
const wed = firstWeek.filter((day) => day.toDateString().startsWith('Wed'));
const thu = firstWeek.filter((day) => day.toDateString().startsWith('Thu'));
const fri = firstWeek.filter((day) => day.toDateString().startsWith('Fri'));

function App() {
    const [shown, setShown] = useState(false);
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [doctor, setDoctor] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            await fetch(
                `http://localhost:5000/appointments?doctorId=${doctor}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    if (data.data !== undefined) {
                        setData(data.data.doctorsAppointments);
                    }
                });
        })();

        return () => {
            controller?.abort();
        };
    }, [doctor]);

    return (
        <>
            {shown && (
                <>
                    <button
                        className={styles.close}
                        onClick={() => setShown(false)}
                    >
                        Close
                    </button>
                    <AppointmentForm doctor={doctor} hour={hour} date={date} />
                </>
            )}

            <select
                onChange={(e) => {
                    setDoctor(e.target.value);
                }}
            >
                <option value="">Chose a doctor</option>
                <option value="64466a35b6d3c5e48ed2d191">Dr. Jane Doe</option>
                <option value="644b8cf81492bc460be6649e">Ute Busch</option>
            </select>

            <div className={styles.calendarMainContainer}>
                <div className={styles.headOfTheTable}>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                </div>

                <div className={styles.bodyOfTheTable}>
                    <div>
                        {' '}
                        <div>
                            {mon.length !== 0 ? mon[0].toDateString() : ''}
                        </div>
                        {mon.length !== 0 &&
                            workingHours.map((h) => {
                                return (
                                    <button
                                        className={
                                            data
                                                .filter(
                                                    (date) =>
                                                        date.date ===
                                                        mon[0].toDateString()
                                                )
                                                .filter(
                                                    (date) =>
                                                        date.startTime === h
                                                ).length === 0
                                                ? `${styles.available}`
                                                : `${styles.notAvailable}`
                                        }
                                        onClick={() => {
                                            setShown(true);
                                            setDate(mon[0].toDateString());
                                            setHour(h);
                                        }}
                                    >
                                        {h}
                                    </button>
                                );
                            })}
                    </div>
                    <div>
                        <div>
                            {tue.length !== 0 ? tue[0].toDateString() : ''}
                        </div>
                        {tue.length !== 0 &&
                            workingHours.map((h) => {
                                return (
                                    <button
                                        className={
                                            data
                                                .filter(
                                                    (date) =>
                                                        date.date ===
                                                        tue[0].toDateString()
                                                )
                                                .filter(
                                                    (date) =>
                                                        date.startTime === h
                                                ).length === 0
                                                ? `${styles.available}`
                                                : `${styles.notAvailable}`
                                        }
                                        onClick={(e) => {
                                            setShown(true);
                                            setHour(h);
                                            setDate(tue[0].toDateString());
                                        }}
                                    >
                                        {h}
                                    </button>
                                );
                            })}
                    </div>
                    <div>
                        <div>{wed.length ? wed[0].toDateString() : ''}</div>
                        {wed.length !== 0 &&
                            workingHours.map((h) => {
                                return (
                                    <button
                                        className={
                                            data
                                                .filter(
                                                    (date) =>
                                                        date.date ===
                                                        wed[0].toDateString()
                                                )
                                                .filter(
                                                    (date) =>
                                                        date.startTime === h
                                                ).length === 0
                                                ? `${styles.available}`
                                                : `${styles.notAvailable}`
                                        }
                                        value={h}
                                        onClick={(e) => {
                                            setShown(true);
                                            setHour(h);
                                            setDate(wed[0].toDateString());
                                        }}
                                    >
                                        {h}
                                    </button>
                                );
                            })}
                    </div>
                    <div>
                        <div>{thu.length ? thu[0].toDateString() : ''}</div>
                        {thu.length !== 0 &&
                            workingHours.map((h) => {
                                return (
                                    <button
                                        className={
                                            data
                                                .filter(
                                                    (date) =>
                                                        date.date ===
                                                        thu[0].toDateString()
                                                )
                                                .filter(
                                                    (date) =>
                                                        date.startTime === h
                                                ).length === 0
                                                ? `${styles.available}`
                                                : `${styles.notAvailable}`
                                        }
                                        value={h}
                                        onClick={(e) => {
                                            setShown(true);
                                            setHour(h);
                                            setDate(thu[0].toDateString());
                                        }}
                                    >
                                        {h}
                                    </button>
                                );
                            })}
                    </div>
                    <div>
                        <div>{fri.length ? fri[0].toDateString() : ' '}</div>
                        {fri.length !== 0 &&
                            workingHours.map((h) => {
                                return (
                                    <button
                                        className={
                                            data
                                                .filter(
                                                    (date) =>
                                                        date.date ===
                                                        fri[0].toDateString()
                                                )
                                                .filter(
                                                    (date) =>
                                                        date.startTime === h
                                                ).length === 0
                                                ? `${styles.available}`
                                                : `${styles.notAvailable}`
                                        }
                                        onClick={() => {
                                            setShown(true);
                                            setHour(h);
                                            setDate(fri[0].toDateString());
                                        }}
                                    >
                                        {h}
                                    </button>
                                );
                            })}
                    </div>

                    {nextWeeks.map((day) => {
                        return (
                            <div>
                                <div>{day.toDateString()}</div>

                                {workingHours.map((h) => {
                                    return (
                                        <>
                                            <button
                                                className={
                                                    data
                                                        .filter(
                                                            (date) =>
                                                                date.date ===
                                                                day.toDateString()
                                                        )
                                                        .filter(
                                                            (date) =>
                                                                date.startTime ===
                                                                h
                                                        ).length === 0
                                                        ? `${styles.available}`
                                                        : `${styles.notAvailable}`
                                                }
                                                onClick={() => {
                                                    setShown(true);

                                                    setDate(day);
                                                    setHour(h);
                                                }}
                                            >
                                                {h}
                                            </button>
                                        </>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
export default App;
