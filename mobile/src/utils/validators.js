export const PATTERN_NAME = /[a-z ,.'-]+/;
export const PATTERN_DOB = /\d{1,2}\/\d{1,2}\/\d{4}/;
export const PATTERN_EMAIL = /\S+@\S+\.\S+/;
export const PATTERN_PASSWORD = /[a-z0-9]{8,}/;
export const PATTERN_PHONE = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
export const PATTERN_SMS_CODE = /\d{4}/;
export const PATTERN_CARD_NUMBER = /\d{4} \d{4} \d{4} \d{4}/;
export const PATTERN_CARD_EXPIRE_DATE = /\d{2}\/\d{2}/;
export const PATTERN_CARD_CVV = /\d{3}/;
export const PATTERN_FULLNAME = /^$|^[a-zA-ZčČćĆđĐšŠžŽ-]+ [a-zA-ZčČćĆđĐšŠžŽ-]+$/;
export const NameValidator = (value) => {
    return RegExpValidator(PATTERN_NAME, value);
};
export const DOBValidator = (value) => {
    return RegExpValidator(PATTERN_DOB, value);
};
export const EmailValidator = (value) => {
    return RegExpValidator(PATTERN_EMAIL, value);
};
export const PasswordValidator = (value) => {
    return RegExpValidator(PATTERN_PASSWORD, value);
};
export const PhoneNumberValidator = (value) => {
    return RegExpValidator(PATTERN_PHONE, value);
};
export const SMSCodeValidator = (value) => {
    return RegExpValidator(PATTERN_SMS_CODE, value);
};
export const CardNumberValidator = (value) => {
    return RegExpValidator(PATTERN_CARD_NUMBER, value);
};
export const ExpirationDateValidator = (value) => {
    return RegExpValidator(PATTERN_CARD_EXPIRE_DATE, value);
};
export const CvvValidator = (value) => {
    return RegExpValidator(PATTERN_CARD_CVV, value);
};
export const CardholderNameValidator = (value) => {
    return RegExpValidator(PATTERN_FULLNAME, value);
};
export const StringValidator = (value) => {
    return !!value && value.length > 0;
};
const RegExpValidator = (regexp, value) => {
    return regexp.test(value);
};
