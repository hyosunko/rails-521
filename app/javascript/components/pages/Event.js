import React, { Component } from "react";
import { Button } from "reactstrap";
import EventCard from "./EventCard";

class Event extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { event } = this.props;
    // const { choices } = this.props;
    // console.log("choices in Event: ", choices);
    console.log("event.choices in Event: ", event.choices);
    const display_choice = Math.max(...event.choices.map(e => e.status));
    const newChoices = event.choices.filter(
      choice => choice.status >= display_choice
    );

    return (
      <div>
        <h3>{event.event_name}</h3>
        {newChoices != undefined && (
          <ul className="event-container">
            {newChoices.map((choice, index) => {
              return (
                <div className="event-item" key={index}>
                  <EventCard choice={choice} />
                </div>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}
export default Event;
