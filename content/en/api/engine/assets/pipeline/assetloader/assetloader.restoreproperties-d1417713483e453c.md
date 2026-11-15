---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d1417713483e453c21172c9ac1e8360c5d8a18acac9736e2f31e09669b1b850b
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.RestoreProperties``1(System.Guid,System.Byte[],``0)
title: AssetLoader.RestoreProperties
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 977f99655e00806ef6cf6d034f675f65c8c0fe67bd0af2daf510fb82c4567438

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Restores serialized properties to the existing asset object.

## Parameters

**Parameter `stableTypeId`:** The stable type id consumed by restore properties; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `propertyData`:** The property data consumed by restore properties; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `target`:** The existing target that receives the validated result.

## Type parameters

**Type parameter `TValue`:** Serialized asset object type receiving restored properties.
