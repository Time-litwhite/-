/*最外层容器样式*/
.wrap {
   width: 100px;
   height: 100px;
   margin: 150px;
   position: relative;
}
/*包裹所有容器样式*/
/*设置transform-style: preserve-3d，让其子元素在3D空间呈现*/
.cube {
   width: 50px;
   height: 50px;
   margin: 0 auto;
   transform-style: preserve-3d;
   transform: rotateX(-30deg) rotateY(-80deg);
   animation: rotate linear 20s infinite;
}
@-webkit-keyframes rotate {
   from {
       transform: rotateX(0deg) rotateY(0deg);
  }
   to {
        transform: rotateX(360deg) rotateY(360deg);
    }
}
.cube div {
   position: absolute;
   width: 200px;
   height: 200px;
   opacity: 0.8;
   transition: all .4s;
}
/*定义所有图片样式*/
.pic {
   width: 200px;
   height: 200px;
}
/*定义小正方体样式*/
.cube span {
   display: block;
   width: 100px;
   height: 100px;
   position: absolute;
   top: 50px;
   left: 50px;
}
/*定义大正方体六个面旋转样式*/
.cube .out_front {
   transform: rotateY(0deg) translateZ(100px);
}

.cube .out_back {
   transform: translateZ(-100px) rotateY(180deg);
}

.cube .out_left {
   transform: rotateY(-90deg) translateZ(100px);
}

.cube .out_right {
   transform: rotateY(90deg) translateZ(100px);
}

.cube .out_top {
   transform: rotateX(90deg) translateZ(100px);
}

.cube .out_bottom {
   transform: rotateX(-90deg) translateZ(100px);
}
​
/*定义小正方体六个面旋转样式*/
.cube .in_front {
   transform: rotateY(0deg) translateZ(50px);
}

.cube .in_back {
   transform: translateZ(-50px) rotateY(180deg);
}

.cube .in_left {
   transform: rotateY(-90deg) translateZ(50px);
}

.cube .in_right {
   transform: rotateY(90deg) translateZ(50px);
}

.cube .in_top {
   transform: rotateX(90deg) translateZ(50px);
}

.cube .in_bottom {
   transform: rotateX(-90deg) translateZ(50px);
}

/*鼠标移入后样式*/
.cube:hover .out_front {
   transform: rotateY(0deg) translateZ(200px);
}

.cube:hover .out_back {
   transform: translateZ(-200px) rotateY(180deg);
}

.cube:hover .out_left {
   transform: rotateY(-90deg) translateZ(200px);
}

.cube:hover .out_right {
   transform: rotateY(90deg) translateZ(200px);
}

.cube:hover .out_top {
   transform: rotateX(90deg) translateZ(200px);
}

.cube:hover .out_bottom {
   transform: rotateX(-90deg) translateZ(200px);
}
.cube .in_pic {
   width: 100px;
   height: 100px;
}
