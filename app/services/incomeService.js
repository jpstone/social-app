"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
// Import RxJs required methods
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var IncomeService = (function () {
    function IncomeService(http) {
        this.http = http;
        this.incomeDataURI = "http://localhost:9999/income";
        this.incomeData = [];
        this.allIncomeData = [];
        this.catSortedData = [];
        this.catData = [
            {
                "id": 0,
                "name": "Ganpati",
                "catAmt": 0,
                "catObjData": []
            },
            {
                "id": 1,
                "name": "Swami",
                "catAmt": 0,
                "catObjData": []
            },
            {
                "id": 2,
                "name": "Mhasoba Karndak",
                "catAmt": 0,
                "catObjData": []
            },
            {
                "id": 3,
                "name": "Others",
                "catAmt": 0,
                "catObjData": []
            },
            {
                "id": 4,
                "name": "Rent",
                "catAmt": 0,
                "catObjData": []
            }
        ];
        this.isIncomeData = false;
        //this.getCategoriesData();
        //  this.getIncomeData();
        // console.log(this.getData());
        ///let sdata = JSON.stringify(data);
        //console.log("data:" + sdata ); 
    }
    IncomeService.prototype.setIncomeData = function () {
        return this.http.get(this.incomeDataURI)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    IncomeService.prototype.getIncomeData = function () {
        var _this = this;
        return this.setIncomeData().map(function (data) {
            _this.incomeData = data;
            return _this.incomeData;
        }).catch(function (error) {
            console.log('error ' + error);
            throw error;
        });
    };
    // predefined props
    //public totalIncome: number = 0;
    /*

    //incomeData MAIN FUNCTION WHO WILL GET FIRST DATA FOR US AND THIS DATA WILL LEAD US FOR OTHER FILTER FUNCTION
   /* private incomeData:IincomeData[] =  [
           {
               "receiptPersonMobile": "9850086868",
               "receiptPersonEmail": "bhareker.sanjay@gmail.com",
               "receiptPersonAddress": "House no. 638, Dattwadi ",
               "receiptType": "cash",
               "receivedDate": "15/08/2016",
               "receviedBy": "Vivek Bhosle",
               "receiptAmt": 5001,
               "receiptDescription": "Ganpati 2015-2016",
               "receiptName": "Sanjay Bharekar",
               "receiptSubCategory": "MemberFund",
               "receiptMainCategory": "Ganpati",
               "receiptid": 1000,
               "id": 1
           },
           {
               "receiptPersonMobile": "9850086868",
               "receiptPersonEmail": "bhareker.sanjay@gmail.com",
               "receiptPersonAddress": "House no. 638, Dattwadi ",
               "receiptType": "cash",
               "receivedDate": "15/08/2016",
               "receviedBy": "Vivek Bhosle",
               "receiptAmt": 5001,
               "receiptDescription": "Ganpati 2015-2016",
               "receiptName": "Om Bharekar",
               "receiptSubCategory": "MemberFund",
               "receiptMainCategory": "Ganpati",
               "receiptid": 1001,
               "id": 2
           },
           {
               "receiptPersonMobile": "9850086868",
               "receiptPersonEmail": "bhareker.sanjay@gmail.com",
               "receiptPersonAddress": "House no. 638, Dattwadi ",
               "receiptType": "cash",
               "receivedDate": "15/08/2016",
               "receviedBy": "Sanjay Chorghe",
               "receiptAmt": 5001,
               "receiptDescription": "Swami 2015-2016",
               "receiptName": "Om Bharekar",
               "receiptSubCategory": "DevoteesFund",
               "receiptMainCategory": "Swami",
               "receiptid": 4545,
               "id": 3
           },
           {
               "receiptPersonMobile": "9850086868",
               "receiptPersonEmail": "bhareker.sanjay@gmail.com",
               "receiptPersonAddress": "House no. 638, Dattwadi ",
               "receiptType": "cash",
               "receivedDate": "15/08/2016",
               "receviedBy": "Vivek Bhosle",
               "receiptAmt": 5001,
               "receiptDescription": "Swami 2015-2016",
               "receiptName": "Sanjay Bharekar",
               "receiptSubCategory": "MemberFund",
               "receiptMainCategory": "Swami",
               "receiptid": 4546,
               "id": 4
           },
           {
               "receiptPersonMobile": "",
               "receiptPersonEmail": "bhareker.ssumit@gmail.com",
               "receiptPersonAddress": "House no. 138, Dattwadi ",
               "receiptType": "cash",
               "receivedDate": "15/08/2016",
               "receviedBy": "Vivek Bhosle",
               "receiptAmt": 5001,
               "receiptDescription": "Ganpati 2015-2016",
               "receiptName": "Sumit Bharekar",
               "receiptSubCategory": "DevoteesFund",
               "receiptMainCategory": "Ganpati",
               "receiptid": 1006,
               "id": 5
           },
           {
               "receiptPersonMobile": "",
               "receiptPersonEmail": "",
               "receiptPersonAddress": "Rashalekha Soc., Dattwadi ",
               "receiptType": "cash",
               "receivedDate": "15/08/2016",
               "receviedBy": "Vivek Bhosle",
               "receiptAmt": 501,
               "receiptDescription": "Ganpati 2015-2016",
               "receiptName": "Shailendra Joshi",
               "receiptSubCategory": "DevoteesFund",
               "receiptMainCategory": "Ganpati",
               "receiptid": 1100,
               "id": 6
           },
           {
               "receiptPersonMobile": "",
               "receiptPersonEmail": "chorghe.sanjay@gmail.com",
               "receiptPersonAddress": "House no. 738, Dattwadi ",
               "receiptType": "cash",
               "receivedDate": "15/08/2016",
               "receviedBy": "Nilesh Mandekar",
               "receiptAmt": 5001,
               "receiptDescription": "Swami 2015-2016",
               "receiptName": "Sanjay Choraghe",
               "receiptSubCategory": "MemberFund",
               "receiptMainCategory": "Swami",
               "receiptid": 4400,
               "id": 7
           },
           {
               "receiptPersonMobile": "9850086868",
               "receiptPersonEmail": "bhareker.sanjay@gmail.com",
               "receiptPersonAddress": "House no. 638, Dattwadi ",
               "receiptType": "cash",
               "receivedDate": "15/08/2016",
               "receviedBy": "Vivek Bhosle",
               "receiptAmt": 5001,
               "receiptDescription": "Rent of Hatgadi June 2016",
               "receiptName": " Shiv Bhaiya ",
               "receiptSubCategory": "",
               "receiptMainCategory": "Rent",
               "receiptid": 1045,
               "id": 8
           },
           {
               "receiptPersonMobile": "9850086868",
               "receiptPersonEmail": "bhareker.sanjay@gmail.com",
               "receiptPersonAddress": "Mhasoba Chouk, Dattwadi ",
               "receiptType": "cash",
               "receivedDate": "15/08/2016",
               "receviedBy": "Sanjay Chorghe",
               "receiptAmt": 5001,
               "receiptDescription": "Rent of Panipuri June 2016",
               "receiptName": "Shiv Bhaiya",
               "receiptSubCategory": "",
               "receiptMainCategory": "Rent",
               "receiptid": 1145,
               "id": 9
           },
           {
               "receiptPersonMobile": "",
               "receiptPersonEmail": "",
               "receiptPersonAddress": "Dattwadi ",
               "receiptType": "cash",
               "receivedDate": "15/08/2016",
               "receviedBy": "Sanjay Choraghe",
               "receiptAmt": 3001,
               "receiptDescription": "Swami 2015-2016",
               "receiptName": "Nilesh Mandekar",
               "receiptSubCategory": "MemberFund",
               "receiptMainCategory": "Swami",
               "receiptid": 4646,
               "id": 10
           },
           {
               "receiptPersonMobile": "",
               "receiptPersonEmail": "",
               "receiptPersonAddress": "Kothrud ",
               "receiptType": "cash",
               "receivedDate": "15/08/2016",
               "receviedBy": "Sunny Burate",
               "receiptAmt": 101,
               "receiptDescription": "Adminssion Fee 2015",
               "receiptName": "ACC Cirket Club",
               "receiptSubCategory": "Admission Fee",
               "receiptMainCategory": "Mhasoba Karndak",
               "receiptid": 1106,
               "id": 11
           },
           {
               "receiptPersonMobile": "",
               "receiptPersonEmail": "",
               "receiptPersonAddress": "Janwadi ",
               "receiptType": "cash",
               "receivedDate": "15/08/2016",
               "receviedBy": "Sunny Burate",
               "receiptAmt": 701,
               "receiptDescription": "Adminssion Fee 2015",
               "receiptName": "ACC Cirket Club",
               "receiptSubCategory": "Admission Fee",
               "receiptMainCategory": "Mhasoba Karndak",
               "receiptid": 1158,
               "id": 12
           },
           {
               "receiptPersonMobile": "",
               "receiptPersonEmail": "",
               "receiptPersonAddress": "Rashalekha Soc., Dattwadi ",
               "receiptType": "cash",
               "receivedDate": "15/08/2016",
               "receviedBy": "Vivek Bhosle",
               "receiptAmt": 101,
               "receiptDescription": "Ganpati 2015-2016",
               "receiptName": "Suhas Joshi",
               "receiptSubCategory": "DevoteesFund",
               "receiptMainCategory": "Ganpati",
               "receiptid": 1122,
               "id": 13
           },
           {
               "receiptPersonMobile": "",
               "receiptPersonEmail": "",
               "receiptPersonAddress": "Karve nagar ",
               "receiptType": "cash",
               "receivedDate": "15/08/2016",
               "receviedBy": "Sunny Burate",
               "receiptAmt": 101,
               "receiptDescription": "Adminssion Fee 2015",
               "receiptName": "ACC Cirket Club",
               "receiptSubCategory": "Admission Fee",
               "receiptMainCategory": "Mhasoba Karndak",
               "receiptid": 4343,
               "id": 14
           },
           {
               "receiptPersonMobile": "9850086868",
               "receiptPersonEmail": "bhareker.sanjay@gmail.com",
               "receiptPersonAddress": "Mhasoba Chouk, Dattwadi ",
               "receiptType": "cash",
               "receivedDate": "15/08/2016",
               "receviedBy": "Sanjay Chorghe",
               "receiptAmt": 4001,
               "receiptDescription": "Rent of vada pav June 2016",
               "receiptName": "Hari Bhaiya",
               "receiptSubCategory": "",
               "receiptMainCategory": "Rent",
               "receiptid": 4541,
               "id": 15
           },
           {
               "receiptPersonMobile": "",
               "receiptPersonEmail": "Menana.nilesh@gmail.com",
               "receiptPersonAddress": "Dattwadi ",
               "receiptType": "cash",
               "receivedDate": "15/08/2016",
               "receviedBy": "Sanjay Choraghe",
               "receiptAmt": 6001,
               "receiptDescription": "Other 2015-2016",
               "receiptName": "Nilesh Menana",
               "receiptSubCategory": "",
               "receiptMainCategory": "Other",
               "receiptid": 4346,
               "id": 16
           },
           {
               "receiptPersonMobile": "",
               "receiptPersonEmail": "padawal.mandar@gmail.com",
               "receiptPersonAddress": "Dattwadi ",
               "receiptType": "check",
               "receivedDate": "15/08/2016",
               "receviedBy": "Sanjay Choraghe",
               "receiptAmt": 8001,
               "receiptDescription": "Swami 2015-2016",
               "receiptName": "Mandar Padawal",
               "receiptSubCategory": "MemberFund",
               "receiptMainCategory": "Swami",
               "receiptid": 4626,
               "id": 17
           },
           {
               "receiptPersonMobile": "",
               "receiptPersonEmail": "",
               "receiptPersonAddress": "Dattwadi ",
               "receiptType": "cash",
               "receivedDate": "15/08/2016",
               "receviedBy": "Vivek Bhosle",
               "receiptAmt": 601,
               "receiptDescription": "Ganpati 2015-2016",
               "receiptName": "Suhas marne",
               "receiptSubCategory": "DevoteesFund",
               "receiptMainCategory": "Ganpati",
               "receiptid": 4500,
               "id": 18
           },
           {
               "receiptPersonMobile": "",
               "receiptPersonEmail": "badhe.kishor@gmail.com",
               "receiptPersonAddress": "Mhasoba Chouk,Dattwadi ",
               "receiptType": "check",
               "receivedDate": "15/08/2016",
               "receviedBy": "Vivek Bhosle",
               "receiptAmt": 9000,
               "receiptDescription": "Ganpati 2015-2016",
               "receiptName": "Kishor Badhe",
               "receiptSubCategory": "MemberFund",
               "receiptMainCategory": "Ganpati",
               "receiptid": 1112,
               "id": 19
           },
           {
               "receiptPersonMobile": "",
               "receiptPersonEmail": "randhir.sameer@gmail.com",
               "receiptPersonAddress": "House no.613, Dattwadi ",
               "receiptType": "cash",
               "receivedDate": "15/08/2016",
               "receviedBy": "Vivek Bhosle",
               "receiptAmt": 401,
               "receiptDescription": "Ganpati 2015-2016",
               "receiptName": "Sameer Randhir",
               "receiptSubCategory": "DevoteesFund",
               "receiptMainCategory": "Ganpati",
               "receiptid": 4670,
               "id": 20
           },
           {
               "receiptPersonMobile": "",
               "receiptPersonEmail": "chavan.sandip@gmail.com",
               "receiptPersonAddress": "Mhasoba Chouk, Dattwadi ",
               "receiptType": "check",
               "receivedDate": "15/08/2016",
               "receviedBy": "Sanjay Choraghe",
               "receiptAmt": 3500,
               "receiptDescription": "Other 2015-2016",
               "receiptName": "Sandip Chavan",
               "receiptSubCategory": "",
               "receiptMainCategory": "Other",
               "receiptid": 3046,
               "id": 21
           },
           {
               "receiptPersonMobile": "",
               "receiptPersonEmail": "",
               "receiptPersonAddress": "Mhasoba Chouk, Dattwadi ",
               "receiptType": "cash",
               "receivedDate": "15/08/2016",
               "receviedBy": "Sanjay Chorghe",
               "receiptAmt": 7000,
               "receiptDescription": "Rent of pav bhaji June 2016",
               "receiptName": "Shivani Pav bhaji",
               "receiptSubCategory": "",
               "receiptMainCategory": "Rent",
               "receiptid": 4341,
               "id": 22
           },
           {
               "receiptPersonMobile": "",
               "receiptPersonEmail": "",
               "receiptPersonAddress": "Deccan ",
               "receiptType": "cash",
               "receivedDate": "15/08/2016",
               "receviedBy": "Sunny Burate",
               "receiptAmt": 101,
               "receiptDescription": "Adminssion Fee 2015",
               "receiptName": "ACC Cirket Club",
               "receiptSubCategory": "Admission Fee",
               "receiptMainCategory": "Mhasoba Karndak",
               "receiptid": 4240,
               "id": 23
           },
           {
               "receiptPersonMobile": "",
               "receiptPersonEmail": "khan.jamir@gmail.com",
               "receiptPersonAddress": "House no.772, Dattwadi ",
               "receiptType": "check",
               "receivedDate": "15/08/2016",
               "receviedBy": "Sanjay Choraghe",
               "receiptAmt": 6500,
               "receiptDescription": "Other 2015-2016",
               "receiptName": "Jamir Khan",
               "receiptSubCategory": "",
               "receiptMainCategory": "Other",
               "receiptid": 3246,
               "id": 24
           },
           {
               "receiptPersonMobile": "",
               "receiptPersonEmail": "fhale.nitin@gmail.com",
               "receiptPersonAddress": "House no.913, Dattwadi ",
               "receiptType": "check",
               "receivedDate": "15/08/2016",
               "receviedBy": "Vivek Bhosle",
               "receiptAmt": 9500,
               "receiptDescription": "Ganpati 2015-2016",
               "receiptName": "Nitin Fhale",
               "receiptSubCategory": "MemberFund",
               "receiptMainCategory": "Ganpati",
               "receiptid": 4628,
               "id": 25
           },
           {
               "receiptPersonMobile": "",
               "receiptPersonEmail": "",
               "receiptPersonAddress": "",
               "receiptType": "cash",
               "receivedDate": "15/08/2016",
               "receviedBy": "Vivek Bhosle",
               "receiptAmt": 3000,
               "receiptDescription": "Rent of flower June 2016",
               "receiptName": " Gaikwad shop ",
               "receiptSubCategory": "",
               "receiptMainCategory": "Rent",
               "receiptid": 2045,
               "id": 26
           },
           {
               "receiptPersonMobile": "",
               "receiptPersonEmail": "yadav.uday@gmail.com",
               "receiptPersonAddress": "Rashalekha Soc., Dattwadi ",
               "receiptType": "cash",
               "receivedDate": "15/08/2016",
               "receviedBy": "Sanjay Choraghe",
               "receiptAmt": 200,
               "receiptDescription": "Ganpati 2015-2016",
               "receiptName": "Uday Yadav",
               "receiptSubCategory": "DevoteesFund",
               "receiptMainCategory": "Ganpati",
               "receiptid": 4190,
               "id": 27
           },
           {
               "receiptPersonMobile": "",
               "receiptPersonEmail": "mapare.bhushan@gmail.com",
               "receiptPersonAddress": "House no.643, Dattwadi ",
               "receiptType": "cash",
               "receivedDate": "15/08/2016",
               "receviedBy": "Sanjay Choraghe",
               "receiptAmt": 8000,
               "receiptDescription": "Swami 2015-2016",
               "receiptName": "Bhushan Mapare",
               "receiptSubCategory": "MemberFund",
               "receiptMainCategory": "Swami",
               "receiptid": 4136,
               "id": 28
           },
           {
               "receiptPersonMobile": "",
               "receiptPersonEmail": "",
               "receiptPersonAddress": "",
               "receiptType": "cash",
               "receivedDate": "15/08/2016",
               "receviedBy": "Vivek Bhosle",
               "receiptAmt": 1000,
               "receiptDescription": "Rent of rangoli June 2016",
               "receiptName": " kale shop ",
               "receiptSubCategory": "",
               "receiptMainCategory": "Rent",
               "receiptid": 2515,
               "id": 29
           },
           {
               "receiptPersonMobile": "",
               "receiptPersonEmail": "",
               "receiptPersonAddress": "",
               "receiptType": "cash",
               "receivedDate": "15/08/2016",
               "receviedBy": "Vivek Bhosle",
               "receiptAmt": 3000,
               "receiptDescription": "Rent of pantis June 2016",
               "receiptName": " kale shop ",
               "receiptSubCategory": "",
               "receiptMainCategory": "Rent",
               "receiptid": 2575,
               "id": 30
           }
    ];*/
    // THIS IS  CONST CATEGORIES  data SHOULD NOT OVERRIDE WE CAN ADD HERE BUT SHOULD NOT MODIFY
    // private INCOME_CATEGORIES:Array<string> = ["Ganpati","Swami","Mhasoba Karndak","Other","Rent"]; 
    // public initGetTotalIncome = this.getTotalIncome();
    // cat wise sorted data will go here
    IncomeService.prototype.setCatData = function () {
        var _this = this;
        return this.getIncomeData().map(function (res) {
            //this.catData.push(res);
            console.log(res, "from setcatdata");
            for (var i = 0; i < _this.catData.length; ++i) {
                for (var j = 0; j < _this.incomeData.length; ++j) {
                    if (_this.catData[i].name == _this.incomeData[j].receiptMainCategory) {
                        _this.catData[i].catAmt += parseInt(_this.incomeData[j].receiptAmt);
                        _this.catData[i].catObjData.push(_this.incomeData[j]);
                    }
                }
                _this.catSortedData = _this.catData;
            }
            return _this.catSortedData;
            //console.log("from get cat data", that.catData);
        });
    };
    return IncomeService;
}());
IncomeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], IncomeService);
exports.IncomeService = IncomeService;
//# sourceMappingURL=incomeService.js.map