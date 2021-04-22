
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/loading');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80ea4wn/fxMUpB4lv6m9WU6', 'loading');
// loading.js

"use strict";

(function () {
  var createStyle = function createStyle() {
    return ".cocosLoading{position:absolute;margin:-30px -60px;padding:0;top:40%;left:50%}" + ".cocosLoading ul{margin:0;padding:0;}" + ".cocosLoading span{color:#FFF;text-align:center;display:block;}" + ".cocosLoading li{list-style:none;float:left;border-radius:15px;width:15px;height:15px;background:#FFF;margin:5px 0 0 10px}" + ".cocosLoading li .ball,.cocosLoading li .unball{background-color:#2187e7;background-image:-moz-linear-gradient(90deg,#2187e7 25%,#a0eaff);background-image:-webkit-linear-gradient(90deg,#2187e7 25%,#a0eaff);width:15px;height:15px;border-radius:50px}" + ".cocosLoading li .ball{transform:scale(0);-moz-transform:scale(0);-webkit-transform:scale(0);animation:showDot 1s linear forwards;-moz-animation:showDot 1s linear forwards;-webkit-animation:showDot 1s linear forwards}" + ".cocosLoading li .unball{transform:scale(1);-moz-transform:scale(1);-webkit-transform:scale(1);animation:hideDot 1s linear forwards;-moz-animation:hideDot 1s linear forwards;-webkit-animation:hideDot 1s linear forwards}" + "@keyframes showDot{0%{transform:scale(0,0)}100%{transform:scale(1,1)}}" + "@-moz-keyframes showDot{0%{-moz-transform:scale(0,0)}100%{-moz-transform:scale(1,1)}}" + "@-webkit-keyframes showDot{0%{-webkit-transform:scale(0,0)}100%{-webkit-transform:scale(1,1)}}" + "@keyframes hideDot{0%{transform:scale(1,1)}100%{transform:scale(0,0)}}" + "@-moz-keyframes hideDot{0%{-moz-transform:scale(1,1)}100%{-moz-transform:scale(0,0)}}" + "@-webkit-keyframes hideDot{0%{-webkit-transform:scale(1,1)}100%{-webkit-transform:scale(0,0)}}";
  };

  var createDom = function createDom(id, num) {
    id = id || "cocosLoading";
    num = num || 5;
    var i, item;
    var div = document.createElement("div");
    div.className = "cocosLoading";
    div.id = id;
    var bar = document.createElement("ul");
    var list = [];

    for (i = 0; i < num; i++) {
      item = document.createElement("li");
      list.push({
        ball: document.createElement("div"),
        halo: null
      });
      item.appendChild(list[list.length - 1].ball);
      bar.appendChild(item);
    }

    var span = document.createElement("span");
    span.innerHTML = "Loading";
    div.appendChild(bar);
    div.appendChild(span); //document.body.appendChild(div);

    return list;
  };

  var startAnimation = function startAnimation(list, callback) {
    var index = 0;
    var direction = true;
    var time = 300;

    var animation = function animation() {
      setTimeout(function () {
        if (callback && !callback()) {
          return;
        }

        var item = list[index];

        if (direction) {
          item.ball.className = "ball";
        } else {
          item.ball.className = "unball";
        }

        index++;

        if (index >= list.length) {
          direction = !direction;
          index = 0;
          time = 1000;
        } else {
          time = 300;
        }

        animation();
      }, time);
    };

    animation();
  };

  (function () {
    var bgColor = document.body.style.background;
    document.body.style.background = "#000000 url('res/loading/logo.png') no-repeat center top";
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = createStyle();
    document.head.appendChild(style); //var list = createDom();
    //startAnimation(list, function () {
    //    var div = document.getElementById("cocosLoading");
    //    if (!div) {
    //        document.body.style.background = bgColor
    //    }
    //    return !!div
    //})
  })();
})();

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbG9hZGluZy5qcyJdLCJuYW1lcyI6WyJjcmVhdGVTdHlsZSIsImNyZWF0ZURvbSIsImlkIiwibnVtIiwiaSIsIml0ZW0iLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJiYXIiLCJsaXN0IiwicHVzaCIsImJhbGwiLCJoYWxvIiwiYXBwZW5kQ2hpbGQiLCJsZW5ndGgiLCJzcGFuIiwiaW5uZXJIVE1MIiwic3RhcnRBbmltYXRpb24iLCJjYWxsYmFjayIsImluZGV4IiwiZGlyZWN0aW9uIiwidGltZSIsImFuaW1hdGlvbiIsInNldFRpbWVvdXQiLCJiZ0NvbG9yIiwiYm9keSIsInN0eWxlIiwiYmFja2dyb3VuZCIsInR5cGUiLCJoZWFkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLENBQUMsWUFBWTtBQUNULE1BQUlBLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQVk7QUFDMUIsV0FBTyxtRkFBbUYsdUNBQW5GLEdBQTZILGlFQUE3SCxHQUFpTSw0SEFBak0sR0FBZ1UsMFBBQWhVLEdBQTZqQiwyTkFBN2pCLEdBQTJ4Qiw2TkFBM3hCLEdBQTIvQix3RUFBMy9CLEdBQXNrQyx1RkFBdGtDLEdBQWdxQyxnR0FBaHFDLEdBQW13Qyx3RUFBbndDLEdBQTgwQyx1RkFBOTBDLEdBQXc2QyxnR0FBLzZDO0FBQ0gsR0FGRDs7QUFHQSxNQUFJQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFVQyxFQUFWLEVBQWNDLEdBQWQsRUFBbUI7QUFDL0JELElBQUFBLEVBQUUsR0FBR0EsRUFBRSxJQUFJLGNBQVg7QUFDQUMsSUFBQUEsR0FBRyxHQUFHQSxHQUFHLElBQUksQ0FBYjtBQUNBLFFBQUlDLENBQUosRUFBT0MsSUFBUDtBQUNBLFFBQUlDLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQVY7QUFDQUYsSUFBQUEsR0FBRyxDQUFDRyxTQUFKLEdBQWdCLGNBQWhCO0FBQ0FILElB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QTBCYSxLQUExQixFQU5TLENBT1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILEdBZkQ7QUFnQkgsQ0F0RUQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY3JlYXRlU3R5bGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiLmNvY29zTG9hZGluZ3twb3NpdGlvbjphYnNvbHV0ZTttYXJnaW46LTMwcHggLTYwcHg7cGFkZGluZzowO3RvcDo0MCU7bGVmdDo1MCV9XCIgKyBcIi5jb2Nvc0xvYWRpbmcgdWx7bWFyZ2luOjA7cGFkZGluZzowO31cIiArIFwiLmNvY29zTG9hZGluZyBzcGFue2NvbG9yOiNGRkY7dGV4dC1hbGlnbjpjZW50ZXI7ZGlzcGxheTpibG9jazt9XCIgKyBcIi5jb2Nvc0xvYWRpbmcgbGl7bGlzdC1zdHlsZTpub25lO2Zsb2F0OmxlZnQ7Ym9yZGVyLXJhZGl1czoxNXB4O3dpZHRoOjE1cHg7aGVpZ2h0OjE1cHg7YmFja2dyb3VuZDojRkZGO21hcmdpbjo1cHggMCAwIDEwcHh9XCIgKyBcIi5jb2Nvc0xvYWRpbmcgbGkgLmJhbGwsLmNvY29zTG9hZGluZyBsaSAudW5iYWxse2JhY2tncm91bmQtY29sb3I6IzIxODdlNztiYWNrZ3JvdW5kLWltYWdlOi1tb3otbGluZWFyLWdyYWRpZW50KDkwZGVnLCMyMTg3ZTcgMjUlLCNhMGVhZmYpO2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQoOTBkZWcsIzIxODdlNyAyNSUsI2EwZWFmZik7d2lkdGg6MTVweDtoZWlnaHQ6MTVweDtib3JkZXItcmFkaXVzOjUwcHh9XCIgKyBcIi5jb2Nvc0xvYWRpbmcgbGkgLmJhbGx7dHJhbnNmb3JtOnNjYWxlKDApOy1tb3otdHJhbnNmb3JtOnNjYWxlKDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO2FuaW1hdGlvbjpzaG93RG90IDFzIGxpbmVhciBmb3J3YXJkczstbW96LWFuaW1hdGlvbjpzaG93RG90IDFzIGxpbmVhciBmb3J3YXJkczstd2Via2l0LWFuaW1hdGlvbjpzaG93RG90IDFzIGxpbmVhciBmb3J3YXJkc31cIiArIFwiLmNvY29zTG9hZGluZyBsaSAudW5iYWxse3RyYW5zZm9ybTpzY2FsZSgxKTstbW96LXRyYW5zZm9ybTpzY2FsZSgxKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTthbmltYXRpb246aGlkZURvdCAxcyBsaW5lYXIgZm9yd2FyZHM7LW1vei1hbmltYXRpb246aGlkZURvdCAxcyBsaW5lYXIgZm9yd2FyZHM7LXdlYmtpdC1hbmltYXRpb246aGlkZURvdCAxcyBsaW5lYXIgZm9yd2FyZHN9XCIgKyBcIkBrZXlmcmFtZXMgc2hvd0RvdHswJXt0cmFuc2Zvcm06c2NhbGUoMCwwKX0xMDAle3RyYW5zZm9ybTpzY2FsZSgxLDEpfX1cIiArIFwiQC1tb3ota2V5ZnJhbWVzIHNob3dEb3R7MCV7LW1vei10cmFuc2Zvcm06c2NhbGUoMCwwKX0xMDAley1tb3otdHJhbnNmb3JtOnNjYWxlKDEsMSl9fVwiICsgXCJALXdlYmtpdC1rZXlmcmFtZXMgc2hvd0RvdHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwLDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwxKX19XCIgKyBcIkBrZXlmcmFtZXMgaGlkZURvdHswJXt0cmFuc2Zvcm06c2NhbGUoMSwxKX0xMDAle3RyYW5zZm9ybTpzY2FsZSgwLDApfX1cIiArIFwiQC1tb3ota2V5ZnJhbWVzIGhpZGVEb3R7MCV7LW1vei10cmFuc2Zvcm06c2NhbGUoMSwxKX0xMDAley1tb3otdHJhbnNmb3JtOnNjYWxlKDAsMCl9fVwiICsgXCJALXdlYmtpdC1rZXlmcmFtZXMgaGlkZURvdHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLDEpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCwwKX19XCJcclxuICAgIH07XHJcbiAgICB2YXIgY3JlYXRlRG9tID0gZnVuY3Rpb24gKGlkLCBudW0pIHtcclxuICAgICAgICBpZCA9IGlkIHx8IFwiY29jb3NMb2FkaW5nXCI7XHJcbiAgICAgICAgbnVtID0gbnVtIHx8IDU7XHJcbiAgICAgICAgdmFyIGksIGl0ZW07XHJcbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGl2LmNsYXNzTmFtZSA9IFwiY29jb3NMb2FkaW5nXCI7XHJcbiAgICAgICAgZGl2LmlkID0gaWQ7XHJcbiAgICAgICAgdmFyIGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgICAgICB2YXIgbGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW07IGkrKykge1xyXG4gICAgICAgICAgICBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goeyBiYWxsOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCBoYWxvOiBudWxsIH0pO1xyXG4gICAgICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGxpc3RbbGlzdC5sZW5ndGggLSAxXS5iYWxsKTtcclxuICAgICAgICAgICAgYmFyLmFwcGVuZENoaWxkKGl0ZW0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSBcIkxvYWRpbmdcIjtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYmFyKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICAgICAgLy9kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgcmV0dXJuIGxpc3RcclxuICAgIH07XHJcbiAgICB2YXIgc3RhcnRBbmltYXRpb24gPSBmdW5jdGlvbiAobGlzdCwgY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgaW5kZXggPSAwO1xyXG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgIHZhciB0aW1lID0gMzAwO1xyXG4gICAgICAgIHZhciBhbmltYXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmICFjYWxsYmFjaygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGxpc3RbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYmFsbC5jbGFzc05hbWUgPSBcImJhbGxcIlxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmJhbGwuY2xhc3NOYW1lID0gXCJ1bmJhbGxcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSBsaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9ICFkaXJlY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWUgPSAxMDAwO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lID0gMzAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uKClcclxuICAgICAgICAgICAgfSwgdGltZSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGFuaW1hdGlvbigpXHJcbiAgICB9O1xyXG4gICAgKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYmdDb2xvciA9IGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZDtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBcIiMwMDAwMDAgdXJsKCdyZXMvbG9hZGluZy9sb2dvLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgdG9wXCI7XHJcbiAgICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG4gICAgICAgIHN0eWxlLnR5cGUgPSBcInRleHQvY3NzXCI7XHJcbiAgICAgICAgc3R5bGUuaW5uZXJIVE1MID0gY3JlYXRlU3R5bGUoKTtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuICAgICAgICAvL3ZhciBsaXN0ID0gY3JlYXRlRG9tKCk7XHJcbiAgICAgICAgLy9zdGFydEFuaW1hdGlvbihsaXN0LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29jb3NMb2FkaW5nXCIpO1xyXG4gICAgICAgIC8vICAgIGlmICghZGl2KSB7XHJcbiAgICAgICAgLy8gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGJnQ29sb3JcclxuICAgICAgICAvLyAgICB9XHJcbiAgICAgICAgLy8gICAgcmV0dXJuICEhZGl2XHJcbiAgICAgICAgLy99KVxyXG4gICAgfSkoKVxyXG59KSgpOyJdfQ==
//------QC-SOURCE-SPLIT------
