
var elasticlunr = require('elasticlunr');

index = elasticlunr();
index.addField('title');
index.addField('body');

module.exports = {
    elasticlunr : {
        // defineIdxFields : function(){
        //     index = elasticlunr();
        //     index.addField('title')
        //     index.addField('body')
        //     return index;
        // },
        Index : index,
        addIndex : function (index, data) {
            index.addDoc(data);            
            return;
        },
        search : function(text){
            return index.search(text);
        }
    }

};