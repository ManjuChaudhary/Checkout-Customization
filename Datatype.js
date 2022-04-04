// var Datatypes={
//     string : ['lenght', 'slice','substring','replace', 'search','concat','split' ],
//     array : ['toString', 'push','pop', 'shift','unshift', 'arraylengh'],
// }

// getting the main_menu and sub_menu

// var main = document.getElementById('main_menu');
// var sub = document.getElementById('sub_menu');

// Trigger the Event when main menu change occurs

// main.addEventListener('change', function(e){ 

//     var selected_option = Datatypes[this.value];

//     while(sub.options.lenght > 0){

//         sub.options.remove(0);
//     }

//     Array.from(selected_option).forEach(function(el){

//         let option = new option(el ,el);

//         sub.appendChild(option);
//     });

// });


function configureDropDownLists(ddl1,ddl2) {
    var  string = ['lenght', 'slice','substring','replace', 'search','concat','split' ];
    var array = ['toString', 'push','pop', 'shift','unshift', 'arraylengh'];
    var number = ['tostring', 'David', 'Sarah','j','k','o'];
    
    switch (ddl1.value) {
        case 'number':
            ddl2.options.length = 0;
            for (i = 0; i < number.length; i++) {
                createOption(ddl2, number[i], number[i],number[i]);
            }
            break;
        case 'array':
            ddl2.options.length = 0; 
        for (i = 0; i < array.length; i++) {
            createOption(ddl2, array[i], array[i] ,array[i]);
            }
            break;
        case 'string':
            ddl2.options.length = 0;
            for (i = 0; i < string.length; i++) {
                createOption(ddl2, string[i], string[i],string[i]);
            }
            break;
            default:
                ddl2.options.length = 0;
            break;
    }

}

    function createOption(ddl, text, value) {
        var opt = document.createElement('option');
        opt.value = value;
        opt.text = text;
        ddl.options.add(opt);
    }