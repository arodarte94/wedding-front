import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../../styles/dateRangePicker.module.scss';
import dayjs from 'dayjs';

const DateRangePicker = ({ title, set, field }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (dateRange[0] && dateRange[1]) {
      set({
        [field + '_from']: dayjs(dateRange[0]).format('YYYY-MM-DD'),
        [field + '_to']: dayjs(dateRange[1]).format('YYYY-MM-DD'),
      });
    } else if (!dateRange[0] && !dateRange[1] && !isFirstLoad) {
      set({ [field + '_from']: null, [field + '_to']: null });
    }
    setIsFirstLoad(false);
  }, [dateRange]);

  return (
    <>
      <DatePicker
        className={styles.dateRangePicker}
        dateFormat="yyyy/MM/dd"
        placeholderText={title}
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update: any) => {
          setDateRange(update);
        }}
        isClearable={true}
      />
    </>
  );
};

export default DateRangePicker;
