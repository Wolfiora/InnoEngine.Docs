---
uid: api.82ac3b1290fbd2545c3949ba631580a0bf2e876b81688fa95e595939d105483d
symbol: "engine:Inno.Core.Layers:M:Inno.Core.Layers.LayerStack.PushOverlay(Inno.Core.Layers.Layer)"
source: xml
reviewed: 9e9addaad9a0598ca0331b76719d1bb682b251867f69a3f8d48b29c5d0fff02b
title: "PushOverlay"
kind: api
owners: [Inno.Core.Layers]
apiSurface: source-clr
---

Attaches an overlay above all base layers and existing overlays.

**Parameter `overlay`:** The overlay to attach.

**Exception `T:System.ArgumentNullException`:** Thrown when `overlay` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the same instance is already attached or the event hub factory returns `null`.

**Exception `T:System.ObjectDisposedException`:** Thrown when this stack has been disposed.
