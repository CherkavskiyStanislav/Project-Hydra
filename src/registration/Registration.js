import React, { useState } from 'react';
import './Registration.scss';
import './FormInputs.scss';
import { FormInput } from './components/FormInputs';
import { validateInput } from './components/InputValidation';
import { useTranslation } from 'react-i18next';


const Registration = () => {
  const [userName, setUserName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [subject, setSubject] = useState('');
  const [errors, setErrors] = useState({
    userName: '',
    userLastName: '',
    email: '',
    tel: '',
    subject: ''
  });

  const [successes, setSuccesses] = useState({
    userName: false,
    userLastName: false,
    email: false,
    tel: false,
    subject: false
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
  };

  const validateForm = () => {
    const userNameError = validateInput('userName', userName);
    const userLastNameError = validateInput('userLastName', userLastName);
    const emailError = validateInput('email', email);
    const telError = validateInput('tel', tel);
    const subjectError = validateInput('subject', subject);

    setErrors({
      userName: userNameError,
      userLastName: userLastNameError,
      email: emailError,
      tel: telError,
      subject: subjectError
    });

    setSuccesses({
      userName: !userNameError,
      userLastName: !userLastNameError,
      email: !emailError,
      tel: !telError,
      subject: !subjectError
    });

    if (!userNameError && !userLastNameError && !emailError && !telError && !subjectError) {
    }
  };
  const { t } = useTranslation();


  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form__container">
        <div className="form__title">
          <h2>{t('form__title-h2')}</h2>
          <h3>{t('form__title-h3')}</h3>
        </div>

        <div className='form__main'>
          <FormInput
            name="name"
            type="text"
            placeholder="First Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            error={errors.userName}
            success={successes.userName}
          />

          <FormInput
            name="lastname"
            type="text"
            placeholder="Last Name"
            value={userLastName}
            onChange={(e) => setUserLastName(e.target.value)}
            error={errors.userLastName}
            success={successes.userLastName}
          />

          <FormInput
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
            success={successes.email}
          />

          <FormInput
            name="tel"
            type="tel"
            placeholder="Phone Number"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            error={errors.tel}
            success={successes.tel}
          />

          <FormInput
            name="subject"
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            error={errors.subject}
            success={successes.subject}
          />

          <div className="form__tell">
            <textarea name="message" id="form__tell--something" placeholder="Tell Us Something..." />
          </div>
          <button type="submit" className="form__button">{t('form__title-btn')}</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
