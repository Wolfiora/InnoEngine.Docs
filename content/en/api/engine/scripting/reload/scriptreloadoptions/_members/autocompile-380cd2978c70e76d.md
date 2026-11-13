---
uid: api.380cd2978c70e76df87a107d9769eacc6c395f79f69a2e26b6fd211d92b9c1e1
symbol: "engine:Inno.Scripting.Reload:P:Inno.Scripting.Reload.ScriptReloadOptions.autoCompile"
source: xml
reviewed: d47b951d7453a21e2ac9038cf7248cef30f46c9181e7a24fae6047dabee65411
title: "autoCompile"
kind: api
owners: [Inno.Scripting.Reload]
apiSurface: source-clr
---

Gets whether startup and subsequent source changes request automatic compilation.

## Remarks

The initial request starts immediately. Later change requests are consumed only at a focused Editor safe point after the configured debounce duration.
