const SHEET_NAME = "Assignments";
const SPREADSHEET_ID = "1ixOkx00Ng6uZefH9is65W47I_A75o8TowDJ791fdPF0";

function doGet() {
  return HtmlService.createHtmlOutputFromFile("index")
    .setTitle("Student Performance Dashboard")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getStudentData() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    throw new Error(`Sheet tab "${SHEET_NAME}" not found.`);
  }

  const values = sheet.getDataRange().getValues();

  if (values.length < 2) {
    throw new Error("No data found in the Assignments sheet.");
  }

  const headers = values[0];
  const rows = values.slice(1);

  return rows
    .filter((row) => row.join("") !== "")
    .map((row) => {
      const obj = {};

      headers.forEach((header, index) => {
        const value = row[index];

        if (value instanceof Date) {
          obj[header] = Utilities.formatDate(
            value,
            Session.getScriptTimeZone(),
            "MM/dd/yyyy",
          );
        } else {
          obj[header] = value;
        }
      });

      return obj;
    });
}

function sendGradedNotification(e) {
  const sheet = e.range.getSheet();

  if (sheet.getName() !== SHEET_NAME) return;

  const row = e.range.getRow();
  const col = e.range.getColumn();

  const STUDENT_NAME_COL = 1;
  const SUBJECT_COL = 2;
  const STATUS_COL = 5;
  const EMAIL_COL = 6;

  if (row === 1 || col !== STATUS_COL) return;

  const oldValue = e.oldValue;
  const newValue = e.value;

  if (oldValue === "Pending" && newValue === "Graded") {
    const studentName = sheet.getRange(row, STUDENT_NAME_COL).getValue();
    const subject = sheet.getRange(row, SUBJECT_COL).getValue();
    const email = sheet.getRange(row, EMAIL_COL).getValue();

    MailApp.sendEmail({
      to: email,
      subject: `${subject} Assignment Graded`,
      body: `Hello ${studentName},

Your ${subject} assignment status has changed from Pending to Graded.

Please check your result in the student performance dashboard.

Thank you.`,
    });
  }
}
