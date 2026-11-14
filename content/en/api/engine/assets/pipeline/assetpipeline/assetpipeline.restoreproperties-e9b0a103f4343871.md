---
uid: api.e9b0a103f4343871cfdce3e1f4a720a92de26338bf41778816b4d6a5c8f54356
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.RestoreProperties\u0060\u00601(System.Guid,System.Byte[],\u0060\u00600)"
source: xml
reviewed: 1722649e760dfd089aa638c92df7e3d368d18ac96e4d7a77ce98a4e204f9d5c5
title: "AssetPipeline.RestoreProperties"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Restores serialized properties to the existing asset object.

## Parameters

**Parameter `stableTypeId`:** The stable type id consumed by restore properties; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `propertyData`:** The property data consumed by restore properties; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `target`:** The existing target that receives the validated result.

## Type parameters

**Type parameter `TValue`:** Serialized asset object type receiving restored properties.
