﻿var listDataDoc = [{
    id: "1",
    name: "ใบเสนอขอซื้อ",
    iconSrc: "/image/Document-Write-icon.jpg"
}, {
    id: "2",
    name: "เอกสารสั่งซื้อ",
    iconSrc: "/image/Document-Write-icon.jpg"
}, {
    id: "3",
    name: "เอกสารรับจากสั่งซื้อ",
    iconSrc: "/image/Document-Write-icon.jpg"
}, {
    id: "4",
    name: "เอกสารรับตรง",
    iconSrc: "/image/Document-Write-icon.jpg"
}, {
    id: "5",
    name: "เอกสารโอนย้ายสินค้า",
    iconSrc: "/image/Document-Write-icon.jpg"
}, {
    id: "6",
    name: "ใบรับสินค้าจากโอนถ่าย",
    iconSrc: "/image/Document-Write-icon.jpg"
}, {
    id: "7",
    name: "เอกสารเบิกจ่ายสินค้าที่มีราคา",
    iconSrc: "/image/Document-Write-icon.jpg"
}, {
    id: "8",
    name: "เอกสารรับสินค้าจากการโอนที่มีราคา",
    iconSrc: "/image/Document-Write-icon.jpg"
}, {
    id: "9",
    name: "ใบขอสินค้า",
    iconSrc: "/image/Document-Write-icon.jpg"
}, {
    id: "10",
    name: "เอกสารเทมเพลท",
    iconSrc: "/image/Document-Write-icon.jpg"
}
];

var listDataStock = [{
    id: "1",
    name: "ตั้งค่าการนับสต๊อก",
    iconSrc: "/image/tool.png"
}, {
    id: "2",
    name: "นับสต๊อกรายวัน",
    iconSrc: "/image/d.png"
}, {
    id: "3",
    name: "นับสต๊อกรายสัปดาห์",
    iconSrc: "/image/d.png"
}, {
    id: "4",
    name: "นับสต๊อกรายเดือน",
    iconSrc: "/image/m.jpg"
}, {
    id: "5",
    name: "ปรับเพิ่ม-ปรับลด สต๊อก",
    iconSrc: "/image/tool.png"
}, {
    id: "6",
    name: "สต๊อกการ์ด",
    iconSrc: "/image/tool.png"
}, {
    id: "7",
    name: "รายงานสินค้าเข้าออก",
    iconSrc: "/image/tool.png"
}
];

var listDataGeneral = [{
    id: "1",
    name: "ผู้จัดจำหน่าย",
    iconSrc: "/image/p.png"
}
];

//-------------------------------------------------------------------//

var transferApprove = [{
    "#": 1,
    "เลขที่เอกสาร": "HQXWT032559/000001",
    "ถึงคลัง": "Siam Square",
    "วันที่เอกสาร": "24/03/2016",
    "หมายเหตุ": "",
    "ผู้จัดจำหน่าย": "",
    "State": "เอกสารโอนย้ายสินค้า"
}, {
    "#": 1,
    "เลขที่เอกสาร": "HQXWC032559/000001",
    "ถึงคลัง": "Siam Square",
    "วันที่เอกสาร": "24/03/2016",
    "หมายเหตุ": "",
    "ผู้จัดจำหน่าย": "",
    "State": "เอกสารเบิกจ่ายสินค้าที่มีราคา"
}, {
    "#": 2,
    "เลขที่เอกสาร": "HQXWC032559/000002",
    "ถึงคลัง": "Siam Square",
    "วันที่เอกสาร": "24/03/2016",
    "หมายเหตุ": "",
    "ผู้จัดจำหน่าย": "",
    "State": "เอกสารเบิกจ่ายสินค้าที่มีราคา"
}]

