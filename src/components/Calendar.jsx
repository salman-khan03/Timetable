import React from "react";
import Event from "./Event";

const Calendar = () => {
    const timeBlocks = [
        "8 am", "9 am", "10 am", "11 am", "12 pm", 
        "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"
    ];

    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    {timeBlocks.map((time) => (
                        <tr key={time}>
                            <td className="time">{time}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    ))}
                    <tr>
                        <td className="time">8 am</td>
                        <Event event='Starbucks ☕️' color ='green'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Yolk 🍳' color ='green'/>
                        <td></td>
                    </tr>

                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway 🚊' color ='pink'/>
                        <td></td>
                        <td></td>
                        <Event event='The Bean 🫘' color ='blue'/>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Calendar;
