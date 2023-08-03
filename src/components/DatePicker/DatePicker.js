// MUI //
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const DatePickerCustom = (props) => {
  function handleDateChange(newDate) {
    const formattedDate = newDate.format('YYYY-MM-DD hh:mm A');
    props.setDate(formattedDate);
  }
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateTimePicker"]}>
          <DateTimePicker
            sx={{ width: "100%" }}
            label="dd-mm-yyyy"
            onChange={handleDateChange}
          />
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
};

export default DatePickerCustom;
