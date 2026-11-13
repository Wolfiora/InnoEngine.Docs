---
uid: api.a2bad727205666bb2d597b6da7c7e94afa95157410c781eeb78713aab13ac47c
symbol: "engine:Inno.Core.Layers:M:Inno.Core.Layers.LayerStack.RenderFrame(System.Single)"
source: xml
reviewed: bd147f7f87d0f77aa955e794a22a70d33d7ac632da9cee6c868719dc600f48b8
title: "RenderFrame"
kind: api
owners: [Inno.Core.Layers]
apiSurface: source-clr
---

Executes preparation and submission in stack order, then completion in reverse order.

**Parameter `deltaTime`:** The elapsed frame time in seconds.

**Exception `T:System.AggregateException`:** Thrown when multiple render or unwind callbacks fail.

**Exception `T:System.ObjectDisposedException`:** Thrown when this stack has been disposed.
