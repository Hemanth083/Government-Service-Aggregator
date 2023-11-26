import React, { useState } from 'react';
import '../pagesStyles/RegistrationPageStyles.css';
import { Link } from "react-router-dom";

const Error = {
    color: 'red',
    display: 'block',
};

const AadhaarInput = ({ setAadhaarValid, setAadhaarNumber }) => {
    const [aadhaarNumber, setLocalAadhaarNumber] = useState('');

    const handleChange = (e) => {
        const input = e.target.value.replace(/\D/g, '').substring(0, 12);
        const formattedInput = input.replace(/(\d{4})(?=\d)/g, '$1-').substring(0, 14);
        setLocalAadhaarNumber(formattedInput);
        setAadhaarNumber(formattedInput); // Pass the formatted input to the parent component
    };

    return (
        <>
            <input
                type="text"
                className="form-control"
                placeholder="XXXX-XXXX-XXXX"
                maxLength="14"
                value={aadhaarNumber}
                onChange={handleChange}
            />
        </>
    );
};

const Registration = () => {
    const [displayWidth, setDisplayWidth] = useState(window.innerWidth);
    const [aadhaarValid, setAadhaarValid] = useState(true);
    const [aadhaarNumber, setAadhaarNumber] = useState('');

    window.addEventListener('resize', () => {
        setDisplayWidth(window.innerWidth);
    });

    const body = {
        width: displayWidth,
    };

    // const checkAadhaarNumber = () => {
    //     if (aadhaarValid) {
    //         alert('Successfully Registered with Aadhaar number: ' + aadhaarNumber);
    //         // You can perform additional actions after successful registration

    //     } else {
    //         alert('Invalid Aadhaar Number');
    //     }
    // };
    const width = { width: "0 %" }

    return (
        <div className="registration-container" style={body}>
            <div className="registration-form ">
                <div className='aadhaarNumber'>
                    <h3 className='registerPageHeading'>Enter Aadhaar Number </h3>
                    <div className="inputField">
                        <AadhaarInput setAadhaarValid={setAadhaarValid} setAadhaarNumber={setAadhaarNumber} />
                    </div>
                    {!aadhaarValid && (
                        <p style={Error} className="notvalid-statement">
                            Aadhaar number not valid
                        </p>
                    )}
                </div>
                <Link to="OTP"><button type="button" className="submit-button">
                    Register
                </button></Link>
            </div>
        </div>
    );
};

export default Registration;
