let  fs=require('fs'),
    path=require('path');

let dirname=path.resolve();
//=>MKDIR&&RMDIR
['mkdir','rmdir','readdir','readFile','copyFile','unlink'].forEach(item=>{
        exports[item]=function(pathname,copypath=''){
            pathname=path.resolve(dirname,pathname);
            copypath=path.resolve(dirname,copypath);
            return new Promise((resolve,reject)=>{
                let arg=[(err,result)=>{
                    if(err){
                        reject(err);
                        return;
                    }
                    resolve(result || '');
                }];
                item==='readFile'?arg.unshift('utf8'):null;
                item==='copyFile'?arg.unshift(copypath):null;
                fs[item](pathname,...arg);
            });
        };
    });

['writeFile','appendFile'].forEach(item=>{
    exports[item]=function(pathname,content){
        pathname=path.resolve(dirname,pathname);
        if(typeof content !=='string'){
            //写入的内容必须是字符串才可以
            content=JSON.stringify(content);
        }
        return new Promise((resolve,reject)=>{
            fs[item](pathname,content,'utf8',(err,result)=>{
                if(err){
                    reject(err);
                    return;
                }
                resolve(result || '');
            });
        });
    };
});



