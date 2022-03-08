'use strict';
//에니메이트 라이트메뉴로 이동하기
const rightMenuLi=$('.rightMenu>ul>li');
const section=$('.section');

const section2=$('.section.sec2');
const section2H1=$('.section.sec2 h1');

rightMenuLi.on('click',function(){
    //자기자신의 index를 콘솔에 출력
    const _this=$(this);
    const _index=_this.index();
    // console.log(_this.index())

    _this.addClass('on').siblings().removeClass('on');

    const secTop=section.eq(_index).offset().top;
    // console.log(secTop)
    
    $('html').animate({scrollTop:secTop}, 500);
    // $('html').stop().animate({scrollTop:secTop}, 2000);

    if(_index==1){
        section2H1.animate({left:'0'} ,1000);
    }

});

//자바스크립트 예
// const rightUl=document.querySelector('.rightMenu>ul')
// const rightUlLi=document.querySelectorAll('.rightMenu>ul>li')

// rightUl.addEventListener('click',(e)=>{
//     const eTarget=e.target;
//     console.log(e.target)
//     console.log(e.currentTarget)

//     rightUlLi.forEach((el, idx)=>{
//         if(eTarget==el)
//         console.log(idx)
//     })
// })

const btnMenu=$('.btnMenu');
const leftMenu=$('.leftMenu');

let toggleKey=0;

btnMenu.on('click',function(){
    console.log(toggleKey,'<< toggleKey-1')
    
    const _this=$(this);
    const _thisImg=_this.find('img');

    if(toggleKey===0){

        _thisImg.attr('src','img/btn_0.svg');
        leftMenu.animate({left:0} ,200);
        toggleKey=1;
        
    }else if(toggleKey===1){
        _thisImg.attr('src','img/btn_1.svg');
        leftMenu.animate({left:'-100%'} ,200);
        toggleKey=0;
    }
    console.log(toggleKey,'<< toggleKey-2')
});



const gnbUlLi=$('.leftMenu .gnb>ul>li');

gnbUlLi.on('click',function(){
    const _this=$(this);
    const _thisSub=_this.find('ul.sub');
    const _siblinsSub=_this.siblings().find('ul.sub');

    _thisSub.slideDown(300);
    _siblinsSub.slideUp(300);
 
    console.log(_this)
    console.log(_siblinsSub)
    // console.log(_this)
    // console.log(_thisSub)
})







