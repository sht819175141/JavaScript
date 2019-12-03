var fs = require('fs');
var express = require('express');
var router = express.Router();
var common= require('../public/javascripts/common');
//var connect = common.connect;

var multiparty = require('multiparty');

//var upFilePath='f:/workspace_idea/locPorject/locFile/';
var upFilePath='./public/file/';
router.get('/read', function(req, res, next) {
    try{
        console.log("start==========path="+path);
        fs.readFile("c:/ddd.txt","utf8",function (error,data){
            console.log("error="+error+",data="+data) ;
        })
        console.log("end==========");
    }catch(e){
        console.log("try=========="+e.message);
    }

    res.send({ message:"fff"});
});

router.post('/write',function(req, res, next) {
    var form = new multiparty.Form({uploadDir: upFilePath});
    form.parse(req, function(err, fields, files) {
        var filesTmp = JSON.stringify(files,null,2);
        var uploadedPath="";
        if(err){
           console.error('updataError: ' + err);
        } else {
            var inputFile= files.fulAvatar[0];
            uploadedPath = inputFile.path;
        }
        //http://localhost:3000/file/5SFBYHixKNPAj3Rfusz-vhwM.jpg
        if(""!=uploadedPath && uploadedPath!=undefined){
            uploadedPath=uploadedPath.replace("public\\","/");
            uploadedPath=uploadedPath.replace("\\","/");
            console.log("htmlUrl="+common.htmlUrl+uploadedPath)
            res.render(common.htmlUrl+uploadedPath,{});
        }

    });
});

router.get('/go', function(req, res, next) {
    res.render('file',{});
});

module.exports = router;