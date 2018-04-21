/**
 * Created by ubuntu on 4/11/18.
 */
var oB1 = document.getElementById('b1');
var oDiv1 = document.getElementById('div1');
var oDiv2 = document.getElementById('div2');
var oDiv3 = document.getElementById('overlay');
oB1.onclick = function () {
    oDiv2.style.display = 'block';
    oDiv3.className = 'overlay';
};

var color = document.getElementById('cColor');
var lis1 = color.getElementsByTagName('li');
for (var i = 0; i < lis1.length; i++) {
    lis1[i].onclick = function () {
        oDiv1.style.background = this.id;
    }
}

var width = document.getElementById('cWidth');
var lis2 = width.getElementsByTagName('li');
for (var j = 0; j < lis2.length; j++) {
    lis2[j].onclick = function () {
        oDiv1.style.width = this.innerHTML + 'px';
    }
}

var height = document.getElementById('cHeight');
var lis3 = height.getElementsByTagName('li');
for (var k = 0; k < lis3.length; k++) {
    lis3[k].onclick = function () {
        oDiv1.style.height = this.innerHTML + 'px';
    }
}

var oBtn1 = document.getElementById('button1');
var oBtn2 = document.getElementById('button2');
oBtn1.onclick = function () {
    oDiv1.style.cssText = 'background:#fff; width:100px; height:100px;';
};
oBtn2.onclick = function () {
    oDiv2.style.display = 'none';
    oDiv3.className = '';
};