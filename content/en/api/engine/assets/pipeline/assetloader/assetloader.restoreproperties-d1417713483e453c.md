---
uid: api.d1417713483e453c21172c9ac1e8360c5d8a18acac9736e2f31e09669b1b850b
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.RestoreProperties\u0060\u00601(System.Guid,System.Byte[],\u0060\u00600)"
source: xml
reviewed: 977f99655e00806ef6cf6d034f675f65c8c0fe67bd0af2daf510fb82c4567438
title: "AssetLoader.RestoreProperties"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Restores serialized properties to the existing asset object.

**Parameter `stableTypeId`:** The stable type id consumed by restore properties; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `propertyData`:** The property data consumed by restore properties; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `target`:** The existing target that receives the validated result.

**Type parameter `TValue`:** Serialized asset object type receiving restored properties.
