---
uid: api.0983f8451befd417e15d6b7a69ad64ce6a8b5f457d869ac6ffafd7b314ff84ba
symbol: "engine:Inno.Adapter.Platform:M:Inno.Adapter.Platform.PlatformNativeHandles.#ctor(System.IntPtr,System.IntPtr,Inno.Adapter.Platform.PlatformNativeHandleId)"
source: xml
reviewed: 2ca3ac73dbc04d5f7b9512c62b45aa78a8ea08b73f5d0d111d0033425bb78500
title: "Constructor"
kind: api
owners: [Inno.Adapter.Platform]
apiSurface: source-clr
---

Borrows surface handles from a live window for cooperating native adapters.

## Remarks

Handles remain valid only while their window is alive. Consumers must not release them. The handle identifier selects the ABI; this value is not a runtime or scripting contract.

**Parameter `windowHandle`:** Native window handle, or a stable UTF-8 canvas selector for browser surfaces.

**Parameter `displayHandle`:** Native display handle when required by the platform.

**Parameter `handleKind`:** Platform handle kind.

**Returns:** A borrowed adapter-level surface description.
