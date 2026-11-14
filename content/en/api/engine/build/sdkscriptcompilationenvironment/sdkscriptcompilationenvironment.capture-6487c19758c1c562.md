---
uid: api.6487c19758c1c56279599b0556611988d52f668578edc347046f22f1a67d5a4c
symbol: "engine:Inno.Build:M:Inno.Build.SdkScriptCompilationEnvironment.Capture(System.Threading.CancellationToken)"
source: xml
reviewed: 8c83058ab36949a11afdf75c4fb5e0d42fe10914f98559f5eefdf62eda749567
title: "SdkScriptCompilationEnvironment.Capture"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Captures current SDK inputs without choosing a framework inside the scripting compiler.

## Parameters

**Parameter `cancellationToken`:** Cancels input preparation before any script artifact is published.

## Returns

Complete immutable inputs; missing or inconsistent SDK inputs must fail explicitly.
