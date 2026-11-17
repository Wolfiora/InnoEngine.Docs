---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ef0372126a2edaa214f4384ee44dac9107ea62cdea328ed6bfe4bedd5811a9a8
symbol: engine:Inno.Adapter.Presentation:M:Inno.Adapter.Presentation.IPresentationContext.RenderFrame(System.Action,System.Action)
title: IPresentationContext.RenderFrame
kind: api
owners:
- Inno.Adapter.Presentation
apiSurface: source-clr
reviewed: 3e74f095d307af001798b1761b85f515ca8283b2086ef37adeb69d7b676ee62f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `drawFrame`:** Callback that emits presentation commands for the current frame.

**Parameter `prepareFrame`:** Optional synchronous preparation after the owned context and display metrics are selected, before frame creation. Failure prevents drawing and no partial frame is published.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The draw callback is null.

**Exception `T:System.InvalidOperationException`:** Another frame operation is active on this context.
