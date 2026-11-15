---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ba1948e829c1f71668605e7041ffac6e6c525deff5cb26cd308fae2cb7bce0ed
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorModule.OnStop(Inno.Editor.Core.EditorContext)
title: EditorModule.OnStop
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
reviewed: 0671c357937c56832e0408e5db55bd076f93ac3b40d84dc9907d589a5404ff00

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Remarks

This includes partial startup compensation. Pending retirement must throw RetirementPendingException and preserve unfinished ownership; completed steps must be idempotent across retries.

## Parameters

**Parameter `context`:** The shared editor context for the runtime being stopped.
