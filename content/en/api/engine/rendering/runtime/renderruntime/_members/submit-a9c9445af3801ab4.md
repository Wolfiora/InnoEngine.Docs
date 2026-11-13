---
uid: api.a9c9445af3801ab4f0e3f3cf3c96fb42b4fa9cad60c6a74d8ad4f696332e7385
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderRuntime.Submit(Inno.Rendering.Runtime.RenderRequest)"
source: xml
reviewed: 4ebb060ce0cf9d255e951945cd00510b043c27bc7fdca1f0a804a3996453a85d
title: "Submit"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Submits validated work to the active backend for ordered processing.

**Parameter `request`:** The validated immutable request that defines this operation.

**Exception `T:System.InvalidOperationException`:** The bounded frame queue has reached capacity, retirement has started, or generation cleanup has faulted the owner. The request was not accepted.

**Exception `T:System.ObjectDisposedException`:** The rendering owner has retired.
