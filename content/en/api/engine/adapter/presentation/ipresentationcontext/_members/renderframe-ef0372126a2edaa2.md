---
uid: api.ef0372126a2edaa214f4384ee44dac9107ea62cdea328ed6bfe4bedd5811a9a8
symbol: "engine:Inno.Adapter.Presentation:M:Inno.Adapter.Presentation.IPresentationContext.RenderFrame(System.Action,System.Action)"
source: xml
reviewed: 8ba1f9a9948e99b1e6fa7f4e58c82edee0acd79ac8e43793bceb09cc82d0c2bd
title: "RenderFrame"
kind: api
owners: [Inno.Adapter.Presentation]
apiSurface: source-clr
---

Builds one presentation frame by invoking the host draw callback.

**Parameter `drawFrame`:** Callback that emits presentation commands for the current frame.

**Parameter `prepareFrame`:** Optional synchronous preparation after the owned context and display metrics are selected, before frame creation. Failure prevents drawing and no partial frame is published.

**Exception `T:System.ArgumentNullException`:** The draw callback is null.

**Exception `T:System.InvalidOperationException`:** Another frame operation is active on this context.
