import validator from 'validator'


export const emailValidation = (email)=>{
  return validator.isEmail(email)
};

export const emptyValidation = (str)=>{
  return validator.isEmpty(str)
};

export const emptyNumber = (num)=>{
  return validator.isMobilePhone(num)
};





