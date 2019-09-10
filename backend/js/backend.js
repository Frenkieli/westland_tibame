(function () {
    // my special code
    document.getElementById('administrator').addEventListener('click', administrator, false);
    document.getElementById('product').addEventListener('click', product, false);
    document.getElementById('member').addEventListener('click', member, false);
    document.getElementById('order').addEventListener('click', order, false);
    document.getElementById('ticket_order').addEventListener('click', ticket_order, false);
    document.getElementById('activity').addEventListener('click', activity, false);
    document.getElementById('message_board').addEventListener('click', message_board, false);
    document.getElementById('robot_text').addEventListener('click', robot_text, false);
    document.getElementById('mission').addEventListener('click', mission, false);
    document.getElementById('ticket').addEventListener('click', ticket, false);
    document.getElementById('amusement_equipments').addEventListener('click', amusement_equipments, false);
    document.getElementById('question_no').addEventListener('click', question_no, false);
    document.getElementById('accomplish_fraction').addEventListener('click', accomplish_fraction, false);
    document.getElementById('ticket_customized').addEventListener('click', ticket_customized, false);
    document.getElementById('reset').addEventListener('click', reset, false);
    let tableTh = document.getElementById('table_th');
    let tableTd = document.getElementById('table_td');
    let tableTitle = document.getElementById('table_title');
    let tdBulid = {
        tdp() {
            let intd = document.createElement('p');
            return intd;
        },
        tdButton() {
            let intd = document.createElement('input');
            intd.type = 'button';
            return intd;
        },
        tdText() {
            let intd = document.createElement('input');
            intd.type = 'text';
            return intd;
        }, tdLongText() {
            let intd = document.createElement('input');
            intd.type = 'text';
            intd.width = "500px";
            return intd;
        }
    };
    let fakeDate = '';
    let dataType = '';
    let buttonValue = '';
    let updata;

    function clearTable(e) {
        tableTh.innerHTML = '';
        tableTd.innerHTML = '';
    }
    function administrator(e) {
        tableTitle.innerText = this.innerText;
        clearTable();
        console.log(1);
        fakeDate = [
            // [0000000001, "小明", 'sadfasfd6', 1],
            // [0000000002, "小彭", 'sasfd6', 1],
            // [0000000003, "小南", 'sfasfd6', 1],
            // [0000000004, "小立", 'sasdfasfd6', 0],
            // [0000000005, "小於", 'sfasfd6', 1]
        ];
        dataType = [1, 3, 3, 2];
        buttonValue = ['停權', '正常'];
        updata = 1;
        let tableHeader = document.createElement('tr');
        tableHeader.innerHTML = "<th>管理者編號</th><th>管理者名稱</th><th>密碼</th><th>帳號狀態</th><th>修改</th><th>刪除</th>";
        tableTh.appendChild(tableHeader);
        makeTable();
    }
    function product(e) {
        tableTitle.innerText = this.innerText;
        clearTable();
        console.log(2);
        getProduct();
        function getProduct() {
            let xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr.status == 200) {
                    showProduct(xhr.responseText);
                }
                else {
                    alert(xhr.status);
                }
            }
            let url = "../php/getProduct_JSON.php";
            xhr.open('get', url, true);
            xhr.send(null);
        }
        function showProduct(jsonStr) {
            let products = JSON.parse(jsonStr);
            fakeDate = new Array(products.length);
            for (let i = 0; i < products.length; i++) {
                fakeDate[i] = new Array(products[i].product_no, products[i].product_name, products[i].product_image, products[i].product_status, products[i].product_price, products[i].product_ifo, products[i].product_style, products[i].product_sort, products[i].product_category, products[i].product_count);
            }
            dataType = [1, 3, 3, 2, 3, 4, 3, 3, 3, 3];
            buttonValue = ['下架', '上架'];
            updata = 1;
            let tableHeader = document.createElement('tr');
            tableHeader.innerHTML = "<th>商品編號</th><th>商品名稱</th><th>商品照片</th><th>商品上下架</th><th>價格</th><th>簡介</th><th>商品樣式</th><th>種類</th><th>類別</th><th>數量</th><th>修改</th><th>刪除</th>";
            tableTh.appendChild(tableHeader);
            makeTable();

        };
        //    fakeDate=[ [1, "紅色仙人掌包包", 'images/products/product_list/pd_b_01.png', 1, '500', '紅色仙人掌包包', '紅色', '仙人掌', '包包', '20'],
        //     [0000000002, "商品B", 'images/backend/2.png', 0, '1200', '黑色', '吉祥物', '簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介'],
        //     [0000000003, "商品C", 'images/backend/3.png', 1, '1200', '黑色', '吉祥物', '簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介'],
        //     [0000000004, "商品D", 'images/backend/4.png', 0, '1200', '黑色', '吉祥物', '簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介'],
        //     [0000000005, "商品F", 'images/backend/5.png', 1, '1200', '黑色', '吉祥物', '簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介']];

        // console.log(fakeDate[0]);
        // dataType = [1, 3, 3, 2, 3, 4, 3, 3, 3, 3];
        // buttonValue = ['下架', '上架'];
        // updata = 1;
        // let tableHeader = document.createElement('tr');
        // tableHeader.innerHTML = "<th>商品編號</th><th>商品名稱</th><th>商品照片</th><th>商品上下架</th><th>價格</th><th>簡介</th><th>商品樣式</th><th>種類</th><th>類別</th><th>數量</th><th>修改</th><th>刪除</th>";
        // tableTh.appendChild(tableHeader);
        // makeTable();
    }
    function member(e) {
        tableTitle.innerText = this.innerText;
        clearTable();
        console.log(2);

        fakeDate = [
            // [0000000001, "sasdfasfklklv", '小王', 'ashdjkahdjk@gmail.com', 0985453515, '1999-01-01', 95213246, '00000000001',1],
            // [0000000002, "vuemlsf", '小中', 'ashdjkahdjk@gmail.com', 0985453515, '1999-01-01', 95213246, '00000000002',0],
            // [0000000003, "iviosdf", '小上', 'ashdjkahdjk@gmail.com', 0985453515, '1999-01-01', 95213246, '00000000003',1],
            // [0000000004, "ivobdf894", '小下', 'ashdjkahdjk@gmail.com', 0985453515, '1999-01-01', 95213246, '00000000004',0],
            // [0000000005, "afqklb8", '小又', 'ashdjkahdjk@gmail.com', 0985453515, '1999-01-01', 95213246, '00000000005',1]
        ];
        dataType = [1, 1, 1, 1, 1, 1, 1, 1, 2];
        buttonValue = ['停權', '正常'];
        updata = 0;
        let tableHeader = document.createElement('tr');
        tableHeader.innerHTML = "<th>會員編號</th><th>會員帳號</th><th>會員姓名</th><th>E-mail</th><th>電話</th><th>生日</th><th>購物金</th><th>正在使用的票號</th><th>會員狀態</th>";
        tableTh.appendChild(tableHeader);
        makeTable();
    }
    function makeTable(e) {
        let inTr;
        fakeDate.forEach((value) => {
            console.log(111);
            inTr = document.createElement('tr');
            for (i = 0; i < value.length; i++) {
                let num = dataType[i];
                let inTd = document.createElement('td');
                if (i == 0) {
                    inTr.id = value[0];
                }
                switch (num) {
                    case 1:
                        inDate = tdBulid.tdp();
                        inDate.innerText = value[i];
                        break;
                    case 2:
                        inDate = tdBulid.tdButton();
                        if (value[i]) {
                            inDate.value = buttonValue[1];
                        } else {
                            inDate.value = buttonValue[0];
                        }
                        break;
                    case 3:
                        inDate = tdBulid.tdText();
                        inDate.value = value[i];
                        break;
                    case 4:
                        inDate = tdBulid.tdLongText();
                        inDate.value = value[i];
                        break;
                    default:
                        break;
                }
                inTd.appendChild(inDate);
                inTr.appendChild(inTd);
            }
            if (updata) {
                let lastTd = document.createElement('td');
                let lastDate = document.createElement('input');
                lastDate.type = 'button';
                lastDate.value = "修改";
                lastTd.appendChild(lastDate);
                inTr.appendChild(lastTd);
                lastTd = document.createElement('td');
                lastDate = document.createElement('input');
                lastDate.type = 'button';
                lastDate.value = "刪除";
                lastTd.appendChild(lastDate);
                inTr.appendChild(lastTd);
            }
            tableTd.appendChild(inTr);
        });
    }
    administrator();
    tableTitle.innerText = '管理員管理';
}());