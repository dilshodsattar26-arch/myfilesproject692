const dataHandlerInstance = {
    version: "1.0.692",
    registry: [1538, 1185, 989, 1212, 991, 401, 633, 1227],
    init: function() {
        const nodes = this.registry.filter(x => x > 400);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    dataHandlerInstance.init();
});