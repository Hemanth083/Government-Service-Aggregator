import '../pagesStyles/OTPpageStyles.css';
import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const OTPField = () => {
    const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (value.length === 1 && index < 5) {
            inputRefs[index + 1].current.focus();
        }

        const newInput = [...Array(6)].map((_, i) => (i === index ? value : ''));
        // Logic to handle the OTP value using newInput
        // For example, you can set state or perform necessary operations
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && index > 0 && inputRefs[index].current.value === '') {
            inputRefs[index - 1].current.focus();
        }
    };

    return (
        <div className="container mt-4">
            <div className="row">
                {[...Array(6)].map((_, index) => (
                    <div className="col-md-2" key={index}>
                        <input
                            ref={inputRefs[index]}
                            type="text"
                            className="form-control text-center"
                            maxLength="1"
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            style={{ borderColor: '#1db8cd' }} // Add this line for black border
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const OTPPage = () => {
    const [displayWidth, setDisplayWidth] = useState(window.innerWidth);
    const [name, setName] = useState("Hemanth.N");
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
        const handleResize = () => {
            setDisplayWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };


    return (
        <div className="OTPpage-container" style={{ width: displayWidth }}>
            <div className='image'>

            </div>
            <div className='OTP-form'>
                <h2>Please enter the one time password to register you account  </h2>
                <p>A code has been sent to <b>6362919752</b></p>
                <div className="nameInOtpPage">
                    <div className="form-floating ">
                        <input type="text" className="form-control" id="floatingPassword" disabled placeholder="Password" value="Hemanth" />
                        <label htmlFor="floatingPassword">First name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingConfirmPassword" disabled placeholder="Confirm Password" value="N" />
                        <label htmlFor="floatingConfirmPassword">Last Name</label>
                    </div>
                </div>
                <div className="numberInOtpPage">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingConfirmPassword" disabled placeholder="Confirm Password" value="6362919752" />
                        <label htmlFor="floatingConfirmPassword">Phone Number</label>
                    </div>
                </div>
                <div className="otpConatainer">
                    <OTPField />
                </div>
                <Link to={"CreatePassword"}><button type="button" className="submit-button">
                    Verify OTP
                </button></Link>

                <a href="">Resend</a>
            </div>
        </div>
    );
};

export default OTPPage;
