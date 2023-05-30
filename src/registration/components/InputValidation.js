export const validateInput = (fieldName, value) => {
    if (fieldName === 'userName') {
      if (value.trim() === '') {
        return 'First Name is required';
      }
    }
  
    if (fieldName === 'userLastName') {
      if (value.trim() === '') {
        return 'Last Name is required';
      }
    }
  
    if (fieldName === 'email') {
      if (value.trim() === '') {
        return 'Email is required';
      } else if (!isValidEmail(value)) {
        return 'Provide a valid email address';
      }
    }
  
    if (fieldName === 'tel') {
      if (value.trim() === '') {
        return 'Phone Number is required';
      } else if (isNaN(value)) {
        return 'The phone number must not contain letters';
      } else if (value.length !== 13) {
        return 'Must be exactly 13 characters';
      } else if (value[0] !== '+') {
        return 'The first character must be +';
      }
    }
  
    if (fieldName === 'subject') {
      if (value.trim() === '') {
        return 'Subject is required';
      }
    }
  
    return '';
  };
  
  const isValidEmail = (email) => {
    const valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return valid.test(String(email).toLowerCase());
  };
  