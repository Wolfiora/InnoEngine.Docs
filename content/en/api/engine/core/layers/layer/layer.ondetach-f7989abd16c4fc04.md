---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f7989abd16c4fc043e2b33534fe2248a06165b5fb84f87c0917f6c59b9944fa4
symbol: engine:Inno.Core.Layers:M:Inno.Core.Layers.Layer.OnDetach
title: Layer.OnDetach
kind: api
owners:
- Inno.Core.Layers
apiSurface: source-clr
reviewed: 26cf3197f70991604909f79b3c0296475e8d3b02ad67c0807e550a2580f3d615
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

This callback also compensates a partially failed attachment. Throwing `T:Inno.Core.Execution.RetirementPendingException` retains ownership and permits a later cleanup retry. Completed cleanup steps must not be repeated on that retry.
