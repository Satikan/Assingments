var app = angular.module('myApp', ["ngRoute", "dx"])

app.controller('TestController', ['$scope', function ($scope) {

    $scope.listOptionsDoc = {
        dataSource: new DevExpress.data.DataSource(listDataDoc),
        activeStateEnabled: true,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        height: 440
    };

    $scope.listOptionsStock = {
        dataSource: new DevExpress.data.DataSource(listDataStock),
        activeStateEnabled: true,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        height: 440
    };

    $scope.listOptionsGeneral = {
        dataSource: new DevExpress.data.DataSource(listDataGeneral),
        activeStateEnabled: true,
        hoverStateEnabled: true,
        focusStateEnabled: true,
        height: 440
    };

    //-------------------------------------------------------------------//

    $scope.grouping = {
        autoExpandAll: true
    };

    $scope.dataGridOptionsApprove = {
        dataSource: transferApprove,
        allowColumnReordering: true,
        bindingOptions: {
            grouping: "grouping"
        },
        paging: {
            pageSize: 10
        },
        groupPanel: {
            visible: true
        },
        columns: [
            {
                dataField: "#",
                width: 30
            },
            {
                dataField: "เลขที่เอกสาร",
                width: 170
            },
            "ถึงคลัง",
            "วันที่เอกสาร",
            "หมายเหตุ",
            "ผู้จัดจำหน่าย",
            {
                dataField: "State",
                groupIndex: 0
            }
        ]
    };

    //---------------------------------------------------------------------//

    $scope.dataGridOptionsReceive = {
        dataSource: transferReceive,
        allowColumnReordering: true,
        bindingOptions: {
            grouping: "grouping"
        },
        paging: {
            pageSize: 10
        },
        groupPanel: {
            visible: true
        },
        columns: [
            {
                dataField: "#",
                width: 30
              
            },
            {
                dataField: "เลขที่เอกสาร",
                width: 170
            },
            {
                dataField: "คลัง",
                height: 500
            },
            "วันที่เอกสาร",
            "ผู้จัดจำหน่าย",
            "สร้างเอกสาร",
            {
                dataField: "State",
                groupIndex: 0
            }
        ]
    };

    //------------------------------------------------------------//

}
])

app.controller('PurchaseRequestController', ['$scope', function ($scope) {

    $scope.formOptionsRequest = {
        colCount: 2,
        formData: dataPurchase,
        items: [{
            dataField: "คลัง",
            editorType: "dxSelectBox",
            editorOptions: {
                items: treasury,
                value: "",
                disabled: true

            }
        }, {
            dataField: "กลุ่มผู้จัดจำหน่าย",
            editorType: "dxSelectBox",
            editorOptions: {
                items: distributorsgroup,
                value: "",
                disabled: true

            }
        }, {
            dataField: "วันที่",
            editorType: "dxDateBox",
            editorOptions: {
                disabled: true
            }
        }, {
            dataField: "ผู้จัดจำหน่าย",
            editorType: "dxSelectBox",
            editorOptions: {
                items: distributors,
                displayExpr: "VendorName",
                valueExpr: "ID",
                searchEnabled: true,
                disabled: true
            }
        }, {
            dataField: "ประเภทการจ่ายเงิน",
            editorType: "dxSelectBox",
            editorOptions: {
                items: pay,
                value: "",
                disabled: true
            }
        }, {
            dataField: "จำนวนวัน",
            editorOptions: {
                disabled: true
            }
        }, {
            dataField: "เอกสารอ้างอิง",
            editorOptions: {
                disabled: true
            }
        },  {
            dataField: "หมายเหตุ",
            editorOptions: {
                disabled: true
            }
        }, {
            dataField: "วันที่ส่งสินค้า",
            editorType: "dxDateBox",
            editorOptions: {
                format: "datetime",
                value: null,
                disabled: true
            }
        }
        ]
    };

    //-----------------------------------------------------------------//

    $scope.gridOptionsRequest = {
        dataSource: Request,
        sorting: {
            mode: "multiple"
        },
        columns: [
            {
                dataField: "#",
                width: 30
            }, {
                dataField: "Code",
                width: 170
            }, {
                dataField: "รหัสวัตถุดิบจากผู้จัดจำหน่าย",
                width: 190
            }, "Item",
            "Amount", "Unit"
            , {
                dataField: "Price/Unit"
            }, "Discount", {
                dataField: "VAT",
                sortOrder: "asc"
            }, "Total",
            "x"
        ]
    };

    
}
])

