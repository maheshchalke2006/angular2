function Add_JS(n1,n2){
	return n1 + n2;
}

function Add_TS(n1: number, n2: number): number{
	return n1 + n2;
}

function Add_Generic<T>(n1: T,n2: T): T{
	return n1;
}

Add_JS(11,22);
Add_JS("11","22");

Add_TS(11,22);
//Add_TS("11","22");

Add_Generic<number>(11,22);
Add_Generic<string>("11","22");
Add_Generic<string | number>("11",22);

function ConvertToType<T,K>(value:T):K{
	return null;
}