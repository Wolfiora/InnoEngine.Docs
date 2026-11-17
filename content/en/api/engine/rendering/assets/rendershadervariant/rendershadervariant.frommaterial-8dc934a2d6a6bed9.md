---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8dc934a2d6a6bed9ed93510608e6ec58af2e07f9fa73bc59eab1e1b7b7fe91ff
symbol: engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderShaderVariant.FromMaterial(Inno.Rendering.Assets.MaterialAsset,Inno.Rendering.Assets.ShaderDefinition)
title: RenderShaderVariant.FromMaterial
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: source-clr
reviewed: 7228e116f70e3f9c2e64ac0f5c3cc5ae3b08e17628ee13842fb8e5f673adbc2b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `material`:** Material whose selected options are evaluated.

**Parameter `definition`:** Captured shader contract, which may be the last successful publication.

## Returns

The canonical keyword selection for this publication.

## Exceptions

**Exception `T:System.InvalidOperationException`:** A selected option is unknown or conflicts with another option.
