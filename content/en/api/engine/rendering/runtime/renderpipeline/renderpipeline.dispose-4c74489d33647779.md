---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4c74489d336477793332dd193e138fb11a997b64a19ae12b8eeb57a95a764965
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderPipeline.Dispose(System.Boolean)
title: RenderPipeline.Dispose
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: 92cf330f81cd45856dbb58ef25e319ed009450c614ed04ea85b2bb76ae9edc52

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Releases managed generation-scoped state.

## Parameters

**Parameter `disposing`:** Always true for explicit disposal.

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Retirement cannot complete yet; subsequent calls resume this hook with its remaining owned resources.
