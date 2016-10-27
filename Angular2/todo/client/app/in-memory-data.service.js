"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var todos = [
            { id: 11, txt: 'bring shit', isCompleted: true },
            { id: 12, txt: 'get oil', isCompleted: false },
            { id: 13, txt: 'Bombasto', isCompleted: false },
            { id: 14, txt: 'Celeritas', isCompleted: false },
            { id: 15, txt: 'Magneta', isCompleted: false },
            { id: 16, txt: 'RubberMan', isCompleted: false },
            { id: 17, txt: 'Dynama', isCompleted: false },
            { id: 18, txt: 'Dr IQ', isCompleted: false },
            { id: 19, txt: 'Magma', isCompleted: false },
            { id: 20, txt: 'Tornado', isCompleted: false }
        ];
        return { todos: todos };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map