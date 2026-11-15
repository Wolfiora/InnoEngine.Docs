---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.26768e7bdabdbc0819b338a2cb6c34989258cad30f7f9d2b7d222acc054534cb
symbol: engine:Inno.Core.Layers:M:Inno.Core.Layers.LayerStack.PopOverlay(Inno.Core.Layers.Layer)
title: LayerStack.PopOverlay
kind: api
owners:
- Inno.Core.Layers
apiSurface: source-clr
reviewed: 791df4a149c3b007b54969ab75bee3d3ad098fc83aeaddc01a8823cabc4b3513

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Detaches an overlay from this stack.

## Parameters

**Parameter `overlay`:** The overlay to detach.

## Returns

`true` when the layer was attached in the overlay region; otherwise, `false`.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `overlay` is `null`.

**Exception `T:System.ObjectDisposedException`:** Thrown when this stack has been disposed.