var transferReceive = [{
    "#": 1,
    "เลขที่เอกสาร": "002PO122558/000079",
    "คลัง": "ร้านเท็กซัส ชิคเก้น สาขา เซ็นทรัลพลาซาเวสต์เกต",
    "วันที่เอกสาร": "17/12/2015",
    "ผู้จัดจำหน่าย": "บริษัท สหฟาร์ม จำกัด",
    "สร้างเอกสาร": "คลิกเพื่อสร้างเอกสารใหม่",
    "State": "ใบสั่งแจ้งส่งมอบ"
}, {
    "#": 2,
    "เลขที่เอกสาร": "002PO122558/000080",
    "คลัง": "ร้านเท็กซัส ชิคเก้น สาขา เซ็นทรัลพลาซาเวสต์เกต",
    "วันที่เอกสาร": "17/12/2015",
    "ผู้จัดจำหน่าย": "บริษัท สหฟาร์ม จำกัด",
    "สร้างเอกสาร": "คลิกเพื่อสร้างเอกสารใหม่",
    "State": "ใบสั่งแจ้งส่งมอบ"
}, {
    "#": 3,
    "เลขที่เอกสาร": "002PO122558/000079",
    "คลัง": "ร้านเท็กซัส ชิคเก้น สาขา เซ็นทรัลพลาซาเวสต์เกต",
    "วันที่เอกสาร": "17/12/2015",
    "ผู้จัดจำหน่าย": "บริษัท สหฟาร์ม จำกัด",
    "สร้างเอกสาร": "คลิกเพื่อสร้างเอกสารใหม่",
    "State": "ใบสั่งแจ้งส่งมอบ"
}, {
    "#": 4,
    "เลขที่เอกสาร": "002PO122558/000079",
    "คลัง": "ร้านเท็กซัส ชิคเก้น สาขา เซ็นทรัลพลาซาเวสต์เกต",
    "วันที่เอกสาร": "17/12/2015",
    "ผู้จัดจำหน่าย": "บริษัท สหฟาร์ม จำกัด",
    "สร้างเอกสาร": "คลิกเพื่อสร้างเอกสารใหม่",
    "State": "ใบสั่งแจ้งส่งมอบ"
}, {
    "#": 5,
    "เลขที่เอกสาร": "002PO122558/000079",
    "คลัง": "ร้านเท็กซัส ชิคเก้น สาขา เซ็นทรัลพลาซาเวสต์เกต",
    "วันที่เอกสาร": "17/12/2015",
    "ผู้จัดจำหน่าย": "บริษัท สหฟาร์ม จำกัด",
    "สร้างเอกสาร": "คลิกเพื่อสร้างเอกสารใหม่",
    "State": "ใบสั่งแจ้งส่งมอบ"
}, {
    "#": 6,
    "เลขที่เอกสาร": "002PO122558/000079",
    "คลัง": "ร้านเท็กซัส ชิคเก้น สาขา เซ็นทรัลพลาซาเวสต์เกต",
    "วันที่เอกสาร": "17/12/2015",
    "ผู้จัดจำหน่าย": "บริษัท สหฟาร์ม จำกัด",
    "สร้างเอกสาร": "คลิกเพื่อสร้างเอกสารใหม่",
    "State": "ใบสั่งแจ้งส่งมอบ"
}, {
    "#": 7,
    "เลขที่เอกสาร": "002PO122558/000079",
    "คลัง": "ร้านเท็กซัส ชิคเก้น สาขา เซ็นทรัลพลาซาเวสต์เกต",
    "วันที่เอกสาร": "17/12/2015",
    "ผู้จัดจำหน่าย": "บริษัท ข้าวอิ่มทิพย์ จำกัด",
    "สร้างเอกสาร": "คลิกเพื่อสร้างเอกสารใหม่",
    "State": "ใบสั่งแจ้งส่งมอบ"
}, {
    "#": 8,
    "เลขที่เอกสาร": "002PO122558/000079",
    "คลัง": "ร้านเท็กซัส ชิคเก้น สาขา เซ็นทรัลพลาซาเวสต์เกต",
    "วันที่เอกสาร": "21/12/2015",
    "ผู้จัดจำหน่าย": "บริษัท เพสซิเดนท์ เบเกอรี่ จำกัด",
    "สร้างเอกสาร": "คลิกเพื่อสร้างเอกสารใหม่",
    "State": "ใบสั่งแจ้งส่งมอบ"
},{
    "#": 9,
    "เลขที่เอกสาร": "002PO122558/000079",
    "คลัง": "ร้านเท็กซัส ชิคเก้น สาขา เซ็นทรัลพลาซาเวสต์เกต",
    "วันที่เอกสาร": "21/12/2015",
    "ผู้จัดจำหน่าย": "บริษัท เพสซิเดนท์ เบเกอรี่ จำกัด",
    "สร้างเอกสาร": "คลิกเพื่อสร้างเอกสารใหม่",
    "State": "ใบสั่งแจ้งส่งมอบ"
}, {
    "#": 10,
    "เลขที่เอกสาร": "002PO122558/000079",
    "คลัง": "ร้านเท็กซัส ชิคเก้น สาขา เซ็นทรัลพลาซาเวสต์เกต",
    "วันที่เอกสาร": "21/12/2015",
    "ผู้จัดจำหน่าย": "บริษัท เพสซิเดนท์ เบเกอรี่ จำกัด",
    "สร้างเอกสาร": "คลิกเพื่อสร้างเอกสารใหม่",
    "State": "ใบสั่งแจ้งส่งมอบ"
}, {
    "#": 1,
    "เลขที่เอกสาร": "002PR122558/000143",
    "คลัง": "ร้านเท็กซัส ชิคเก้น สาขา เซ็นทรัลพลาซาเวสต์เกต",
    "วันที่เอกสาร": "17/12/2015",
    "ผู้จัดจำหน่าย": "DC5010 Chilled Plant",
    "สร้างเอกสาร": "คลิกเพื่อสร้างเอกสารใหม่",
    "State": "ใบเสนอขอซื้อ (PR)"
}, {
    "#": 2,
    "เลขที่เอกสาร": "002PR122558/000144",
    "คลัง": "ร้านเท็กซัส ชิคเก้น สาขา เซ็นทรัลพลาซาเวสต์เกต",
    "วันที่เอกสาร": "17/12/2015",
    "ผู้จัดจำหน่าย": "DC5010 Chilled Plant",
    "สร้างเอกสาร": "คลิกเพื่อสร้างเอกสารใหม่",
    "State": "ใบเสนอขอซื้อ (PR)"
}, {
    "#": 3,
    "เลขที่เอกสาร": "002PR122558/000150",
    "คลัง": "ร้านเท็กซัส ชิคเก้น สาขา เซ็นทรัลพลาซาเวสต์เกต",
    "วันที่เอกสาร": "17/12/2015",
    "ผู้จัดจำหน่าย": "DC5011 Ambient Plant",
    "สร้างเอกสาร": "คลิกเพื่อสร้างเอกสารใหม่",
    "State": "ใบเสนอขอซื้อ (PR)"
}, {
    "#": 4,
    "เลขที่เอกสาร": "002PR122558/000151",
    "คลัง": "ร้านเท็กซัส ชิคเก้น สาขา เซ็นทรัลพลาซาเวสต์เกต",
    "วันที่เอกสาร": "17/12/2015",
    "ผู้จัดจำหน่าย": "DC5011 Ambient Plant",
    "สร้างเอกสาร": "คลิกเพื่อสร้างเอกสารใหม่",
    "State": "ใบเสนอขอซื้อ (PR)"
}, {
    "#": 5,
    "เลขที่เอกสาร": "002PR012559/000001",
    "คลัง": "ร้านเท็กซัส ชิคเก้น สาขา เซ็นทรัลพลาซาเวสต์เกต",
    "วันที่เอกสาร": "04/01/2016",
    "ผู้จัดจำหน่าย": "DC5010 Chilled Plant",
    "สร้างเอกสาร": "คลิกเพื่อสร้างเอกสารใหม่",
    "State": "ใบเสนอขอซื้อ (PR)"
}, {
    "#": 6,
    "เลขที่เอกสาร": "002PR012559/000002",
    "คลัง": "ร้านเท็กซัส ชิคเก้น สาขา เซ็นทรัลพลาซาเวสต์เกต",
    "วันที่เอกสาร": "04/01/2016",
    "ผู้จัดจำหน่าย": "DC5011 Ambient Plant",
    "สร้างเอกสาร": "คลิกเพื่อสร้างเอกสารใหม่",
    "State": "ใบเสนอขอซื้อ (PR)"
}
]

