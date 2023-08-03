// MUI //
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DatePickerCustom = (props) => {
  function handleDateChange(newDate) {
    const formattedDate = newDate.format('YYYY-MM-DD');
    props.setDate(formattedDate);
  }
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
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
