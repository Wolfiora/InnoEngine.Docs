---
uid: api.e5d63c0cbc321fe294e267aa5194a442ae1001c0d9a6a34237ebfd429a19ed09
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.ShaderDefinitionValidator.Validate(Inno.Rendering.Assets.ShaderDefinition,Inno.Rendering.GraphicsCapabilities)"
source: xml
reviewed: fe3625156797c7f024d368359ae42012a41f213ccde67d57eff778b13db78040
title: "ShaderDefinitionValidator.Validate"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: source-clr
---

Checks declaration identities, resource kinds, stage visibility and open technique mappings without mutating the candidate.

## Parameters

**Parameter `definition`:** The candidate runtime contract.

**Parameter `capabilities`:** Optional device capabilities; unsupported optional passes produce warnings.

## Returns

Immutable diagnostics; an empty collection indicates a valid declaration contract.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The definition is null.
