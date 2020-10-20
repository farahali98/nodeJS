/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', onDataReceived);
    console.log(`Welcome to ${name}'s application!`)
    console.log("--------------------")
}
tasks = ['eat', 'sleep'];


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
    var start = text.startsWith('hello')
    var start1 = text.startsWith('help')
    var start2 = text.startsWith("add")
    var start3 = text.startsWith("remove")
    let arr = text.split(" ");

    if (text === 'quit\n' || text === 'exit\n') {
        quit();
    } else if (text == "hello") {
        hello();
    } else if (text === 'help\n') {
        help();
    } else if (start) {
        Modified_hello(text);

    } else if (start1) {
        Modified_help(text);
    } else if (text === 'list\n') {
        list();
    } else if (start2) {
        add(arr[1]);
    } else if (start3) {
        let arr1 =
            remove(arr[1]);
    } else if (text.startsWith("edit")) {
        edit(text);
    } else {
        unknownCommand(text);
    }
}

function list() {
    if (tasks.length > 0) {
        console.log(tasks);
    } else {
        console.log("there are no tasks yet!");
    }
}


function add(value) {
    if (value.length === 0) {
        console.log("Error");

    } else {
        tasks.push(value);
        console.log("new task's list: " + tasks);
    }
}

function remove(sta) {

    if (sta === "") {
        tasks.pop();
    } else if (sta > tasks.length) {

        console.log("This numer doesn't exist in the list");
    } else {
        tasks.splice(sta, sta);

    }

}

function edit(ed) {
    if (ed === "edit") {
        console.log("Error");

    } else if (ed === "edit new text") {
        tasks[-1] = "new text"
    } else if (ed === "edit 1 new text") {
        tasks[0] = "new text"
    }
}



/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
    console.log('unknown command: "' + c.trim() + '"')
}

function Modified_hello(c) {
    console.log(c.trim() + "!");
}



/**
 * Says hello
 *
 * @returns {void}
 */




function hello() {
    console.log('hello!')
}

/**
 * prints all possible commands
 *
 * @returns {void}
 */


function help() {
    console.log('hello+x prints hello and name');
    console.log('press Hello to recieve it');
    console.log('press exit or quit to get out of the app');
    console.log('YOU CAN ADD ITEMS TO THE TASKS USING ADD COMAND AND PPECIFYING THE TASK')
    console.log("press remove to remove items from list")

}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
    console.log('Quitting now, goodbye!')
    process.exit();
}

// The following line starts the application
startApp("Farah Ali")