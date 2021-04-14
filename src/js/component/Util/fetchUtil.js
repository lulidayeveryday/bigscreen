/**
 *
 * title: fetchUtil.js
 *
 * author: WangPei.
 *
 * date: 2017/5/22.
 *
 */
//import Cookie from "../Login/cookie"
function fetchUtil(method,url, params) {
    var method=method.toUpperCase();
    //var loginStatus=Cookie.get("loginStatus");
    //var userId=loginStatus.userId;
    //var token=loginStatus.token;
    /*params.userId=userId;
    params.token=token;*/
    var paramsObj={};
    //paramsObj.userId=userId;
    //paramsObj.token=token;
    if(params!==undefined&&params!==null){
        for(var k in params){
            paramsObj[k]=params[k];
        }
    }
    var _body=JSON.stringify(paramsObj);
    return new Promise(function (resolve, reject) {
        fetch(url, {
            credentials: 'include',//是否携带cockie
            mode: 'cors',//跨域请求
            headers: {
                "Content-type": "application/json; charset=utf-8",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36"
            },
            method: method,
            //body:_body,
            body:params,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject({status:response.status})
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err)=> {
                // reject({status:-1});
                console.log("fetch fail",err.toString()+"  failed url  "+url);
            })
    })
}
export default fetchUtil;