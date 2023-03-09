import {DateTime} from 'luxon';

export class DateUtils {
    static getCurrentJSDate(): Date {
        return DateTime.now().toJSDate();
    }
}