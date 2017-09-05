
import 'babel-polyfill';
import FormField from './views/FormField';

const $ = window.jQuery;
/**
 * Initial application setup. Runs once upon every page load.
 *
 * @class App
 * @constructor
 */
class App {

    /**
     * Initializes the application and kicks off loading of prerequisites.
     *
     * @method init
     * @public
     * @returns {App}
     */
    init() {
        // Create your views here

        this.formField = new FormField($('input[type=text]'), '.formField');

        return this;
    }

}

export default App;
