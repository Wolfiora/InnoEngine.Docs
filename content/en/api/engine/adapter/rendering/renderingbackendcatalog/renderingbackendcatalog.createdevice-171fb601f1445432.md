---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.171fb601f14454321d2867a574e85a953a9fc40b8770b052a8be36311d5b9c08
symbol: engine:Inno.Adapter.Rendering:M:Inno.Adapter.Rendering.RenderingBackendCatalog.CreateDevice(Inno.Adapter.Rendering.RenderingBackendId,Inno.Adapter.Rendering.RenderingBackendOptions)
title: RenderingBackendCatalog.CreateDevice
kind: api
owners:
- Inno.Adapter.Rendering
apiSurface: source-clr
reviewed: d8546dfc5f6bbbaf67ec7d1b99ad297b3ef65aea1530ec027e5130ca6d7f38bb
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
