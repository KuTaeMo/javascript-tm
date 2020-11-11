//1.자바스크립트는 자료형이 동적으로 정해진다.

var num=10;         //정수 //1Byte      //4Byte ->Heap
console.log("num",num);

var str="문자열";   //문자열 //9Byte    //4Byte ->Heap
console.log("str",str);

var floatNum=10.5;  //실수 //8Byte      //4Byte ->Heap
console.log("floatNum",floatNum);

var charStr="가";   //문자  //3Byte     //4Byte ->Heap
console.log("charStr",charStr);

var boolData=true;  //bool  //1Byte     //4Byte ->Heap
console.log("boolData",boolData);


// 자바스크립트 모든 데이터는 Heap에 저장된다.
//-> 들어오는 데이터의 크기를 알 수 없기 때문에

var list=[1,2,3,4,5,6]; //4Byte ->Heap
console.log("list",list);
console.log("list[0]",list[0]); //인덱스 번호로
console.log("list[5]",list[5]);

//자바스크립트 오브젝트 (key:value) //4Byte ->Heap
var user={
    name:"홍길동",
    phone:"0102222"
}
console.log("user",user);
console.log("user->name",user.name);    //키값으로
console.log("user->phone",user.phone);


var hello=function(){   //익명 메소드   4Byte ->Heap
    alert("함수호출됨");
}

hello();