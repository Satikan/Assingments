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

    $scope.formOptions = {
        colCount: 2,
        formData: dataPurchase,
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
                searchEnabled: true
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
                value: null
            }
        }
        ]
    };

    setTimeout(function () {
        $("#form").dxForm("instance").validate();
    }, 200);

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


