//one class SqlLog
var SqlLog = (function () {
    function SqlLog() {
    }
    SqlLog.prototype.WriteLog = function () {
        console.log('SQL Write');
    };
    return SqlLog;
}());
//second class NotepadLog
var NotepadLog = (function () {
    function NotepadLog() {
    }
    NotepadLog.prototype.WriteLog = function () {
        console.log('notepad Write');
    };
    NotepadLog.prototype.WriteLogInNotepad = function () {
        console.log('Notepad write');
    };
    return NotepadLog;
}());
// Factory witch give Ilog object
var Factory = (function () {
    function Factory() {
    }
    Factory.prototype.getObject = function (className) {
        if (className == "SQL") {
            return new SqlLog();
        }
        else if (className == "NotePad") {
            return new NotepadLog();
        }
        else {
            return null;
        }
    };
    return Factory;
}());
//Client application 
var f = new Factory();
var obj = f.getObject('SQL');
obj.WriteLog();
obj = f.getObject('NotePad');
obj.WriteLog();
