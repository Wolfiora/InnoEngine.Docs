---
uid: api.ba1948e829c1f71668605e7041ffac6e6c525deff5cb26cd308fae2cb7bce0ed
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorModule.OnStop(Inno.Editor.Core.EditorContext)"
source: xml
reviewed: 0671c357937c56832e0408e5db55bd076f93ac3b40d84dc9907d589a5404ff00
title: "EditorModule.OnStop"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Runs before the module generation is released and its disposable instances are destroyed.

## Remarks

This includes partial startup compensation. Pending retirement must throw RetirementPendingException and preserve unfinished ownership; completed steps must be idempotent across retries.

## Parameters

**Parameter `context`:** The shared editor context for the runtime being stopped.
