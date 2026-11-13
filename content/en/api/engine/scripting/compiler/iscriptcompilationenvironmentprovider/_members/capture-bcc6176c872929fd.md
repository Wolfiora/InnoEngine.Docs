---
uid: api.bcc6176c872929fd5be11099c8b3441fbb17ee5c5fdaf0f352531150d48c0bf7
symbol: "engine:Inno.Scripting.Compiler:M:Inno.Scripting.Compiler.IScriptCompilationEnvironmentProvider.Capture(System.Threading.CancellationToken)"
source: xml
reviewed: 915eadc12e418836c1877299bb9abc30650f87ba1fb401d521f4e3d81af25654
title: "Capture"
kind: api
owners: [Inno.Scripting.Compiler]
apiSurface: source-clr
---

Captures current SDK inputs without choosing a framework inside the scripting compiler.

**Parameter `cancellationToken`:** Cancels input preparation before any script artifact is published.

**Returns:** Complete immutable inputs; missing or inconsistent SDK inputs must fail explicitly.
