---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.171fb601f14454321d2867a574e85a953a9fc40b8770b052a8be36311d5b9c08
symbol: engine:Inno.Adapter.Rendering:M:Inno.Adapter.Rendering.RenderingBackendCatalog.CreateDevice(Inno.Adapter.Rendering.RenderingBackendId,Inno.Adapter.Rendering.RenderingBackendOptions)
title: RenderingBackendCatalog.CreateDevice
kind: api
owners:
- Inno.Adapter.Rendering
apiSurface: source-clr
sourceFingerprint: ae0819a84d9bc0463b1398e3d7c05ccaa83113127642e458fe0ea4e3591dedd3
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
