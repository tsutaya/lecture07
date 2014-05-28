var photoListElement = document.querySelector("#photos");

var photoList = [
    {src: "img/200705.png", title: "7月"},
    {src: "img/200806.png", title: "8月"},
	  {src: "img/200902.png", title: "9月"},
	  {src: "img/201008.png", title: "もう1回8月"},
    {src: "img/front.png", title: "前"},
<<<<<<< HEAD
    {src:	"img/side.png", title: "横"},
    {src:   "img/hiyaasityuuka.png", title: "冷やし中華"},

];//photoListの中に新たに画像を入れた。フォルダ「img」の中にhiyaasityuuka.pngを入れ
　//表示させた
=======
    {src:	"img/side.png", title: "横"}
];
>>>>>>> parent of ad2a5b7... 課題１

var isReady = function(){
    return photoListElement != null &&
        photoList != null &&
        photoList.length > 0;
};

var renderPhoto = function(index){
    var photo = photoList[index];
    var elm = document.createElement("img");
    elm.setAttribute("src", photo.src);
    elm.setAttribute("title", photo.title);
    return elm;
};

var showPhotos = function(){
    if(isReady()){
        var index = 0;
        while(index < photoList.length){
            var elm = renderPhoto(index);
            photoListElement.appendChild(elm);
            index = index + 1;
        }
    }
};

var initApp = function(){
    var btn = document.querySelector("#startButton");
    btn.addEventListener("click", showPhotos);
};

initApp();
