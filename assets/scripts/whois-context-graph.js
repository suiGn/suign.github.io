// Live .me graph of Context C = (T, A) on sui-Gn.html.
// Uses published this.gui@4.3.0 GUI.LLMS and this.me@4.2.1 as-is (does not modify the LLMS project).
(function () {
  var mount = document.getElementById("context-graph");
  var G = window.GUI, React = window.React, ReactDOM = window.ReactDOM;
  var MeLib = window.Me;
  var Me = MeLib && (MeLib.default || MeLib.ME || MeLib);
  if (!mount || !G || !G.LLMS || !React || !ReactDOM || typeof Me !== "function") {
    if (mount) mount.remove();
    return;
  }

  var h = React.createElement;
  var me;
  try { me = new Me(); } catch (e) { me = Me(); }
  var seeds = [
    ["C.T.n1", "host"],
    ["C.T.n2", "process"],
    ["C.T.n6", "monad"],
    ["C.A.alice", 1],
    ["C.A.bob", 1]
  ];
  var meaningPath = "C.meaning";
  var meaningExpr = "A.alice + A.bob";
  var paths = seeds.map(function (row) { return row[0]; });

  function walk(root, path) {
    return String(path).split(".").reduce(function (node, key) { return node[key]; }, root);
  }

  seeds.forEach(function (row) { me[row[0]](row[1]); });
  walk(me, "C")["="]("meaning", meaningExpr);
  paths.push(meaningPath);

  var nodes = paths.map(function (path) {
    return { path: path, value: me(path), derived: path === meaningPath };
  });
  var explain = [];
  try { explain = [me.explain(meaningPath)]; } catch (e) { explain = []; }
  var edges = explain.flatMap(function (x) {
    return ((x && x.derivation && x.derivation.inputs) || []).map(function (input) {
      return { from: input.path, to: x.path };
    });
  });
  var ops = paths.map(function (path) {
    if (path !== meaningPath) return { op: "set", path: path, value: me(path) };
    var parts = path.split(".");
    var name = parts.pop();
    return { op: "define", path: parts.join("."), name: name, expr: meaningExpr };
  });

  var paneH = 320;
  var shared = {
    graph: { nodes: nodes, edges: edges },
    explain: explain,
    ops: ops,
    phrase: "Context C = (T, A)",
    changed: paths.slice(),
    graphHeight: paneH,
    graphMode: "interactive",
    explainOnSelect: true
  };

  // Page text ↔ code/graph: hovering T / A / meaning in the prose lights the paths they express.
  var refPaths = {
    T: "C.T.n1 C.T.n2 C.T.n6",
    A: "C.A.alice C.A.bob",
    M: "C.meaning C.A.alice C.A.bob"
  };
  function refsFor(active) {
    var on = {};
    if (!active) return on;
    var set = String(active).split(/\s+/);
    Object.keys(refPaths).forEach(function (k) {
      if (k === "M") return;
      if (refPaths[k].split(" ").some(function (p) { return set.indexOf(p) >= 0; })) on[k] = true;
    });
    if (set.indexOf(meaningPath) >= 0) on.M = true;
    return on;
  }

  function Llms() {
    var useState = React.useState, useEffect = React.useEffect;
    var hs = useState(null), hover = hs[0], setHover = hs[1];
    var ps = useState(null), pin = ps[0], setPin = ps[1];
    var active = hover || pin;

    useEffect(function () {
      var els = Array.prototype.slice.call(document.querySelectorAll("[data-me-ref]"));
      var off = els.map(function (el) {
        var path = refPaths[el.getAttribute("data-me-ref")];
        function enter() { setHover(path); }
        function leave() { setHover(null); }
        function click() { setPin(function (prev) { return prev === path ? null : path; }); }
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
        el.addEventListener("click", click);
        return function () {
          el.removeEventListener("mouseenter", enter);
          el.removeEventListener("mouseleave", leave);
          el.removeEventListener("click", click);
        };
      });
      return function () { off.forEach(function (f) { f(); }); };
    }, []);

    useEffect(function () {
      var on = refsFor(active);
      document.querySelectorAll("[data-me-ref]").forEach(function (el) {
        el.classList.toggle("is-active", !!on[el.getAttribute("data-me-ref")]);
      });
    }, [active]);

    var props = Object.assign({}, shared, {
      activePath: active,
      pinnedPath: pin,
      onHoverPath: setHover,
      onPinPath: function (path) { setPin(function (prev) { return prev === path ? null : path; }); }
    });
    var Box = G.Atoms && G.Atoms.Box;
    if (G.LLMS.Phrase && G.LLMS.Syntax && G.LLMS.Graph && Box) {
      var children = [h(G.LLMS.Phrase)];
      children.push(h(Box, {
        sx: {
          display: "grid",
          gridTemplateColumns: { xs: "minmax(0,1fr)", md: "minmax(0,1fr) minmax(0,1fr)" },
          gap: 1.5,
          mt: 1.25,
          alignItems: "stretch"
        }
      },
        h(Box, { sx: { minWidth: 0, height: paneH, minHeight: paneH, maxHeight: paneH, overflow: "auto" } }, h(G.LLMS.Syntax)),
        h(Box, { sx: { minWidth: 0, height: paneH, minHeight: paneH } }, h(G.LLMS.Graph, { height: paneH }))
      ));
      if (G.LLMS.Explain) children.push(h(G.LLMS.Explain));
      return h(G.LLMS, props, children);
    }
    return h(G.LLMS, props);
  }

  function App() {
    var inner = h(Llms);
    return G.Theme ? h(G.Theme, { initialThemeId: "neurons.me", initialMode: "dark" }, inner) : inner;
  }

  try {
    if (ReactDOM.createRoot) ReactDOM.createRoot(mount).render(h(App));
    else ReactDOM.render(h(App), mount);
  } catch (e) {
    mount.remove();
    console.error(e);
  }
})();
