//one interface Ilog
//- Method WriteLog()
interface Ilog{
	WriteLog();
}

//one class SqlLog
class SqlLog{
	WriteLog(){
		console.log('SQL Write');
	}	
}


//second class NotepadLog
class NotepadLog implements Ilog{
	WriteLog(){
		console.log('notepad Write');
	}
	WriteLogInNotepad(){
		console.log('Notepad write');
	}
}

// Factory witch give Ilog object
class Factory{
	getObject(className:string){
		if(className == "SQL"){
			return new SqlLog()
		}
		else if(className == "NotePad"){
			return new NotepadLog()
		}
		else{
			return null;
		}
	}
}


//Client application 

var f = new Factory();
var obj = f.getObject('SQL');
obj.WriteLog();

obj = f.getObject('NotePad');
obj.WriteLog();


