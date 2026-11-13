---
uid: api.26768e7bdabdbc0819b338a2cb6c34989258cad30f7f9d2b7d222acc054534cb
symbol: "engine:Inno.Core.Layers:M:Inno.Core.Layers.LayerStack.PopOverlay(Inno.Core.Layers.Layer)"
source: xml
reviewed: e43ba066a426a15f115126d31488395abbe670af091a8a40625946a4ca08a1cd
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
