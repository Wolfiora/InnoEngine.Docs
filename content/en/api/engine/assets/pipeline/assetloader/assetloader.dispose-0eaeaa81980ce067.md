---
uid: api.0eaeaa81980ce067a748480a4b4cd61dd602c6266388a62241dbbace341f3f78
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.Dispose"
source: xml
reviewed: 7a0749a013690721653dcf5de5d97110ded2dec085bd71485ae44b5f7c829574
title: "AssetLoader.Dispose"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Stops new loads and releases canonical assets before their registries and diagnostics.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A load, serialized operation or unload hook is still active. Retain the loader and retry after quiescence.

**Exception `T:System.AggregateException`:** Completed releases failed; all quiescent resources have still been attempted.
