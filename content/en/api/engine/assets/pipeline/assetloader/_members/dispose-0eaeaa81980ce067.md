---
uid: api.0eaeaa81980ce067a748480a4b4cd61dd602c6266388a62241dbbace341f3f78
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.Dispose"
source: xml
reviewed: 3f850661720d7a36e61d07068fdf88d8f5490bda5e5174b7e12e3f0f06b37f5d
title: "Dispose"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Stops new loads and releases canonical assets before their registries and diagnostics.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A load, serialized operation or unload hook is still active. Retain the loader and retry after quiescence.

**Exception `T:System.AggregateException`:** Completed releases failed; all quiescent resources have still been attempted.
