var $ = function () {
    return new start();
}

function start() {

    this.arr = [];
    this.getId = function (element) {  //获取ID
        this.arr.push(document.getElementById(element));
        return this;
    }

    this.getTagName = function (element) {   //获取class
        var ele = document.getElementsByTagName(element);
        for (var i = 0; i < ele.length; i++) {
            this.arr.push(ele[i]);
        }
        return this;
    }

    this.css = function (style, value) {
        for (var i = 0; i < this.arr.length; i++) {
            this.arr[i].style[style] = value;
        }
        return this;
    }

    this.eq = function (num) {

        //1、先把num =1 给一个变量
        //2、然后把数组清空
        //3、给数组下标第几个赋值

        var eles = this.arr[num];
        this.arr = [];
        this.arr[0] = eles;
        return this;

    }

    this.first = function () { //选取第一个元素
        var eles = this.arr[0];
        this.arr = [];
        this.arr[0] = eles;
        return this;
    }

    this.last = function () { //选取最后一个元素
        var eles = this.arr[this.arr.length - 1];
        this.arr = [];
        this.arr[0] = eles;
        return this;
    }


    this.click = function (fn) {   //单击事件
        this.arr[0].onclick = fn;
        return this;
    }

    this.show = function () {  //元素显示
        this.arr[0].style.display = "block";
        return this;
    }

    this.hide = function () {  //元素隐藏

        this.arr[0].style.display = "none";
        return this;
    }

    this.hover = function (over, out) {
        this.arr[0].onmouseover = over;
        this.arr[0].onmouseout = out;
        return this;
    }

    this.slideDown = function (style, speed) {
        m = 0;
        for (var i = 0; i < this.arr.length; i++) {
            var elements = this.arr[i];
            setInterval(function () {
                if (m < style) {
                    elements.style.display = 'block';
                    elements.style.width = ++m + "px";
                    elements.style.height = ++m + "px";
                }
            }, speed);
        }
        return this;
    }

    this.slideUp = function () {  //模块递减

    }

    this.content = function (left, top) {
        for (var i = 0; i < this.arr.length; i++) {
            this.arr[i].style.left = (document.documentElement.clientWidth - left) / 2 + "px";
            this.arr[i].style.top = (document.documentElement.clientHeight - top) / 2 + "px";
            this.arr[i].style.display = "block";
        }
        return this;
    }
}
