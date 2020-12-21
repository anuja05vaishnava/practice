class Mediator {
    constructor() {
        this.handlers = [];
    }

    addHandler(handler) {
        if (this.isValidHandler(handler)) {
            this.handlers.push(handler);
            return this;
        }
        let error = new Error("Attempt to register an invalid handler with the mediator.");
        error.handler = handler;
        throw error;
    }

    isValidHandler(handler) {
        return typeof handler.canHandle === "function" && typeof handler.handle === "function";
    }

    request(message) {
        for (let i = 0; i < this.handlers.length; i++) {
            let handler = this.handlers[i];
            if (handler.canHandle(message)) {
                return handler.handle(message);
            }
        }
        let error = new Error("Mediator was unable to satisfy request.");
        error.request = message;
        return error;
    }
}
const Handler = {
    canHandle: function(message) {
        return message.name;
    },
    handle: function(message) {
        return {
            name: message.name,
            say: "Hello, " + message.name + "!"
        };
    }
};


let mediator = new Mediator();
mediator.addHandler(someHandler);
mediator.addHandler(someOtherHandler);
mediator.addHandler(yetAnotherHandler);
let request = { name: "Alice" };
let reply = mediator.request(request);
