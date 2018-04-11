/**
 * Created by ubuntu on 4/11/18.
 */
var li = document.getElementsByClassName('lis')[0];
var ul = document.getElementById('ele');
li.onmouseover = function () {
    ul.style.display = 'block';
};
li.onmouseout = function () {
    ul.style.display = 'none';
};