var dataPurchase = {
    "ID": 1,
    "คลัง": "HQ",
    "กลุ่มผู้จัดจำหน่าย": "Heart",
    "วันที่": new Date().toLocaleString(),
    "ผู้จัดจำหน่าย": "1964/03/16",
    "เอกสารอ้างอิง": "",
    "ประเภทการจ่ายเงิน": "",
    "หมายเหตุ": "",
    "วันที่ส่งสินค้า": ""
};

var treasury = [
    "HQ",
    "TEXAS CHICKEN MASTER",
    "ร้านเท็กซัส ชิคเก้น สาขา เซ็นทรัลพลาซาเวสต์เกต",
    "ร้านเท็กซัส ชิคเก้น สาขา อาคารสยามกิตติ์"
];

var documentType = [
    "ใบสั่งแจ้งส่งมอบ",
    "ใบขอสินค้า (RQ)",
    "ใบรับสินค้าตรง (DRO)",
    "ใบเสนอขอซื้อ (PR)"
];

var Request = [{
    "#": "",
    "Code": "",
    "รหัสวัตถุดิบจากผู้จัดจำหน่าย": "",
    "Item": "",
    "Amount": "",
    "Unit": "",
    "Price/Unit": "",
    "Discount": "",
    "VAT": "SubTotal",
    "Total": "",
    "x": ""
}, {
    "#": "",
    "Code": "",
    "รหัสวัตถุดิบจากผู้จัดจำหน่าย": "",
    "Item": "",
    "Amount": "",
    "Unit": "",
    "Price/Unit": "",
    "Discount": "",
    "VAT": "Discount",
    "Total": "",
    "x": ""
}, {
    "#": "",
    "Code": "",
    "รหัสวัตถุดิบจากผู้จัดจำหน่าย": "",
    "Item": "",
    "Amount": "",
    "Unit": "",
    "Price/Unit": "",
    "Discount": "",
    "VAT": "NetPrice",
    "Total": "",
    "x": ""
}, {
    "#": "",
    "Code": "",
    "รหัสวัตถุดิบจากผู้จัดจำหน่าย": "",
    "Item": "",
    "Amount": "",
    "Unit": "",
    "Price/Unit": "",
    "Discount": "",
    "VAT": "TotalVAT",
    "Total": "",
    "x": ""
}, {
    "#": "",
    "Code": "",
    "รหัสวัตถุดิบจากผู้จัดจำหน่าย": "",
    "Item": "",
    "Amount": "",
    "Unit": "",
    "Price/Unit": "",
    "Discount": "",
    "VAT": "GrandTotal",
    "Total": "",
    "x": ""
}
];

