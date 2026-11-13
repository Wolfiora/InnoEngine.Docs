---
uid: api.inno.adapter.platform.519d2d49ec00f982
symbol: "engine:Inno.Adapter.Platform:T:Inno.Adapter.Platform.PlatformNativeHandles"
source: xml
reviewed: 4d76d2ab81a23ec107ad5e00162d3a8f235fff7a618f705e3237b19bf7ebf7b5
title: "PlatformNativeHandles"
kind: api
owners: [Inno.Adapter.Platform]
apiSurface: source-clr
contracts:
- project.inno-adapter-platform
aliases: []
---

Borrows surface handles from a live window for cooperating native adapters.

## Remarks

Handles remain valid only while their window is alive. Consumers must not release them. The handle identifier selects the ABI; this value is not a runtime or scripting contract.

**Parameter `windowHandle`:** Native window handle, or a stable UTF-8 canvas selector for browser surfaces.

**Parameter `displayHandle`:** Native display handle when required by the platform.

**Parameter `handleKind`:** Platform handle kind.

**Returns:** A borrowed adapter-level surface description.
