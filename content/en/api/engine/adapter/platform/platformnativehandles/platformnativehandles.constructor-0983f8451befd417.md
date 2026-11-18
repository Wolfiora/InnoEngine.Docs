---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.0983f8451befd417e15d6b7a69ad64ce6a8b5f457d869ac6ffafd7b314ff84ba
symbol: engine:Inno.Adapter.Platform:M:Inno.Adapter.Platform.PlatformNativeHandles.#ctor(System.IntPtr,System.IntPtr,Inno.Adapter.Platform.PlatformNativeHandleId)
title: PlatformNativeHandles.Constructor
kind: api
owners:
- Inno.Adapter.Platform
apiSurface: source-clr
sourceFingerprint: 42ebc6b5b55265c8f7457f30b7b98920f27bbac9e027eb820bf743fc085d0731
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Handles remain valid only while their window is alive. Consumers must not release them. The handle identifier selects the ABI; this value is not a runtime or scripting contract.

## Parameters

**Parameter `windowHandle`:** Native window handle, or a stable UTF-8 canvas selector for browser surfaces.

**Parameter `displayHandle`:** Native display handle when required by the platform.

**Parameter `handleKind`:** Platform handle kind.

## Returns

A borrowed adapter-level surface description.
