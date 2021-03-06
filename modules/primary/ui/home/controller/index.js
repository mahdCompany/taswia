mod.server.router.use('/public/assets/home', mod.server.express.static(__dirname + '/../public'));

mod.server.router.get("/", function (req, res) {
 res.send(mod.ui.master.encapsulate(mod.server.jade.renderFile(mod.server.path.resolve(__dirname + "/../views/view_1.jade"))));
});

mod.server.iosync.query("/", function (params, session, callback) {
  callback({
    content: mod.server.jade.renderFile(mod.server.path.resolve(__dirname + "/../views/view_1.jade"))
  });
});

mod.server.iosync.watch("/test", "/test", function (patch) {
  console.log("patch detected");
})

var test = "default value";
mod.server.iosync.bind("/test", "global",
function (callback) {
  callback(test);
},
function (patch) {
  test = patch.value;
  console.log(patch);
});
