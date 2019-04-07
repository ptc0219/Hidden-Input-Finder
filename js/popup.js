$(function (){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        console.log("Tab ID: " + tabs[0].id);
        chrome.tabs.executeScript(tabs[0].id, { file: "js/jquery-3.1.1.min.js" }, function() {
            chrome.tabs.executeScript(tabs[0].id, {
                code: 'var tmp = [];$.each($("input[type=hidden]"), function(index, element){tmp.push({id:element.id,name:element.name,class:element.className,value:element.value})});tmp;'
            }, function(result) {
                console.log(result[0]);

                if(result[0].length > 0){
                    $.each(result[0], function(index, element){
                        $('#table > tbody').append('<tr><td>' + (index + 1) + '</td><td>' + element.id + '</td><td>' + element.name + '</td><td>' + element.class + '</td><td>' + element.value + '</td></tr>');
                    });

                    $("#table").DataTable({
                        paging: false,
                        info: false,
                        searching: false,
                        fixedHeader: true
                    });
                }
            });
        });
    });
});
