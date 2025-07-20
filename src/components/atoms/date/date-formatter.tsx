import { parseISO, format } from 'date-fns';

interface DateFormatterProps {
    dateString?: string;
}

const DateFormatter = ({ dateString }: DateFormatterProps) => {
    const date = dateString ? parseISO(dateString) : null;

    return <time dateTime={dateString}>{date ? format(date, 'LLLL d, yyyy') : 'Invalid date'}</time>;
};

export default DateFormatter;
