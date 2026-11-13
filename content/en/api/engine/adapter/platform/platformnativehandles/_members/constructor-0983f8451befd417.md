---
uid: api.0983f8451befd417e15d6b7a69ad64ce6a8b5f457d869ac6ffafd7b314ff84ba
symbol: "engine:Inno.Adapter.Platform:M:Inno.Adapter.Platform.PlatformNativeHandles.#ctor(System.IntPtr,System.IntPtr,Inno.Adapter.Platform.PlatformNativeHandleId)"
source: xml
reviewed: b4c5b575e132cef61fb2747f6fff29c6d9db8d5f45499c5551f9a0b2925e5695
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
