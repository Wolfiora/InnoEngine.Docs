---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ba1948e829c1f71668605e7041ffac6e6c525deff5cb26cd308fae2cb7bce0ed
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorModule.OnStop(Inno.Editor.Core.EditorContext)
title: EditorModule.OnStop
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
sourceFingerprint: 759adc096e61d812e081fe3e33f5897085c57332ca40fce83df150057db1ea1e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

This includes partial startup compensation. Pending retirement must throw RetirementPendingException and preserve unfinished ownership; completed steps must be idempotent across retries.

## Parameters

**Parameter `context`:** The shared editor context for the runtime being stopped.
