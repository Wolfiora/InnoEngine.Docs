---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f7f694cf9afed5633fea8998eccaf740415985197321b9fd4e20c2d9689c8650
symbol: engine:Inno.Rendering:M:Inno.Rendering.RenderDevice.CreatePersistentTextureHandle(System.UInt64,System.UInt32)
title: RenderDevice.CreatePersistentTextureHandle
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
reviewed: 590201a14499527c964e0512132761fecc827636ab2b9081ff8f2f42239756fe
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `value`:** The backend-owned non-zero texture identity.

**Parameter `generation`:** The device generation that owns the texture.

## Returns

An opaque texture handle suitable for the public render-device contract.
