---
uid: api.bcc6176c872929fd5be11099c8b3441fbb17ee5c5fdaf0f352531150d48c0bf7
symbol: "engine:Inno.Scripting.Compiler:M:Inno.Scripting.Compiler.IScriptCompilationEnvironmentProvider.Capture(System.Threading.CancellationToken)"
source: xml
reviewed: 247c3e3629c8342a2eedbf656039c21c8ef9701b5776b45a9f4d6941993a3caf
title: "Capture"
kind: api
owners: [Inno.Scripting.Compiler]
apiSurface: source-clr
---

Captures current SDK inputs without choosing a framework inside the scripting compiler.

**Parameter `cancellationToken`:** Cancels input preparation before any script artifact is published.

**Returns:** Complete immutable inputs; missing or inconsistent SDK inputs must fail explicitly.
