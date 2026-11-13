---
uid: api.fbdfc8f0f592b797b874040d0ef35dbb1e2185365b1fbc51fa7f23eba5756af6
symbol: "engine:Inno.Scripting.Compiler:M:Inno.Scripting.Compiler.ScriptCompiler.CollectArtifacts(System.Collections.Generic.IEnumerable{System.String})"
source: xml
reviewed: 93ed70ffa153903e6e4ba89c0aed98667a4747eff7be03b3fa2fdb17093f251b
title: "CollectArtifacts"
kind: api
owners: [Inno.Scripting.Compiler]
apiSurface: source-clr
---

Removes unreferenced compiler generations while retaining the supplied active directories.

**Parameter `retainedDirectories`:** The generation directories that remain reachable from active runtime sessions.

**Returns:** The number of obsolete generation directories removed from the compiler cache.
