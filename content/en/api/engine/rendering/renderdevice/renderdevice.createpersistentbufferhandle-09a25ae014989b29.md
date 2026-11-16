---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.09a25ae014989b294bcc746b611ae490cc1db5e25730f373182b1e2e5c2c39f8
symbol: engine:Inno.Rendering:M:Inno.Rendering.RenderDevice.CreatePersistentBufferHandle(System.UInt64,System.UInt32)
title: RenderDevice.CreatePersistentBufferHandle
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
reviewed: 443aa699ae7996e604e3eca45456877d83eab258e605138e238be8be36d02869
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `value`:** The backend-owned non-zero buffer identity.

**Parameter `generation`:** The device generation that owns the buffer.

## Returns

An opaque buffer handle suitable for the public render-device contract.
