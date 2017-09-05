const $ = window.jQuery;
const CLASSES = {
    ACTIVE: 'isActive',
};

/**
 * Adds animated label functionality to form field inputs and text areas
 *
 * @class FormField
 * @param {jQuery} reference to form element
 * @param {String} classname or element name of parent element
 */
class FormField {

    constructor($element, parentElementName) {
        this.$element = $element;
        this.parentClass = parentElementName;

        this.init();

    }

    /**
    * Initializes the view
    *
    * @method init
    * @returns {}
    * @public
    */
    init() {
        this.enable();
        return this;
    }

    /**
    * Enables the component.
    * Performs any event binding to handlers.
    * Exits early if it is already enabled.
    *
    * @method enable
    * @returns {FormField}
    * @public
    */
    enable() {
        if (this.isEnabled) {
            return this;
        }
        this.isEnabled = true;
        this.setupHandlers();
        this.setInitialStates();
        this
            .$element
            .on('focus', this.onFieldFocusHandler);
        this
            .$element
            .on('focusout', this.onFieldFocusOutHandler);

        return this;
    }

    /**
     * Sets up handler functions to ensure that context is properly bound
     * @method setupHandlers
     */
    setupHandlers() {
        this.onFieldFocusHandler = this.onFieldFocus.bind(this);
        this.onFieldFocusOutHandler = this.onFieldFocusOut.bind(this);
    }

    /**
     * Field focus event
     *
     * @method onFieldFocus
     * @param {Object} event
     * @returns {FormField}
     */
    onFieldFocus(event) {
        const currentFieldGroup = $(event.currentTarget).closest(this.parentClass);
        currentFieldGroup.addClass(CLASSES.ACTIVE);
    }

    /**
     * Field focusout event
     *
     * @method onFieldFocusOut
     * @param {Object} event
     * @returns {FormField}
     */
    onFieldFocusOut(event) {
        const currentField = event.currentTarget;
        const currentFieldGroup = $(event.currentTarget).closest(this.parentClass);

        if (!currentField.value.length) {
            currentFieldGroup.removeClass(CLASSES.ACTIVE);
        }

        if (currentField.value.length) {
            currentFieldGroup.addClass('hasValue');
        }
    }

    /**
     * Sets up initial states for form fields that have values
     * @method setInitialStates
     */
    setInitialStates() {
        let i = 0;

        for (; i < this.$element.length; i++) {
            if (this.$element[i].value.length) {
                const currentFieldGroup = $(this.$element[i]).closest(this.parentClass);
                currentFieldGroup.addClass('isActive hasValue');
            }
        }
    }

};

export default FormField;
