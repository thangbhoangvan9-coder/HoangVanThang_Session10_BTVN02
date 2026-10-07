const circulationLogs = [
    {
        logId: "L001",
        studentCode: "SV001",
        bookIsbn: "ISBN001",
        status: "BORROWING",
        fineAmount: 0,
        overdueDays: 0
    },
    {
        logId: "L002",
        studentCode: "SV002",
        bookIsbn: "ISBN002",
        status: "RETURNED",
        fineAmount: 10000,
        overdueDays: 2
    },
    {
        logId: "L003",
        studentCode: "SV003",
        bookIsbn: "ISBN003",
        status: "LOST",
        fineAmount: 200000,
        overdueDays: 0
    }
];

function displayLogs() {
    console.log("\n======================================================================");
    console.log("                 NHẬT KÝ LƯU CHUYỂN THƯ VIỆN");
    console.log("======================================================================");
    console.log(
        "Log ID\tSinh viên\tISBN\t\tTrạng thái\tTiền phạt"
    );
    console.log("----------------------------------------------------------------------");

    for (const log of circulationLogs) {
        console.log(
            log.logId + "\t" +
            log.studentCode + "\t\t" +
            log.bookIsbn + "\t\t" +
            log.status + "\t" +
            log.fineAmount + " VNĐ"
        );
    }

    console.log("======================================================================");
}

const newLog = {
    logId: "L004",
    studentCode: "SV004",
    bookIsbn: "ISBN004",
    status: "BORROWING",
    fineAmount: 0,
    overdueDays: 0
};

if (newLog.studentCode !== "") {
    circulationLogs.push(newLog);
}

console.log("1. SAU KHI TẠO GIAO DỊCH MƯỢN SÁCH");
displayLogs();

for (const log of circulationLogs) {
    if (log.logId === "L001") {
        log.status = "RETURNED";

        if (log.overdueDays > 0) {
            log.fineAmount = log.overdueDays * 5000;
        } else {
            log.fineAmount = 0;
        }
    }
}

for (const log of circulationLogs) {
    if (log.status === "LOST") {
        log.fineAmount = 200000;
    }
}

console.log("\n2. SAU KHI CẬP NHẬT MƯỢN/TRẢ");
displayLogs();

for (let i = 0; i < circulationLogs.length; i++) {
    if (
        circulationLogs[i].status === "RETURNED" &&
        circulationLogs[i].fineAmount > 0
    ) {
        circulationLogs.splice(i, 1);
        i--;
    }
}

console.log("\n3. SAU KHI XÓA NHẬT KÝ ĐÃ HOÀN TẤT");
displayLogs();

let totalBorrowing = 0;
let totalFine = 0;

for (const log of circulationLogs) {
    if (log.status === "BORROWING") {
        totalBorrowing++;
    }

    totalFine += log.fineAmount;
}

console.log("\n4. BÁO CÁO TỔNG KẾT CUỐI NGÀY");
console.log("----------------------------------------------------------------------");
console.log("Tổng số sách đang được mượn:", totalBorrowing);
console.log("Tổng số tiền phạt:", totalFine, "VNĐ");
console.log("----------------------------------------------------------------------");

