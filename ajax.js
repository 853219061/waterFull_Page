/*
 * @Author: your name
 * @Date: 2019-11-03 16:15:13
 * @LastEditTime: 2019-11-03 16:15:16
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \测试\ajax.js
 */
function ajax (method,url,data,cb){
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                cb(JSON.parse(xhr.responseText))
            }else{
                console.error(xhr.responseText)
            }
        }
    }

    if ( method == "GET"){
        xhr.open(method,url+data,true);
        xhr.send();
    }else{
        xhr.open(method,url,true);
        xhr.send(data);
    }

 }