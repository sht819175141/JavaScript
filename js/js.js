function $(arg) {
    return new MyQuery(arg)
}

//
function addListener(obj, fn, type) {
    if (obj.addEventListener) {
        obj.addEventListener(type, function (e) {
            fn.call(obj)
            e.stopPropagation()
            e.preventDefault()
        }, false)
    } else if (obj.attachEvent) {
        obj.attachEvent('on' + type, function (e) {
            if (fn.call(obj) == false) {
                var e = event;
                e.cancelBubble = true
                return false
            }
        })
    } else {
        obj['on' + type] = fn
    }
    return this
}

function getClassName(obj, className) {
    if (obj.getElementsByClassName) {
        return obj.getElementsByClassName(className)
    } else {
        var arr = [];
        var elems = obj.getElementsByTagName('*');
        var reg = new RegExp("\\b" + className + "\\b");
        for (var i = 0; elems[i]; i++) {

            if (reg.test(elems[i].className)) {

                arr.push(elems[i])
            }
        }
        return arr
    }
}

function MyQuery(arg) {
    this.elem = [];
    switch (typeof arg) {
        case 'function':
            addListener(window, arg, 'load');
            break;
        case 'string':
            switch (arg.charAt(0)) {
                case '#':
                    this.elem.push(document.getElementById(arg.substring(1)));
                    break;
                case '.':
                    this.elem = getClassName(document, arg.substring(1));
                    break;
                default:
                    this.elem = document.getElementsByTagName(arg);
                    break;
            }
            break;
        case 'object':
            this.elem.push(arg);
            break;
    }
}

MyQuery.prototype.eq = function (n) {
    return $(this.elem[n])
}
//获取所点击项的内容
MyQuery.prototype.html = function () {
    for (var i = 0; this.elem[i]; i++) {
        return this.elem[i].innerHTML
    }
}
//点击添加函数，帮定事件
MyQuery.prototype.click = function (fn) {
    for (var i = 0; this.elem[i]; i++) {
        addListener(this.elem[i], fn, 'click')
    }
    return this
}
//隐藏
MyQuery.prototype.hide = function () {
    for (var i = 0; this.elem[i]; i++) {
        this.elem[i].style.display = 'none'
    }
    return this
}
//显示
MyQuery.prototype.show = function () {
    for (var i = 0; this.elem[i]; i++) {
        this.elem[i].style.display = 'block'
    }
    return this
}
//设置属性或者样式，style
MyQuery.prototype.css = function (attr, value) {
    if (arguments.length == 2) {
        for (var i = 0; this.elem[i]; i++) {
            this.elem[i].style[attr] = value;
        }
    } else {
        if (typeof attr == 'string') {
            for (var i = 0; this.elem[i]; i++) {
                return this.getStyle(this.elem[i], attr)
            }
        } else {
            for (var j = 0; this.elem[j]; j++) {
                for (var i in attr) {
                    this.elem[j].style[i] = attr[i];
                }
            }

        }
    }
    return this
}
//解决样式兼容物体
MyQuery.prototype.getStyle = function (obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr]
    } else {
        return getComputedStyle(obj, null)[attr]
    }
}
设置属性或者样式：如className
MyQuery.prototype.attr = function (attr, value) {
    if (arguments.length == 2) {
        for (var i = 0; this.elem[i]; i++) {
            this.elem[i][attr] = value;
        }
    } else {
        for (var i = 0; this.elem[i]; i++) {
            return this.elem[i][attr]
        }
    }
}
//查找
MyQuery.prototype.find = function (str) {
    var arr = [];
    for (var i = 0; this.elem[i]; i++) {
        switch (str.charAt(0)) {
            case ".":
                arr = arr.concat(getClassName(this.elem[i]), str.substring(1));
                break;
            default:
                var es = this.elem[i].getElementsByTagName(str);
                for (var i = 0; es[i]; i++) {
                    arr.push(es[i])
                }
        }
    }
    var newQuery = $();
    newQuery.elem = arr;
    return newQuery;
}
//获取下标
MyQuery.prototype.index = function (obj) {
    return this.getIndex(this.elem[0]);
}
//返回下标
MyQuery.prototype.getIndex = function (obj) {
    var oBrothers = obj.parentNode.children;
    for (var i = 0; i < oBrothers.length; i++) {
        if (oBrothers[i] == obj) {
            return i;
        }
    }
}

MyQuery.prototype.extend = function (name, fn) {
    MyQuery.prototype[name] = fn;
}
//鼠标滑过，内含两个函数
MyQuery.prototype.hover = function (fn1, fn2) {
    for (var i = 0; this.elem[i]; i++) {
        this.elem[i].onmouseover = fn1;
        this.elem[i].onmouseout = fn2
    }
    return this
}
//判断是否含有className,有就删除，没有就添加
MyQuery.prototype.toggle = function (className) {
    if (this.hasClassName(className)) {
        this.removeClassName(className)
    } else {
        this.addClassName(className)
    }
    return this
}
MyQuery.prototype.removeClassName = function (className) {
    var reg = new RegExp('\\b' + className + '\\b')
    if (this.hasClassName(className)) {
        this.elem[0].className = this.elem[0].className.replace(new RegExp('(^|\\s+)' + className + '($|\\s+)'), '')
    }
    return this
}
MyQuery.prototype.hasClassName = function (className) {
    var reg = new RegExp('\\b' + className + '\\b');
    if (reg.test(this.elem[0].className)) {
        return true
    } else {
        return false
    }

}
MyQuery.prototype.addClassName = function (className) {
    var reg = new RegExp('\\b' + className + '\\b')
    if (!this.hasClassName(className)) {
        this.elem[0].className = this.elem[0].className + ' ' + className
    }
    return this
}
//删除子节点
MyQuery.prototype.remove = function () {
    this.elem[0].parentNode.removeChild(this.elem[0]);
    return this;
}
//追加子节点
MyQuery.prototype.append = function (obj) {
    for (var i = 0; i < obj.elem.length; i++) {
        this.elem[0].appendChild(obj.elem[i]);
    }
    return this;
}
