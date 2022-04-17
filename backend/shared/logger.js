import { getCurrentDateTime } from './timers.js';
import 'colors';

export function log_in_console(string) {
        console.log();
        console.log(
            (" " + getCurrentDateTime(true, false) + " | ").bgWhite.black + string);
}