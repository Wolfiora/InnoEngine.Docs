---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.adapter.platform.519d2d49ec00f982
symbol: engine:Inno.Adapter.Platform:T:Inno.Adapter.Platform.PlatformNativeHandles
title: PlatformNativeHandles
kind: api
owners:
- Inno.Adapter.Platform
apiSurface: source-clr
sourceFingerprint: dad8476e3680bc316c46beb922eb457012c2b7ffda4c6cc5aac0aa31394a515c
contracts:
- project.inno-adapter-platform

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Parameters

**Parameter `windowHandle`:** Native window handle, or a stable UTF-8 canvas selector for browser surfaces.

**Parameter `displayHandle`:** Native display handle when required by the platform.

**Parameter `handleKind`:** Platform handle kind.

## Returns

A borrowed adapter-level surface description.

## Remarks

Handles remain valid only while their window is alive. Consumers must not release them. The handle identifier selects the ABI; this value is not a runtime or scripting contract.
