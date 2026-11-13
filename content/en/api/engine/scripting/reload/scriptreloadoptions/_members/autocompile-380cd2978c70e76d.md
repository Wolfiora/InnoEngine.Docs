---
uid: api.380cd2978c70e76df87a107d9769eacc6c395f79f69a2e26b6fd211d92b9c1e1
symbol: "engine:Inno.Scripting.Reload:P:Inno.Scripting.Reload.ScriptReloadOptions.autoCompile"
source: xml
reviewed: 9f06ac8b424523589f7abfbed8775d29169cfb3487cf5e15dd49287652d230a7
title: "autoCompile"
kind: api
owners: [Inno.Scripting.Reload]
apiSurface: source-clr
---

Gets whether startup and subsequent source changes request automatic compilation.

## Remarks

The initial request starts immediately. Later change requests are consumed only at a focused Editor safe point after the configured debounce duration.
