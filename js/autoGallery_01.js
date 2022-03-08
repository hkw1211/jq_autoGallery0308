'use strict';
// .gallery ul li 배경이미지 저장
// 반복문, 배열
const gallery=$('.gallery');
const galleryLi=$('.gallery>ul>li');
const itemsLi=$('.items>ul>li');

const arrBg=[];
for(let i=0;i<galleryLi.length;i++){
    arrBg.push(`url(img/bg${i}.jpg) no-repeat 50%/cover`)
    galleryLi.eq(i).css({'background':arrBg[i]})
};

let i=-1;
function autoGallery(){
    if(i>=galleryLi.length-1)i=-1;
    i++;
    // console.log(`i->${i}`);
    autoFn(i);
    /*
        // const gap=galleryLi.eq(1).offset().left-galleryLi.eq(0).offset().left;
        // const goto=(-i*gap);
        // itemsLi.eq(i).addClass('on').siblings().removeClass('on');
        // gallery.animate({left:goto},300);
    */
    if(i>=galleryLi.length-1) i=-1;
};
// 3초마다 autoGallery 함수를 실행, setInterval이용
let setIn=setInterval(autoGallery,2000);

//hover시 정지 벗어나면 이동
const spanArrow=$('span.arrow');
spanArrow.hover(
    function(){
        clearInterval(setIn);
        // console.log($(this).index())
        // console.log($(this).attr('class'))
    },function(){
        setIn=setInterval(autoGallery,2000);
    }
);
itemsLi.hover(
    function(){
        clearInterval(setIn);
    },function(){
        setIn=setInterval(autoGallery,2000);
    }
);

//click시 이동
//index 0-> 왼쪽 index 1-> 오른쪽 

spanArrow.on('click',function(){
    const idx=$(this).index();

    if(idx==0){
        if(i>=galleryLi.length-1) i=-1;
        i++;
        // console.log(`i2->${i}`)
        autoFn(i);
        /*
            // const gap=galleryLi.eq(1).offset().left-galleryLi.eq(0).offset().left;
            // const goto=(-i*gap);
            // itemsLi.eq(i).addClass('on').siblings().removeClass('on');
            // gallery.animate({left:goto},300);
        */

    }else if(idx==1){
        if(i<=0) i=galleryLi.length;
        i--;
        // console.log(`i3->${i}`);
        autoFn(i);
        /*
            // const gap=galleryLi.eq(1).offset().left-galleryLi.eq(0).offset().left;
            // const goto=(-i*gap);
            // itemsLi.eq(i).addClass('on').siblings().removeClass('on');
            // gallery.animate({left:goto},300);
        */
    }
});

itemsLi.on('click',function(){
    const idx=$(this).index();
    console.log(idx)
    i=idx;
    autoFn(i);
    /*
        // const gap=galleryLi.eq(1).offset().left-galleryLi.eq(0).offset().left;
        // const goto=(-i*gap);
        // itemsLi.eq(i).addClass('on').siblings().removeClass('on');
        // gallery.animate({left:goto},300);
    */
});

function autoFn(idx2){
    const gap=galleryLi.eq(1).offset().left-galleryLi.eq(0).offset().left;
    const goto=(-idx2*gap);
    itemsLi.eq(idx2).addClass('on').siblings().removeClass('on');
    gallery.animate({left:goto},300);
};

(()=>{
    autoGallery();
})();



