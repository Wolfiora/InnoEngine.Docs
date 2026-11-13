---
uid: api.03e9f97e11b588e5afdc2d6c2664eb2f9833ee6ce6034488143f1f20d6ff5bd7
symbol: "scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetSerializationServices.Serialize\u0060\u00601(\u0060\u00600)"
source: xml
reviewed: 3a6f3bcbd64e4f726eed6340fdf968e30bc53395973bd630cbed3b08b6521e9a
title: "Serialize"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: editor-script
apiScope: Editor
---

Serializes one structured value and declares every encountered asset reference as a runtime dependency.

**Type parameter `TValue`:** The serializable value contract.

**Parameter `value`:** The value to serialize through the active converter generation.

**Returns:** Deterministic structured bytes owned by the caller.

**Exception `T:System.ArgumentNullException`:** Thrown when `value` is `null`.
