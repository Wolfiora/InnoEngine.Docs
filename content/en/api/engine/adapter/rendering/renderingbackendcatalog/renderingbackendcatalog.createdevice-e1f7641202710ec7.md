---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.e1f7641202710ec7e62701c24171d8786527934cc731527cbf0ddff43ac642c3
symbol: engine:Inno.Adapter.Rendering:M:Inno.Adapter.Rendering.RenderingBackendCatalog.CreateDevice(Inno.Adapter.Rendering.RenderingBackendID,Inno.Adapter.Rendering.RenderingBackendOptions)
title: RenderingBackendCatalog.CreateDevice
kind: api
owners:
- Inno.Adapter.Rendering
apiSurface: source-clr
sourceFingerprint: cc93a3f16172b1d09fb50b119647984f15363ad6b5e06ab0d28874167874bad2
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `backend`:** The backend consumed by create device; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `options`:** The validated configuration that controls this operation.

## Returns

The validated irender device that represents the completed operation.

## Exceptions

**Exception `T:System.NotSupportedException`:** No provider is registered for this exact backend ID.
