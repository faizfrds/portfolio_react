function Message(){

    const name = 'Faiz';

    if (name){
        return <h1>Hello {name}</h1>
    }

    //JS XML -- piece of HTML-like code gets converted into JS code
    return <h1>Hello World</h1>
}

export default Message;