---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.bb6012ca65251a4f2eef591f146a8b3f47e927842fe0bb6bfa43a7fe752c6600
symbol: engine:Inno.Adapter.Presentation:M:Inno.Adapter.Presentation.IPresentationContext.TryGetWindowId(System.UInt32,System.UInt32@)
title: IPresentationContext.TryGetWindowId
kind: api
owners:
- Inno.Adapter.Presentation
apiSurface: source-clr
reviewed: 39c85269a063834465b5ab1011cab724c8338114ae1a242df0a9892e69e08f50

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Resolves the platform window that owns a presentation viewport.

## Parameters

**Parameter `viewportId`:** The presentation viewport identity.

**Parameter `windowId`:** The owning platform window identity when available.

## Returns

`true` when the viewport has a live platform window.
