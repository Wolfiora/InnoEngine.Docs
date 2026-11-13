---
uid: api.a8e34f3384e3342955dd34f9e9b0c5d37188e9daba8fd5a58f3385e2a6222ebb
symbol: "scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetSerializationServices.Deserialize\u0060\u00601(System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: d565950678f3e14233016fb23b558502b6be28dd5f6ef03a08ee0ed50f86fba0
title: "Deserialize"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: editor-script
apiScope: Editor
---

Deserializes one structured value against the active importer candidate generation.

**Type parameter `TValue`:** The serializable value contract.

**Parameter `bytes`:** Complete structured bytes produced by the common serialization system.

**Returns:** A restored value owned by the caller.

**Exception `T:System.InvalidOperationException`:** Thrown when the value contains an asset reference but no candidate resolver is available.
