const Logger = {
    styles: {
        base: 'font-size: 13px; padding: 4px 10px; border-radius: 3px;',
        warning: 'background: #f7bd03; color: #000;',
        notice: 'background: #027afe; color: #fff;',
        info: 'background: #4a7a91; color: #fff;',
        error: 'background: #d75351; color: #fff;',
    },
    getStyle: (key) => {
        return Logger.styles.base + Logger.styles[key];
    },
    prepArray: (arr, type) => {
        arr[0] = '%c'+arr[0];
        arr.splice(1, 0, Logger.getStyle(type));
        return arr;
    },
    prepString: (str, type) => {
        let styleString = Logger.getStyle(type);
        str = '%c'+str;
        return [str, styleString];
    },
    prepInput: (msg, type) => {
        if(typeof msg == "string"){
            msg = Logger.prepString(msg, type)
        } else if(typeof msg == "object"){
            msg = Logger.prepArray(msg, type);
        }
        return msg;
    },
    log: (...msg) =>{
        msg = Logger.prepInput(msg, 'info');
        if(typeof(console) !== 'undefined') {
            console.log(...msg);
        }
    },
    warn: (...msg) => {
        msg = Logger.prepInput(msg, 'warning');
        if(typeof(console) !== 'undefined') {
            console.log(...msg);
        }
    },
    error: (...msg) => {
        msg = Logger.prepInput(msg, 'error');
        if(typeof(console) !== 'undefined') {
            console.log(...msg);
        }
    },
    notice: (...msg) => {
        msg = Logger.prepInput(msg, 'notice');
        if(typeof(console) !== 'undefined') {
            console.log(...msg);
        }
    }

}


export default Logger;