var Order = [{
    "#": "",
    "รหัสวัตถุดิบ": "",
    "รายการ": "",
    "จำนวน": "",
    "หน่วย": "",
    "ราคา/หน่วย": "",
    "ส่วนลด": "",
    "VAT": "รวม",
    "รวม": "",
    "x": ""
}, {
    "#": "",
    "รหัสวัตถุดิบ": "",
    "รายการ": "",
    "จำนวน": "",
    "หน่วย": "",
    "ราคา/หน่วย": "",
    "ส่วนลด": "",
    "VAT": "ส่วนลด",
    "รวม": "",
    "x": ""
}, {
    "#": "",
    "รหัสวัตถุดิบ": "",
    "รายการ": "",
    "จำนวน": "",
    "หน่วย": "",
    "ราคา/หน่วย": "",
    "ส่วนลด": "",
    "VAT": "ยอดรวม",
    "รวม": "",
    "x": ""
}, {
    "#": "",
    "รหัสวัตถุดิบ": "",
    "รายการ": "",
    "จำนวน": "",
    "หน่วย": "",
    "ราคา/หน่วย": "",
    "ส่วนลด": "",
    "VAT": "VAT",
    "รวม": "",
    "x": ""
}, {
    "#": "",
    "รหัสวัตถุดิบ": "",
    "รายการ": "",
    "จำนวน": "",
    "หน่วย": "",
    "ราคา/หน่วย": "",
    "ส่วนลด": "",
    "VAT": "ยอดรวมทั้งหมด",
    "รวม": "",
    "x": ""
}
];

