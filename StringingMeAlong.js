function createMessage(initialMessage) {
    let message = initialMessage;

    function inner(newMessage) {
        if (newMessage === undefined) {
            return message;
        } else {
            message += " " + newMessage;
            return inner;
        }
    }

    return inner;
}