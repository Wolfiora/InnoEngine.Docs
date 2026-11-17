---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f0b4e3d72a773d3eb51a59c96c1b3faef7e464118eeaf605071d7b2f6da4a252
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderStorageType.Buffer(Inno.Rendering.Shaders.ShaderSourceType,Inno.Rendering.RenderStorageAccess)
title: ShaderStorageType.Buffer
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
reviewed: 3eebe94ce36db3f0784d3feeab33f7897ea0ace392969f2a938aae2f65df916f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `element`:** Non-void value layout; resources cannot be embedded in buffer elements.

**Parameter `access`:** Permitted memory operations.

## Returns

An immutable storage buffer description.

## Exceptions

**Exception `T:System.ArgumentException`:** The element contains void or resource handles.
