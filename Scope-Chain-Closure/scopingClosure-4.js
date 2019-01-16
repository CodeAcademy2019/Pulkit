function foo(){
    var bar;
    quux = 12;
    function zip(){
        bar = true;
        var quux = 123;
    }
    return zip;
}