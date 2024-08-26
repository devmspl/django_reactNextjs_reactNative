import React, { useState } from "react";
import {
  Modal,
  Form,
  FormLabel,
  FormGroup,
  Button,
  OverlayTrigger,
  Tooltip,
  FormCheck,
} from "react-bootstrap";
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import "./ScheduleInterviewModal.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ScheduleInterviewModalProps {
  isOpen: boolean;
  closeModal: () => void;
  startTime: string;
  endTime: string;
  timeZone: { timeZoneName: string };
  onDayToggle: (day: string) => void;
  onDayDelete: (day: string) => void;
  onDayAdd: () => void;
  onTimeZoneChange: (timeZone: { timeZoneName: string }) => void;
  onStartTimeChange: (startTime: string, day: string) => void;
  onEndTimeChange: (endTime: string, day: string) => void;
}



const ScheduleInterviewModal: React.FC<ScheduleInterviewModalProps> = ({
  isOpen,
  closeModal,
  startTime,
  endTime,
  timeZone,
  onDayDelete,
  onDayAdd,
  onTimeZoneChange,
  onStartTimeChange,
  onEndTimeChange,
}) => {
  const [selectedTimeZone, setSelectedTimeZone] = useState<{ timeZoneName: string }>(timeZone);
  const [selectedDaysState, setSelectedDaysState] = useState<string[]>([]);

  const handleTimeZoneChange = (event : any) => {
    const newTimeZone = { timeZoneName: event.target.value };
    setSelectedTimeZone(newTimeZone);
    onTimeZoneChange(newTimeZone);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    toast.success("Interview Schedule successfully!");
  };

  const handleDayAdd = () => {
    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    setSelectedDaysState([...selectedDaysState, currentDay]);
    onDayAdd();
  };

  const handleDayDelete = (day: string) => {
    setSelectedDaysState(selectedDaysState.filter((d) => d !== day));
    onDayDelete(day);
  };

  const handleDayToggle = (day: string) => {
    if (selectedDaysState.includes(day)) {
      handleDayDelete(day);
    } else {
      setSelectedDaysState([...selectedDaysState, day]);
      onDayAdd();
    }
  };

  const timeOptions: any = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour
        .toString()
        .padStart(2, "0")}:${minute.toString().padStart(2, "0")} ${
        hour < 12 ? "AM" : "PM"
      }`;
      timeOptions.push(
        <option value={time} key={time}>
          {time}
        </option>
      );
    }
  }

  return (
    <Modal
      show={isOpen}
      onHide={closeModal}
      dialogClassName="schedule-interview-modal"
      className="justify-content-center schedule-modal"
      style={{ display: "inline-flex", marginLeft: "500px", width: "100%" }} >
      <Modal.Header closeButton>
        <Modal.Title>Schedule Interview</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormGroup controlId="timezone">
            <FormLabel className="form-label">Time Zone</FormLabel>
            <Form.Control
              as="select"
              value={selectedTimeZone.timeZoneName }
              onChange={handleTimeZoneChange}
              className="form-input"
            >
              <option value="Asia/Calcutta">Asia/Calcutta</option>
              <option value="America/New_York">America/New_York</option>
              <option value="America/Los_Angeles">America/Los_Angeles</option>
              <option value="Europe/London">Europe/London</option>
              <option value="Europe/Paris">Europe/Paris</option>
              <option value="Asia/Tokyo">Asia/Tokyo</option>
              <option value="Asia/Shanghai">Asia/Shanghai</option>
              <option value="Australia/Sydney">Australia/Sydney</option>
              <option value="America/Chicago">America/Chicago</option>
              <option value="America/Denver">America/Denver</option>
              <option value="Asia/Singapore">Asia/Singapore</option>
              <option value="Canada/Eastern">Canada/Eastern</option>
              <option value="Canada/Pacific">Canada/Pacific</option>
              <option value="Europe/Berlin">Europe/Berlin</option>
              <option value="Europe/Moscow">Europe/Moscow</option>
              <option value="Africa/Cairo">Africa/Cairo</option>
              <option value="Africa/Johannesburg">Africa/Johannesburg</option>
            </Form.Control>
          </FormGroup>
          <FormGroup controlId="availability col-lg">
            <FormLabel className="form-label">Availability</FormLabel>
            <div className="availability-grid ">
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
                (day) => (
                 <div key={day} className="availability-grid-item ">
                    <Form.Check
                      type="switch"
                      id={day}
                      label={day}
                      checked={selectedDaysState.includes(day)}
                      onChange={() => handleDayToggle(day)}
                      className="availability-checkbox  check-lable "
                    />

                    <Form.Control
                      as="select"
                      className="form-input share-availability-select d-flex align-items-center row"
                    >
                      <option value="">Start Time</option>
                      {timeOptions}
                    </Form.Control>
                    <span>To</span>
                    <Form.Control
                      as="select"
                      className="form-input share-availability-select d-flex align-items-center"
                    >
                      <option value="">End Time</option>
                      {timeOptions}
                    </Form.Control>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id={`tooltip-${day}`}>Delete</Tooltip>}
                    >
                      <button
                        className="delete-button m-1"
                        onClick={() => onDayDelete(day)}
                        disabled={!selectedDaysState.includes(day)}
                      >
                        <FaTrashAlt />
                      </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id={`tooltip-${day}`}>Add Day</Tooltip>}
                    >
                      <button
                        className="add-button"
                        onClick={handleDayAdd}
                        // disabled={!selectedDaysState.includes(day)}
                      >
                        <FaPlus />
                      </button>
                    </OverlayTrigger>
                  </div>
                )
              )}
            </div>
          </FormGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button variant="success" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ScheduleInterviewModal;