import '../pagesStyles/CreatePasswordStyles.css';
import React, { useState, useEffect } from 'react';

const CreatePassword = () => {
    const [displayWidth, setDisplayWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setDisplayWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setError('');
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
        } else {
            setError(''); // Clear any existing error
            // Passwords match, do something (e.g., submit form, set state, etc.)
            console.log('Passwords matched:', password);
            // Reset the form after successful submission
            setPassword('');
            setConfirmPassword('');
        }
    };

    return (
        <div className="password-container" style={{ width: displayWidth }}>
            <div className="image"></div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gridGap: "10px" }}>
                <h1 className='passwordHeading'>Create your password</h1>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handlePasswordChange} value={password} />
                    <label htmlFor="floatingPassword">New Password</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="Confirm Password" onChange={handleConfirmPasswordChange} value={confirmPassword} />
                    <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                </div>
                <div style={{ minHeight: '1.5em' }}>
                    {error ? <p style={{ color: 'red', margin: 0 }}>{error}</p> : <p style={{ margin: 0 }}>&nbsp;</p>}
                </div>
                <button type="submit" className="submit-button" style={{ marginTop: '1em' }}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreatePassword;
