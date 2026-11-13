---
uid: api.inno.adapter.platform.519d2d49ec00f982
symbol: "engine:Inno.Adapter.Platform:T:Inno.Adapter.Platform.PlatformNativeHandles"
source: xml
reviewed: 079eaf0d315ce10c9e2cd399bd744815022a1689e87d0b7473adea1c03a3f400
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
