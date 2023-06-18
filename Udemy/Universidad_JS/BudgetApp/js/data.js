class Data{
    constructor(description, value){
        this._description = description;
        this._value = value;
    }
    get description(){
        return this._description;
    }
    set description(newDescription){
        this._description = newDescription;
    }
    get value(){
        return this._value;
    }
    set value(newvalue){
        this._value = newvalue;
    }
}