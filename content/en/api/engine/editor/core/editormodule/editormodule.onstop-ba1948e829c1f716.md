---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ba1948e829c1f71668605e7041ffac6e6c525deff5cb26cd308fae2cb7bce0ed
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorModule.OnStop(Inno.Editor.Core.EditorContext)
title: EditorModule.OnStop
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
sourceFingerprint: 8d24c379385d858b2a85e2577d2aceb1959f3997d227bf7b69bbb8e9c9df3359
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The shared editor context for the runtime being stopped.

## Remarks

This includes partial startup compensation. Pending retirement must throw RetirementPendingException and preserve unfinished ownership; completed steps must be idempotent across retries.
