---
uid: api.82990866db7c91b1365117c8c0e6d2352526fc92015177e6316747e5d3c0cc84
symbol: "engine:Inno.Editor.Scripting:M:Inno.Editor.Scripting.IEditorScriptCompilation.RequestCompilation"
source: xml
reviewed: 9d0f3a4c0570e10e905809539a61a2c53a10e037e3458558ea84c2a18fd8a7b6
title: "RequestCompilation"
kind: api
owners: [Inno.Editor.Scripting]
apiSurface: source-clr
---

Queues a fresh cache-aware compilation for a build or simulation workflow.

**Returns:** A ticket bound to the exact request. Success requires activation and completed retirement verification; a faulted host returns a failed ticket and requires restart.