app.controller('PurchaseOrderController', ['$scope', function ($scope) {

    $scope.formOptionsOrder = {
        colCount: 2,
        formData: dataPurchase,
        groupTemplate: true,
        items: [{
            dataField: "คลัง",
            editorType: "dxSelectBox",
            editorOptions: {
                items: treasury,
                value: "",
                disabled: false

            }
        }, {
            dataField: "กลุ่มผู้จัดจำหน่าย",
            editorType: "dxSelectBox",
            editorOptions: {
                items: distributorsgroup,
                value: "",
                disabled: false

            }
        }, {
            dataField: "วันที่",
            editorType: "dxDateBox",
            editorOptions: {
                disabled: false
            }
        }, {
            dataField: "ผู้จัดจำหน่าย",
            editorType: "dxSelectBox",
            editorOptions: {
                items: distributors,
                displayExpr: "VendorName",
                valueExpr: "ID",
                searchEnabled: true,
                disabled: false
            }
        }, {
            dataField: "ประเภทการจ่ายเงิน",
            editorType: "dxSelectBox",
            editorOptions: {
                items: pay,
                value: "",
                disabled: false
            }
        }, {
            dataField: "จำนวนวัน",
            editorOptions: {
                disabled: false
            }
        }, {
            dataField: "เอกสารอ้างอิง",
            editorOptions: {
                disabled: false
            }
        }, {
            dataField: "หมายเหตุ",
            editorOptions: {
                disabled: false
            }
        }, {
            dataField: "วันที่ส่งสินค้า",
            editorType: "dxDateBox",
            editorOptions: {
                format: "datetime",
                value: null,
                disabled: false
            }
        }
        ]
    };

    //-----------------------------------------------------------------//

    $scope.gridOptionsOrder = {
        dataSource: Order,
        sorting: {
            mode: "multiple"
        },
        columns: [
            {
                dataField: "#",
                width: 30
            }, {
                dataField: "รหัสวัตถุดิบ",
                width: 170
            }, {
                dataField: "รายการ",
                width: 190
            }, "จำนวน",
            "หน่วย", "ราคา/หน่วย"
            , "ส่วนลด", {
                dataField: "VAT",
                sortOrder: "asc",
                width: 110
            }, {
                dataField: "รวม",
                width: 110
            }, {
                dataField: "x",
                width: 80
            }
        ]
    };


}
])

app.controller('ReceiveOrderController', ['$scope', function ($scope) {

    $scope.formOptionsReceiveOrder = {
        colCount: 2,
        formData: dataPurchase,
        groupTemplate: true,
        items: [{
            dataField: "คลัง",
            editorType: "dxSelectBox",
            editorOptions: {
                items: treasury,
                value: "",
                disabled: true

            }
        }, {
            dataField: "กลุ่มผู้จัดจำหน่าย",
            editorType: "dxSelectBox",
            editorOptions: {
                items: distributorsgroup,
                value: "",
                disabled: true

            }
        }, {
            dataField: "วันที่",
            editorType: "dxDateBox",
            editorOptions: {
                disabled: true
            }
        }, {
            dataField: "ผู้จัดจำหน่าย",
            editorType: "dxSelectBox",
            editorOptions: {
                items: distributors,
                displayExpr: "VendorName",
                valueExpr: "ID",
                searchEnabled: true,
                disabled: true
            }
        }, {
            dataField: "เอกสารอ้างอิง",
            editorOptions: {
                disabled: true
            }
        }, {
            dataField: "หมายเหตุ",
            editorOptions: {
                disabled: true
            }
        }
        ]
    };

    //-----------------------------------------------------------------//

    $scope.gridOptionsReceiveOrder = {
        dataSource: Order,
        sorting: {
            mode: "multiple"
        },
        columns: [
            {
                dataField: "#",
                width: 30
            }, {
                dataField: "รหัสวัตถุดิบ",
                width: 170
            }, {
                dataField: "รายการ",
                width: 190
            }, "จำนวน",
            "หน่วย", "ราคา/หน่วย"
            , "ส่วนลด", {
                dataField: "VAT",
                sortOrder: "asc",
                width: 110
            }, {
                dataField: "รวม",
                width: 110
            }, {
                dataField: "x",
                width: 80
            }
        ]
    };
}
])

