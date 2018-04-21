/**
 * Created by ubuntu on 4/21/18.
 */
var txt = document.getElementById('text');
var btn = document.getElementById('btn');
var list = document.getElementById('list');
btn.onclick = function() {
    var text = txt.value;
    list.innerHTML = '<li>'+ text +'</li>' + list.innerHTML;
    txt.focus();
};
txt.onfocus = function() {
    txt.value = '';
}