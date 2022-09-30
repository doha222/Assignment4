function welcomeMSG(){
    return new Promise(function(resolve, reject) {
                resolve();
            });
}

let promise =welcomeMSG();

promise

.then(function (){
    setTimeout(function(){
        document.write('Welcome');
        document.write('\n');
    },3000);
})
.finally(function(){
    setTimeout(function(){
    var val = document.getElementById('imagename'),
            src = 'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png';
            img = document.createElement('img');
            img.src = src;
            document.body.appendChild(img);
            document.write('\n');
    },6000);
})

function Thank(){
    return new Promise(function(resolve, reject) {
                resolve();
            });
            
}
let promise2 =Thank();
promise2

.then(function (){
    setTimeout(function(){
        document.write('good bye');
        document.write('\n');
    },9000);
    
})

.finally(function(){
    setTimeout(function(){
        location.href = 'https://github.com/';
    },12000)
})
