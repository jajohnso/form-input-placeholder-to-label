import jquery from 'jquery';
import 'babel-polyfill';
import FormField from './views/FormField';

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
        this.formField = new FormField($('.gfield input, .gfield textarea'), '.gfield');

        return this;
    }

}

export default App;
