$('body').terminal({
    iam: function (name) {
        this.echo('Hello, ' + name +
            '. Welcome to GeeksForGeeks');
    }
}, {
    greetings: 'GeeksForGeeks - A place to'
            + ' learn DS, Algo and Computer'
            + ' Science for free'
});

$(function(){$('#terminal').terminal("service.py",{prompt: "[[;red;]>>> ]"});});term.set_prompt(function(set_prompt){if(this.get_token()){set_prompt(this.login_name()+'@server$ ');}else{set_prompt('guest@server$ ');}});
