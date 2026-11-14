---
uid: api.3a1b96b533ecbb396514acdefe04d3589584fba785bcd3057a3db5cf1dc3d065
symbol: "scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetSerializationServices.GetStableTypeId\u0060\u00601"
source: xml
reviewed: 186330f63621443d183e916ce5e514ab1c6692d8c87ecec5892d56d92b9ee462
title: "AssetSerializationServices.GetStableTypeId"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: editor-script
apiScope: Editor
---

Resolves the stable persistent type identity of a registered serializable type.

**Type parameter `TValue`:** The registered type whose stable identity is required.

**Returns:** The stable type identifier owned by the active extension generation.

**Exception `T:System.InvalidOperationException`:** Thrown when `TValue` has no stable type registration.
