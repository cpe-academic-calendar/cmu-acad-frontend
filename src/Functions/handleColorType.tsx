export const handleColorType = (color: string) => {
    switch (color) {
      case "กิจกรรม":
        return "var(--default-event-color)";
      case "วันหยุด":
        return "var(--default-holiday-color)";
      case "วันสอบ":
        return "var(--default-exam-color)";
      case "วันเปิดภาคเรียน":
        return "var(--primary-color)";
      case "วันปิดภาคเรียน":
        return "var(--primary-color)";
    }
  };