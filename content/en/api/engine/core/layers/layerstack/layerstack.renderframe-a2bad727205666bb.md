---
uid: api.a2bad727205666bb2d597b6da7c7e94afa95157410c781eeb78713aab13ac47c
symbol: "engine:Inno.Core.Layers:M:Inno.Core.Layers.LayerStack.RenderFrame(System.Single)"
source: xml
reviewed: ab25fd9a61bacdffe2544ca8ef03113b4943069383834581356a0d1fa4970f07
title: "LayerStack.RenderFrame"
kind: api
owners: [Inno.Core.Layers]
apiSurface: source-clr
---

Executes preparation and submission in stack order, then completion in reverse order.

**Parameter `deltaTime`:** The elapsed frame time in seconds.

**Exception `T:System.AggregateException`:** Thrown when multiple render or unwind callbacks fail.

**Exception `T:System.ObjectDisposedException`:** Thrown when this stack has been disposed.
