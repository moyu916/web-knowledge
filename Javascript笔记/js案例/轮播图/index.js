window.addEventListener('load',function(){
    var focus = document.querySelector('.focus');
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var ul = document.querySelector('ul');

    var width = ul.children[0].offsetWidth;
    //1.鼠标进入focus区域，左右箭头显示，动画停止；离开恢复
    focus.addEventListener('mouseenter',function(){
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave',function(){
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function() {
            //手动调用点击事件
            arrow_r.click();
        }, 2000);
    })

    var ol = document.querySelector('ol');
    var circle_num = 0;
    //2.动态生成小圆圈,小圆圈事件
    for(var i=0;i<ul.children.length;i++)
    {
        var li = document.createElement('li');
        li.className = 'circle';
        li.setAttribute('index',i);
        ol.appendChild(li);

        //点击哪个小圆圈哪个变色，且相应图片滑到目标位置
        var lis = ol.children;
        li.addEventListener('click',function(){
            for (let j = 0; j < lis.length; j++) {
                lis[j].className = 'circle';
                
            } 
            circle_num = this.getAttribute('index');
            lis[circle_num].className = 'circle current';
           
            animate(ul, -circle_num*width);
        })
     
    }
    ol.children[0].className = 'circle current';
    //3.点击右箭头事件
    // 克隆第一张图片(li)放到ul 最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    //var num = 0;
    var flag = true;

    arrow_r.addEventListener('click',function(){
        if(flag)
        {
            flag = false;
            if(circle_num == ol.children.length-1)
            {
            circle_num = 0;
            ul.style.left = 0;
            }
            else{
                circle_num++;
            }
            animate(ul,-circle_num*width,function(){
                flag = true;
            });

            var lis = ol.children;
            for (let j = 0; j < lis.length; j++) {
                lis[j].className = 'circle';
            
            } 
            lis[circle_num].className = 'circle current';

        }
        
        
    })

    //4.点击左箭头事件
    //var num = 0;
    var flag = true;

    arrow_l.addEventListener('click',function(){
        if(flag)
        {
            flag = false;
            if(circle_num == 0)
            {
                //console.log(ul.children.length);
            circle_num = ul.children.length-1;
            ul.style.left = -circle_num*width + 'px';
            }
            else{
                circle_num--;
            }
            animate(ul,-circle_num*width,function(){
                flag = true;
            });

            var lis = ol.children;
            for (let j = 0; j < lis.length; j++) {
                lis[j].className = 'circle';
            
            } 
            lis[circle_num].className = 'circle current';

        }
        
        
    })


    //5.自动播放事件
    var timer = setInterval(function(){
        arrow_r.click();
    },2000);
})