app.controller('DirectOrderController', ['$scope', function ($scope) {

    $scope.formOptionsDirectOrder = {
        colCount: 2,
        formData: dataPurchase,
        groupTemplate: true,
        items: [{
            dataField: "คลัง",
            editorType: "dxSelectBox",
            editorOptions: {
                items: treasury,
                value: "",
                disabled: true

            }
        }, {
            dataField: "กลุ่มผู้จัดจำหน่าย",
            editorType: "dxSelectBox",
            editorOptions: {
                items: distributorsgroup,
                value: "",
                disabled: true

            }
        }, {
            dataField: "วันที่",
            editorType: "dxDateBox",
            editorOptions: {
                disabled: true
            }
        }, {
            dataField: "ผู้จัดจำหน่าย",
            editorType: "dxSelectBox",
            editorOptions: {
                items: distributors,
                displayExpr: "VendorName",
                valueExpr: "ID",
                searchEnabled: true,
                disabled: true
            }
        }, {
            dataField: "เอกสารอ้างอิง",
            editorOptions: {
                disabled: true
            }
        }, {
            dataField: "หมายเหตุ",
            editorOptions: {
                disabled: true
            }
        }
        ]
    };

    //-----------------------------------------------------------------//

    $scope.gridOptionsDirectOrder = {
        dataSource: Order,
        sorting: {
            mode: "multiple"
        },
        columns: [
            {
                dataField: "#",
                width: 30
            }, {
                dataField: "รหัสวัตถุดิบ",
                width: 170
            }, {
                dataField: "รายการ",
                width: 190
            }, "จำนวน",
            "หน่วย", "ราคา/หน่วย"
            , "ส่วนลด", {
                dataField: "VAT",
                sortOrder: "asc",
                width: 110
            }, {
                dataField: "รวม",
                width: 110
            }, {
                dataField: "x",
                width: 80
            }
        ]
    };
}
])

app.controller('TransferStockDocumentController', ['$scope', function ($scope) {

    $scope.formOptionsTransferStockDocument = {
        colCount: 2,
        formData: dataPurchase,
        groupTemplate: true,
        items: [{
            dataField: "คลัง",
            editorType: "dxSelectBox",
            editorOptions: {
                items: treasury,
                value: "",
                disabled: true

            }
        }, {
            dataField: "กลุ่มผู้จัดจำหน่าย",
            editorType: "dxSelectBox",
            editorOptions: {
                items: distributorsgroup,
                value: "",
                disabled: true

            }
        }, {
            dataField: "วันที่",
            editorType: "dxDateBox",
            editorOptions: {
                disabled: true
            }
        }, {
            dataField: "ผู้จัดจำหน่าย",
            editorType: "dxSelectBox",
            editorOptions: {
                items: distributors,
                displayExpr: "VendorName",
                valueExpr: "ID",
                searchEnabled: true,
                disabled: true
            }
        }, {
            dataField: "เอกสารอ้างอิง",
            editorOptions: {
                disabled: true
            }
        }, {
            dataField: "หมายเหตุ",
            editorOptions: {
                disabled: true
            }
        }
        ]
    };

    //-----------------------------------------------------------------//

    $scope.gridOptionsTransferStockDocument = {
        dataSource: TransferStockDocument,
        sorting: {
            mode: "multiple"
        },
        columns: [
            {
                dataField: "#",
                width: 30
            }, {
                dataField: "รหัสวัตถุดิบ",
                width: 200
            }, {
                dataField: "รายการ",
                width: 350
            }, "สต๊อก",
            "จำนวน", "หน่วย"
            , {
                dataField: "x",
                width: 80
            }
        ]
    };
}
])

