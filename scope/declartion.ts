declare var JQuery:any;
JQuery("#firstname").val("test data");
declare function Add(n1,n2);  // Which will bypass error while access Add, or JQuery etc

Add(11,22);