var TransferStockDocument = [{
    "#": "",
    "รหัสวัตถุดิบ": "",
    "รายการ": "",
    "จำนวน": "",
    "หน่วย": "",
    "ราคา/หน่วย": "",
    "ส่วนลด": "",
    "VAT": "รวม",
    "รวม": "",
    "x": ""
}
];

var TransferStockCost = [{
    "#": "",
    "รหัสวัตถุดิบ": "",
    "รายการ": "",
    "สต๊อก": "",
    "จำนวน": "",
    "หน่วย": "",
    "ราคา/หน่วย": "",
    "ส่วนลด": "",
    "VAT": "รวม",
    "รวม": "",
    "x": ""
}, {
    "#": "",
    "รหัสวัตถุดิบ": "",
    "รายการ": "",
    "สต๊อก": "",
    "จำนวน": "",
    "หน่วย": "",
    "ราคา/หน่วย": "",
    "ส่วนลด": "",
    "VAT": "ส่วนลด",
    "รวม": "",
    "x": ""
}, {
    "#": "",
    "รหัสวัตถุดิบ": "",
    "รายการ": "",
    "สต๊อก": "",
    "จำนวน": "",
    "หน่วย": "",
    "ราคา/หน่วย": "",
    "ส่วนลด": "",
    "VAT": "ยอดรวม",
    "รวม": "",
    "x": ""
}, {
    "#": "",
    "รหัสวัตถุดิบ": "",
    "รายการ": "",
    "สต๊อก": "",
    "จำนวน": "",
    "หน่วย": "",
    "ราคา/หน่วย": "",
    "ส่วนลด": "",
    "VAT": "VAT",
    "รวม": "",
    "x": ""
}, {
    "#": "",
    "รหัสวัตถุดิบ": "",
    "รายการ": "",
    "สต๊อก": "",
    "จำนวน": "",
    "หน่วย": "",
    "ราคา/หน่วย": "",
    "ส่วนลด": "",
    "VAT": "ยอดรวมทั้งหมด",
    "รวม": "",
    "x": ""
}
];

var ReceiveStockCost = [{
    "#": "",
    "รหัสวัตถุดิบ": "",
    "รายการ": "",
    "จำนวน": "",
    "หน่วย": "",
    "ราคา/หน่วย": "",
    "ส่วนลด": "",
    "VAT": "รวม",
    "รวม": "",
    "x": ""
}, {
    "#": "",
    "รหัสวัตถุดิบ": "",
    "รายการ": "",
    "จำนวน": "",
    "หน่วย": "",
    "ราคา/หน่วย": "",
    "ส่วนลด": "",
    "VAT": "ส่วนลด",
    "รวม": "",
    "x": ""
}, {
    "#": "",
    "รหัสวัตถุดิบ": "",
    "รายการ": "",
    "จำนวน": "",
    "หน่วย": "",
    "ราคา/หน่วย": "",
    "ส่วนลด": "",
    "VAT": "ยอดรวม",
    "รวม": "",
    "x": ""
}, {
    "#": "",
    "รหัสวัตถุดิบ": "",
    "รายการ": "",
    "จำนวน": "",
    "หน่วย": "",
    "ราคา/หน่วย": "",
    "ส่วนลด": "",
    "VAT": "VAT",
    "รวม": "",
    "x": ""
}, {
    "#": "",
    "รหัสวัตถุดิบ": "",
    "รายการ": "",
    "จำนวน": "",
    "หน่วย": "",
    "ราคา/หน่วย": "",
    "ส่วนลด": "",
    "VAT": "ยอดรวมทั้งหมด",
    "รวม": "",
    "x": ""
}
];