app.controller('ReceiveStockDocumentController', ['$scope', function ($scope) {

    $scope.formOptionsReceiveStockDocument = {
        colCount: 2,
        formData: dataPurchase,
        groupTemplate: true,
        items: [{
            dataField: "คลัง",
            editorOptions: {
                disabled: true
            }
        }, {
            dataField: "หมายเลขอ้างอิง",
            editorOptions: {
                disabled: true
            }
        }, {
            dataField: "วันที่",
            editorType: "dxDateBox",
            editorOptions: {
                disabled: true
            }
        }, {
            dataField: "หมายเหตุ",
            editorOptions: {
                disabled: true
            }
        }
        ]
    };

    //-----------------------------------------------------------------//

    $scope.gridOptionsReceiveStockDocument = {
        dataSource: TransferStockDocument,
        sorting: {
            mode: "multiple"
        },
        columns: [
            {
                dataField: "#",
                width: 30
            }, {
                dataField: "รหัสวัตถุดิบ",
                width: 200
            }, {
                dataField: "รายการ",
                width: 500
            },
            "จำนวน", "หน่วย"
            , {
                dataField: "x",
                width: 80
            }
        ]
    };
}
])

app.controller('TransferStockCostController', ['$scope', function ($scope) {

    $scope.formOptionsTransferStockCost = {
        colCount: 2,
        formData: dataPurchase,
        groupTemplate: true,
        items: [{
            dataField: "คลัง",
            editorType: "dxSelectBox",
            editorOptions: {
                items: treasury,
                value: "",
                disabled: true

            }
        }, {
            dataField: "เอกสารอ้างอิง",
            editorOptions: {
                disabled: true
            }
        }, {
            dataField: "ถึงคลัง",
            editorType: "dxSelectBox",
            editorOptions: {
                items: distributorsgroup,
                value: "",
                disabled: true

            }
        }, {
            dataField: "วันที่ส่ง",
            editorType: "dxDateBox",
            editorOptions: {
                disabled: true
            }
        }, {
            dataField: "วันที่",
            editorType: "dxDateBox",
            editorOptions: {
                disabled: true
            }
        }, {
            dataField: "หมายเหตุ",
            editorOptions: {
                disabled: true
            }
        }
        ]
    };

    //-----------------------------------------------------------------//

    $scope.gridOptionsTransferStockCost = {
        dataSource: TransferStockCost,
        sorting: {
            mode: "multiple"
        },
        columns: [
            {
                dataField: "#",
                width: 30
            }, {
                dataField: "รหัสวัตถุดิบ",
                width: 150
            }, {
                dataField: "รายการ",
                width: 200
            }, "สต๊อก",
            "จำนวน",
            "หน่วย",
            "ราคา/หน่วย",
            "ส่วนลด", {
                dataField: "VAT",
                sortOrder: "asc",
                width: 110
            }, "รวม", {
                dataField: "x",
                width: 80
            }
        ]
    };
}
])

app.controller('ReceiveStockCostController', ['$scope', function ($scope) {

    $scope.formOptionsReceiveStockCost = {
        colCount: 2,
        formData: dataPurchase,
        groupTemplate: true,
        items: [{
            dataField: "จากคลัง",
            editorOptions: {
                disabled: true

            }
        }, {
            dataField: "หมายเลขอ้างอิง",
            editorOptions: {
                disabled: true
            }
        }, {
            dataField: "ถึงคลัง",
            editorOptions: {
                disabled: true

            }
        }, {
            dataField: "หมายเหตุ",
            editorOptions: {
                disabled: true
            }
        }, {
            dataField: "วันที่",
            editorType: "dxDateBox",
            editorOptions: {
                disabled: true
            }
        }
        ]
    };

    //-----------------------------------------------------------------//

    $scope.gridOptionsReceiveStockCost = {
        dataSource: ReceiveStockCost,
        sorting: {
            mode: "multiple"
        },
        columns: [
            {
                dataField: "#",
                width: 30
            }, {
                dataField: "รหัสวัตถุดิบ",
                width: 150
            }, {
                dataField: "รายการ",
                width: 200
            },
            "จำนวน",
            "หน่วย",
            "ราคา/หน่วย",
            "ส่วนลด", {
                dataField: "VAT",
                sortOrder: "asc",
                width: 110
            }, "รวม", {
                dataField: "x",
                width: 80
            }
        ]
    };
}
])

