---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0983f8451befd417e15d6b7a69ad64ce6a8b5f457d869ac6ffafd7b314ff84ba
symbol: engine:Inno.Adapter.Platform:M:Inno.Adapter.Platform.PlatformNativeHandles.#ctor(System.IntPtr,System.IntPtr,Inno.Adapter.Platform.PlatformNativeHandleId)
title: PlatformNativeHandles.Constructor
kind: api
owners:
- Inno.Adapter.Platform
apiSurface: source-clr
reviewed: 30ca2592c22491dfcc895794f7f81d91dd379f16f1dd7aeaca758bf8e581174e
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