var BillOfSale = [{
    "#": "",
    "รหัสวัตถุดิบ": "",
    "รายการ": "",
    "จำนวน": "",
    "หน่วย": "",
    "x": ""
}];

var pay = [
    "Cash",
    "Credit"
];

var vat = [
    "Include",
    "Exclude",
    "No VAT"
];

var distributorsgroup = [
    "PTT Vender",
    "Vender West Gate",
    "คลังสินค้า"
];

var distributors = [{
        "ID": 1,
        "VendorCode": "0010001696",
        "VendorName": "บริษัท โฮม โปรดักส์ เซ็นเตอร์ จำกัด (มหาชน)"
    }, {
        "ID": 2,
        "VendorCode": "10003049",
        "VendorName": "บริษัท ออฟฟิช คลับ (ไทย)จำกัด"
    }, {
        "ID": 3,
        "VendorCode": "10005276",
        "VendorName": "บริษัท เพสซิเดนท์ เบเกอรี่ จำกัด"
    }, {
        "ID": 4,
        "VendorCode": "10006550",
        "VendorName": "บริษัท เซ็นทรัล ฟู้ด รีเทล จำกัด"
    }, {
        "ID": 5,
        "VendorCode": "10007785",
        "VendorName": "บริษัท ไทยน้ำทิพย์ จำกัด"
    }, {
        "ID": 6,
        "VendorCode": "10016109",
        "VendorName": "บริษัท เคซีจี คอร์ปอเรชั่น จำกัด"
    }, {
        "ID": 7,
        "VendorCode": "10016110",
        "VendorName": "บริษัท ฉอยชิว จำกัด"
    }, {
        "ID": 8,
        "VendorCode": "10016122",
        "VendorName": "บริษัท คิวพี (ประเทศไทย) จำกัด"
    }, {
        "ID": 9,
        "VendorCode": "10016146",
        "VendorName": "บริษัท แพนฟู้ด จำกัด"
    }, {
        "ID": 10,
        "VendorCode": "10016153",
        "VendorName": "บริษัท ธีรภัทรฟู้ดส์ จำกัด"
    }, {
        "ID": 11,
        "VendorCode": "10016181",
        "VendorName": "บริษัท ข้าวอิ่มทิพย์ จำกัด"
    }, {
        "ID": 12,
        "VendorCode": "10016267",
        "VendorName": "บริษัท เบสท์ ควอลิตี้ สโตร์ จำกัด"
    }, {
        "ID": 13,
        "VendorCode": "10016289",
        "VendorName": "บริษัท สหฟาร์ม จำกัด"
    }, {
        "ID": 14,
        "VendorCode": "10016329",
        "VendorName": "บริษัท สยามฟูด เซอร์วิส จำกัด"
    }, {
        "ID": 15,
        "VendorCode": "DC5010",
        "VendorName": "DC5010 Chilled Plant"
    }, {
        "ID": 16,
        "VendorCode": "DC5011",
        "VendorName": "DC5011 Ambient Plant"
    }, {
        "ID": 17,
        "VendorCode": "HQ",
        "VendorName": "HQ - Headquarter"
    }, {
        "ID": 18,
        "VendorCode": "PXND0003",
        "VendorName": "จ/นอื่นขาจร ภ.ง.ด. 3"
    }, {
        "ID": 19,
        "VendorCode": "PXND0053",
        "VendorName": "จ/นอื่นขาจร ภ.ง.ด. 53"
    }
];

var accordionItems = [{
    "ID": 1
}];