app.controller('BillOfSaleController', ['$scope', function ($scope) {

    $scope.formOptionsBillOfSale = {
        colCount: 2,
        formData: dataPurchase,
        groupTemplate: true,
        items: [{
            dataField: "คลัง",
            editorType: "dxSelectBox",
            editorOptions: {
                items: treasury,
                value: "",
                disabled: true

            }
        }, {
            dataField: "วันที่ส่ง",
            editorType: "dxDateBox",
            editorOptions: {
                disabled: true
            }
        }, {
            dataField: "ถึงคลัง",
            editorType: "dxSelectBox",
            editorOptions: {
                items: treasury,
                value: "",
                disabled: true

            }
        }, {
            dataField: "หมายเหตุ",
            editorOptions: {
                disabled: true
            }
        }, {
            dataField: "วันที่",
            editorType: "dxDateBox",
            editorOptions: {
                disabled: true
            }
        }
        ]
    };

    //-----------------------------------------------------------------//

    $scope.gridOptionsBillOfSale = {
        dataSource: BillOfSale,
        sorting: {
            mode: "multiple"
        },
        columns: [
            {
                dataField: "#",
                width: 30
            }, {
                dataField: "รหัสวัตถุดิบ",
                width: 250
            }, {
                dataField: "รายการ",
                width: 500
            },
            "จำนวน",
            "หน่วย", {
                dataField: "x",
                width: 80
            }
        ]
    };
}
])

app.controller('DocumentTemplateController', ['$scope', function ($scope) {

    $scope.formOptionsDocumentTemplate = {
        colCount: 2,
        formData: dataPurchase,
        groupTemplate: true,
        items: [{
            dataField: "ประเภทเอกสาร",
            editorType: "dxSelectBox",
            editorOptions: {
                items: treasury,
                value: "",
                disabled: false

            }
        }, {
            dataField: "รหัสเทมเพลท",
            editorOptions: {
                disabled: false
            }
        }, {
            dataField: "ชื่อเทมเพลท",
            editorOptions: {
                disabled: false
            }
        }, {
            dataField: "กลุ่มผู้จัดจำหน่าย",
            editorType: "dxSelectBox",
            editorOptions: {
                items: distributorsgroup,
                value: "",
                disabled: false

            }
        }, {
            dataField: "ผู้จัดจำหน่าย",
            editorType: "dxSelectBox",
            editorOptions: {
                items: distributors,
                displayExpr: "VendorName",
                valueExpr: "ID",
                searchEnabled: true,
                disabled: false
            }
        }, {
            dataField: "VAT",
            editorType: "dxSelectBox",
            editorOptions: {
                items: vat,
                value: "",
                disabled: false

            }
        }, {
            dataField: "วันที่เริ่มต้น",
            editorType: "dxDateBox",
            editorOptions: {
                disabled: false
            }
        }, {
            dataField: "วันที่สิ้นสุด",
            editorType: "dxDateBox",
            editorOptions: {
                disabled: false
            }
        }, {
            dataField: "หมายเหตุ",
            editorOptions: {
                disabled: false
            }
        },
        ]
    };

    //-----------------------------------------------------------------//

    $scope.gridOptionsDocumentTemplate = {
        dataSource: BillOfSale,
        sorting: {
            mode: "multiple"
        },
        columns: [
            {
                dataField: "#",
                width: 30
            }, {
                dataField: "รหัสวัตถุดิบ",
                width: 250
            }, {
                dataField: "รายการ",
                width: 500
            },
            "จำนวน",
            "หน่วย", {
                dataField: "x",
                width: 80
            }
        ]
    };
}
])