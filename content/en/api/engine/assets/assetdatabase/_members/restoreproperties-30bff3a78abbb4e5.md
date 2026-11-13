---
uid: api.30bff3a78abbb4e5c6f68fb90ac7dae29ac63344b22bef188f89b1d913670497
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetDatabase.RestoreProperties\u0060\u00601(System.Guid,System.Byte[],\u0060\u00600)"
source: xml
reviewed: b4db865e605dd4663ad0236896009c9f71bc74921b029e2a0d527063aa73ddd0
title: "RestoreProperties"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Restores serialized properties to the existing asset object.

**Parameter `stableTypeId`:** The stable type id consumed by restore properties; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `propertyData`:** The property data consumed by restore properties; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `target`:** The existing target that receives the validated result.

**Type parameter `TValue`:** Serialized asset object type receiving restored properties.
