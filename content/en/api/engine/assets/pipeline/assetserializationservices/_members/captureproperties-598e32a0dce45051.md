---
uid: api.598e32a0dce45051fbbd5e9cec80b79098bc29bf953467f30c6272dec3ca4b58
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSerializationServices.CaptureProperties\u0060\u00601(\u0060\u00600)"
source: xml
reviewed: af24f91f72d1531ddea7288e471f5474bc503a56a408274ab772123c3a8f24dc
title: "CaptureProperties"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Captures typed properties and their references as one neutral, owner-independent value.

**Type parameter `TValue`:** Current serializable settings contract.

**Parameter `value`:** Current generation settings object, never retained.

**Returns:** Frozen native properties with exact stable type identity and collected direct dependencies.
