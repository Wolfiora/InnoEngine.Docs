---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.adapter.platform.519d2d49ec00f982
symbol: engine:Inno.Adapter.Platform:T:Inno.Adapter.Platform.PlatformNativeHandles
title: PlatformNativeHandles
kind: api
owners:
- Inno.Adapter.Platform
apiSurface: source-clr
reviewed: 93d544251d77c419ce080e1fea0d5fb767b7f0a1fabfe0aa7e179f08ed5f9427
contracts:
- project.inno-adapter-platform

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

Handles remain valid only while their window is alive. Consumers must not release them. The handle identifier selects the ABI; this value is not a runtime or scripting contract.

## Parameters

**Parameter `windowHandle`:** Native window handle, or a stable UTF-8 canvas selector for browser surfaces.

**Parameter `displayHandle`:** Native display handle when required by the platform.

**Parameter `handleKind`:** Platform handle kind.

## Returns

A borrowed adapter-level surface description.
