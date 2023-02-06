import { format, parseISO } from "date-fns";
import plLocale from 'date-fns/locale/pl';

const DateFormatter: React.FCC<{
  dateString: string;
}> = ({ dateString }) => {
  const date = parseISO(dateString);  

  return (
    <time dateTime={dateString}>{format(date, "PP", {locale: plLocale})}</time>
  );
};

export default DateFormatter;
