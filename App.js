/**
 * <div id="parent">
 *      <div id="chid1">
 *          <h1></h1>
 *      <div/>
 *      <div id="chid2">
 *          <h1></h1>
 *      <div/>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "chid1" }, [
        React.createElement("h1", {}, "i am h1 tag"),
        React.createElement("h2", {}, "i am h2 tag"),
    ]),
    React.createElement("div", { id: "chid2" }, [
        React.createElement("h1", {}, "i am h1 tag"),
        React.createElement("h2", {}, "i am h2 tag"),
    ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
