---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b6438f07caea2820e79e7d11875c9e749fc96d55836f485308082e8c563f4844
symbol: scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.RenderShaderVariant.FromMaterial(InnoEngine.Rendering.MaterialAsset)
title: RenderShaderVariant.FromMaterial
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: editor-script
reviewed: c66ac893e0f45206fd3f04dcb7d6c2a863483e50a7e46fcfc541fdca41b155ef
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `material`:** The material whose declared keyword options are evaluated.

## Returns

The canonical variant shared by authoring compilation and runtime lookup.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the material has no shader definition or selects an unknown or conflicting option.
