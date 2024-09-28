export default class ValidationRules{
    static passwordValidationRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    static emailValidationRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    /**
     * Validates password. You provide regex, minimum length, maximum length, if needed, else it 
     * would take default values if minimum length of 8, and maximum length of 16.
     * @param {string} password 
     * @param {RegExp} regex 
     * @param {number} minLength 
     * @param {number} maxLength 
     * @returns {object}
     */
    static validatePassword(password, regex = this.passwordValidationRegex, minLength = 8, maxLength = 16){
        if (!password || typeof password !== 'string') {
            return {
                error: 'Not a valid password format.'
            };
        }

        if (password.length < minLength) {
            return {
                error: `Passwords should have at least ${minLength} characters.`
            };
        }

        if (password.length > maxLength) {
            return {
                error: `Passwords should have at most ${minLength} characters.`
            };
        }

        const isValid = regex.test(password);

        if (!isValid) {
            return {
                error: `Password must contain at least ${minLength} characters, including uppercase, lowercase, number, and special character.`
            }
        }

        return {
            success: true
        }
    }

    /**
     * Checks if given object is empty or not.
     * @param {object} obj 
     * @returns {boolean}
     */
    static isEmptyObject(obj){
        if (!obj || typeof obj !== 'object') {
            return true;
        }

        return Object.keys(obj).length === 0;
    }

    /**
     * Validates if email provided is valid or not.
     * @param {string} email 
     * @param {RegExp} regex 
     * @returns {object}
     */
    static validateEmail(email, regex = this.emailValidationRegex){
        if (!email || typeof email !== 'string') {
            return {
                error: 'Invalid email provided.'
            }
        }

        const isValidEmail = regex.test(email);

        if (!isValidEmail) {
            return {
                error: 'Invalid email provided.'
            }
        }

        return {
            success: true
        }
    }
}