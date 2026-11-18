---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.26768e7bdabdbc0819b338a2cb6c34989258cad30f7f9d2b7d222acc054534cb
symbol: engine:Inno.Core.Layers:M:Inno.Core.Layers.LayerStack.PopOverlay(Inno.Core.Layers.Layer)
title: LayerStack.PopOverlay
kind: api
owners:
- Inno.Core.Layers
apiSurface: source-clr
sourceFingerprint: 74ab846d1283a7e504baad6a6a5288c4ca52a1273a61bd54fa169dd1b2aacbaf
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `overlay`:** The overlay to detach.

## Returns

`true` when the layer was attached in the overlay region; otherwise, `false`.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `overlay` is `null`.

**Exception `T:System.ObjectDisposedException`:** Thrown when this stack has been disposed.
