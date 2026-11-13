---
uid: api.4d675c047562f7d6469785483427b3f09a670ba3d1dbad98b26f9d57d391b638
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSerializationServices.Serialize\u0060\u00601(\u0060\u00600)"
source: xml
reviewed: 45c234276d4bfbf2799dcac6891bf190ffe675bd3c76c46dfbd5cd9b3aa07349
title: "Serialize"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Serializes one structured value and declares every encountered asset reference as a runtime dependency.

**Type parameter `TValue`:** The serializable value contract.

**Parameter `value`:** The value to serialize through the active converter generation.

**Returns:** Deterministic structured bytes owned by the caller.

**Exception `T:System.ArgumentNullException`:** Thrown when `value` is `null`.
