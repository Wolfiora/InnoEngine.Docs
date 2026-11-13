---
uid: api.e9b0a103f4343871cfdce3e1f4a720a92de26338bf41778816b4d6a5c8f54356
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.RestoreProperties\u0060\u00601(System.Guid,System.Byte[],\u0060\u00600)"
source: xml
reviewed: 2639c7dc41b75d68e0750c2cd3e8df4c2da1032aa7d6ba7e03b9245b4c26da23
title: "RestoreProperties"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Restores serialized properties to the existing asset object.

**Parameter `stableTypeId`:** The stable type id consumed by restore properties; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `propertyData`:** The property data consumed by restore properties; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `target`:** The existing target that receives the validated result.

**Type parameter `TValue`:** Serialized asset object type receiving restored properties.
