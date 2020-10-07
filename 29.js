var p = document.createElement('div');
p.setAttribute('class','para');

setTimeout(()=>{
    p.innerHTML = 10;
    setTimeout(()=>{
        p.innerHTML = 9;
        setTimeout(()=>{
            p.innerHTML = 8;
            setTimeout(()=>{
                p.innerHTML = 7;
                setTimeout(()=>{
                    p.innerHTML = 6;
                    setTimeout(()=>{
                        p.innerHTML = 5;
                        setTimeout(()=>{
                            p.innerHTML=4;
                            setTimeout(()=>{
                                p.innerHTML=3;
                                setTimeout(()=>{
                                    p.innerHTML = 2;
                                    setTimeout(()=>{
                                        p.innerHTML = 1;
                                        setTimeout(()=>{
                                            p.innerHTML = 'Wake up  man ,you are already late.'
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},0)

document.body.appendChild(p);