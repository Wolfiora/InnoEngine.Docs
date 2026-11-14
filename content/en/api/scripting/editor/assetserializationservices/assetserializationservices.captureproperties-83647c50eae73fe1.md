---
uid: api.83647c50eae73fe11f4f0ccb5dfc918c3e9d0914ccbe48eaf75682f126bd8d8a
symbol: "scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetSerializationServices.CaptureProperties\u0060\u00601(\u0060\u00600)"
source: xml
reviewed: 470f56c227fda2d77fe60be6e71d3d7d9cee5d6fdede23b0c9fac1e7417e0311
title: "AssetSerializationServices.CaptureProperties"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: editor-script
apiScope: Editor
---

Captures typed properties and their references as one neutral, owner-independent value.

**Type parameter `TValue`:** Current serializable settings contract.

**Parameter `value`:** Current generation settings object, never retained.

**Returns:** Frozen native properties with exact stable type identity and collected direct dependencies.
