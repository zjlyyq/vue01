/**
 * Created by jialuzhang on 2018/11/15.
 */
function myModule() {
    this.hello = function() {
        return 'hello!';
    }

    this.goodbye = function() {
        return 'goodbye!';
    }
}

module.exports = myModule;