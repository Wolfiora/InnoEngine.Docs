---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f0b4e3d72a773d3eb51a59c96c1b3faef7e464118eeaf605071d7b2f6da4a252
symbol: engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderStorageType.Buffer(Inno.Rendering.Shaders.ShaderSourceType,Inno.Rendering.RenderStorageAccess)
title: ShaderStorageType.Buffer
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: source-clr
sourceFingerprint: 9c02c49b2f5c520e9a7ab31874182e1c1b313b3c60c653d90750516c066c05b2
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
