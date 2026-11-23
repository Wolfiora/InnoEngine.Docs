---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.135d258645a5fc17cbb6ffaaac35146a3afbf57fcc141dacb2b3e980ca67731f
symbol: engine:Inno.Adapter.Platform:M:Inno.Adapter.Platform.PlatformNativeHandles.#ctor(System.IntPtr,System.IntPtr,Inno.Adapter.Platform.PlatformNativeHandleID)
title: PlatformNativeHandles.Constructor
kind: api
owners:
- Inno.Adapter.Platform
apiSurface: source-clr
sourceFingerprint: a545e53508496f362f40893e67b6d073e82b53d1dbc28cb6a3f41db6a1dd8234
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `windowHandle`:** Native window handle, or a stable UTF-8 canvas selector for browser surfaces.

**Parameter `displayHandle`:** Native display handle when required by the platform.

**Parameter `handleKind`:** Platform handle kind.

## Returns

A borrowed adapter-level surface description.

## Remarks

Handles remain valid only while their window is alive. Consumers must not release them. The handle identifier selects the ABI; this value is not a runtime or scripting contract.
