---
uid: api.83647c50eae73fe11f4f0ccb5dfc918c3e9d0914ccbe48eaf75682f126bd8d8a
symbol: "scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetSerializationServices.CaptureProperties\u0060\u00601(\u0060\u00600)"
source: xml
reviewed: dbc1487f21c0393c34d9c8d0caefb3ad7da4b6a0430fdba6b9711171838b8e5b
title: "CaptureProperties"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: editor-script
apiScope: Editor
---

Captures typed properties and their references as one neutral, owner-independent value.

**Type parameter `TValue`:** Current serializable settings contract.

**Parameter `value`:** Current generation settings object, never retained.

**Returns:** Frozen native properties with exact stable type identity and collected direct dependencies.
