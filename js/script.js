function visit(url,param,blank){
    if(param == null){
        if(!blank){
            location.href = url;
        }else{
            window.open(url);
        }
    }else{
        if(!blank){
            location.href = url+"?"+param;
        }else{
            window.open(url+"?"+param);
        }

    }

}

