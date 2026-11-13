---
uid: api.26768e7bdabdbc0819b338a2cb6c34989258cad30f7f9d2b7d222acc054534cb
symbol: "engine:Inno.Core.Layers:M:Inno.Core.Layers.LayerStack.PopOverlay(Inno.Core.Layers.Layer)"
source: xml
reviewed: 791df4a149c3b007b54969ab75bee3d3ad098fc83aeaddc01a8823cabc4b3513
title: "PopOverlay"
kind: api
owners: [Inno.Core.Layers]
apiSurface: source-clr
---

Detaches an overlay from this stack.

**Parameter `overlay`:** The overlay to detach.

**Returns:** `true` when the layer was attached in the overlay region; otherwise, `false`.

**Exception `T:System.ArgumentNullException`:** Thrown when `overlay` is `null`.

**Exception `T:System.ObjectDisposedException`:** Thrown when this stack has been disposed.
