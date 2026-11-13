---
uid: api.fbdfc8f0f592b797b874040d0ef35dbb1e2185365b1fbc51fa7f23eba5756af6
symbol: "engine:Inno.Scripting.Compiler:M:Inno.Scripting.Compiler.ScriptCompiler.CollectArtifacts(System.Collections.Generic.IEnumerable{System.String})"
source: xml
reviewed: b4367435a9ab4415947ec8d5d10a600bba2ba7dcaa6dac66ca357185302bd329
title: "ScriptCompiler.CollectArtifacts"
kind: api
owners: [Inno.Scripting.Compiler]
apiSurface: source-clr
---

Removes unreferenced compiler generations while retaining the supplied active directories.

**Parameter `retainedDirectories`:** The generation directories that remain reachable from active runtime sessions.

**Returns:** The number of obsolete generation directories removed from the compiler cache.
