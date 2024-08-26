"use client";
import React, { useEffect } from "react";
import "./payment.css";
import { Modal, Button } from "react-bootstrap";
interface PaymentModalProps {
  show: boolean;
  handleClose: () => void;
}
const PaymentModal = ({ show, handleClose }: PaymentModalProps) => {
  useEffect(() => {
    // Copy Input Values to Card Mockup
    const updateCardMockup = (event: Event) => {
      const bound = event.target as HTMLInputElement;
      const targetId = bound.getAttribute("data-bound");
      if (targetId) {
        const defValue = bound.getAttribute("data-def");
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.innerText = bound.value || defValue || "";
        }
      }
    };

    const bounds = document.getElementsByTagName("input");
    Array.from(bounds).forEach((bound) => {
      const targetId = bound.getAttribute("data-bound");
      if (targetId) {
        bound.addEventListener("blur", updateCardMockup);
      }
    });

    // Toggle CVC Display Mode
    const toggleCVCDisplay = () => {
      const cvcToggler = document.getElementById("cvc_toggler");
      if (cvcToggler) {
        const target = cvcToggler.getAttribute("data-target");
        const el = document.getElementById(target || "");
        if (el) {
          (el as HTMLInputElement).type =
            (el as HTMLInputElement).type === "text" ? "password" : "text";
        }
      }
    };

    const cvcToggler = document.getElementById("cvc_toggler");
    if (cvcToggler) {
      cvcToggler.addEventListener("click", toggleCVCDisplay);
    }

    // Only Number Key
    const onlyNumberKey = (evt: KeyboardEvent) => {
      const ASCIICode = evt.which ? evt.which : evt.keyCode;
      if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
      return true;
    };

    const cardNumberInput = document.getElementById("cardNumber");
    const cvcInput = document.getElementById("cvc");
    if (cardNumberInput) {
      (cardNumberInput as HTMLInputElement).onkeypress = onlyNumberKey;
    }
    if (cvcInput) {
      (cvcInput as HTMLInputElement).onkeypress = onlyNumberKey;
    }

    // Card Number Formatting
    const formatCardNumber = (e: Event) => {
      const cardNumberInput = e.target as HTMLInputElement;
      let val = cardNumberInput.value.replace(/\s/g, "");
      let newval = "";
      for (let i = 0; i < val.length; i++) {
        if (i % 4 === 0 && i > 0) newval = newval.concat(" ");
        newval = newval.concat(val[i]);
      }
      cardNumberInput.value = newval;
    };

    if (cardNumberInput) {
      cardNumberInput.addEventListener("keyup", formatCardNumber);
    }

    // Date Picker Functionality (Vanilla JS)
    const setDateType = (e: Event, type: string) => {
      (e.target as HTMLInputElement).type = type;
    };

    const monthInputs = document.getElementsByClassName("month-own");
    const yearInputs = document.getElementsByClassName("year-own");

    Array.from(monthInputs).forEach((monthInput) => {
      monthInput.addEventListener("focus", (e) => setDateType(e, "month"));
    });

    Array.from(yearInputs).forEach((yearInput) => {
      yearInput.addEventListener("focus", (e) => setDateType(e, "year"));
    });

    return () => {
      // Cleanup event listeners
      Array.from(bounds).forEach((bound) => {
        bound.removeEventListener("blur", updateCardMockup);
      });
      if (cvcToggler) {
        cvcToggler.removeEventListener("click", toggleCVCDisplay);
      }
      if (cardNumberInput) {
        cardNumberInput.removeEventListener("keyup", formatCardNumber);
      }
    };
  }, []);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Payment Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="main-back">
          <div className="container m-auto bg-white p-5 bod-3">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <form>
                  <div className="header flex-between flex-vertical-center">
                    <div className="flex-vertical-center">
                      <i className="ai-bitcoin-fill size-xl pr-sm f-main-color"></i>
                      <span className="title">
                        <strong>AceCoin</strong>
                        <span>Pay</span>
                      </span>
                    </div>
                  </div>
                  <div className="card-data flex-fill flex-vertical">
                    <div className="flex-between flex-vertical-center">
                      <div className="card-property-title">
                        <strong>Card Number</strong>
                        <span>Enter 16-digit card number on the card</span>
                      </div>
                    </div>
                    <div className="flex-between">
                      <div className="card-number flex-vertical-center flex-fill">
                        <div className="card-number-field flex-vertical-center flex-fill">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            width="24px"
                            height="24px"
                          >
                            <path
                              fill="#ff9800"
                              d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                            />
                            <path
                              fill="#d50000"
                              d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                            />
                            <path
                              fill="#ff3d00"
                              d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                            />
                          </svg>
                          <input
                            type="text"
                            placeholder="Card Number"
                            className="form-control"
                            id="cardNumber"
                            maxLength={19}
                            name="cardNumber"
                            data-bound="carddigits_mock"
                            data-def="0000 0000 0000 0000"
                            required
                          />
                        </div>
                        <i className="ai-circle-check-fill size-lg f-main-color"></i>
                      </div>
                    </div>
                    <div className="flex-between">
                      <div className="card-property-title">
                        <strong>Expiry Date</strong>
                        <span>Enter the expiration date of the card</span>
                      </div>
                      <div className="card-property-value flex-vertical-center">
                        <div className="input-container half-width">
                          <input
                            className="numbers month-own"
                            data-def="00"
                            type="text"
                            data-bound="mm_mock"
                            placeholder="MM"
                          />
                        </div>
                        <span className="m-md">/</span>
                        <div className="input-container half-width">
                          <input
                            className="numbers year-own"
                            data-def="01"
                            type="text"
                            data-bound="yy_mock"
                            placeholder="YYYY"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-between">
                      <div className="card-property-title">
                        <strong>CVC Number</strong>
                        <span>Enter card verification code from the back of the card</span>
                      </div>
                      <div className="card-property-value">
                        <div className="input-container">
                          <input
                            id="cvc"
                            placeholder="Card CVV"
                            maxLength={3}
                            type="password"
                          />
                          <i
                            id="cvc_toggler"
                            data-target="cvc"
                            className="ai-eye-open pointer"
                          ></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-between">
                      <div className="card-property-title">
                        <strong>Cardholder Name</strong>
                        <span>Enter cardholder's name</span>
                      </div>
                      <div className="card-property-value">
                        <div className="input-container">
                          <input
                            id="name"
                            data-bound="name_mock"
                            data-def="Mr. Cardholder"
                            type="text"
                            className="uppercase"
                            placeholder="CARDHOLDER NAME"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
            
              <div className="col-lg-4 col-md-12 flex-vertical-center">
                <div className="creditcard">
                  <div className="flex-vertical">
                    <div className="card-number flex-vertical-center" style={{width:"max-content"}} >
                      <strong id="carddigits_mock">0000 0000 0000 0000</strong>
                    </div>
                    <div className="card-name flex-between flex-vertical-center">
                      <span id="name_mock">Mr. Cardholder</span>
                      <span className="flex-vertical-center">
                        <span id="mm_mock">00</span>/<span id="yy_mock">00</span>
                      </span>
                    </div>
                    <div className="card-footer flex-between flex-vertical-center">
                      <div className="flex-vertical-center">
                        <i className="ai-bitcoin-fill size-xl pr-sm f-main-color"></i>
                        <span>
                          <strong>AceCoin</strong>Pay
                        </span>
                      </div>
                      <div className="mastercard flex-vertical-center">
                        <div className="circle"></div>
                        <div className="circle"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <Button className="m-2" variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="success" type="submit">Submit Payment</Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PaymentModal;
