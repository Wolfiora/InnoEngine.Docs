---
uid: api.52971e43aacae56e6f624d86015b3558a33ff6eed2c98bcfb4df55def73c8b7d
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSerializationServices.GetStableTypeId\u0060\u00601"
source: xml
reviewed: a21f99f47aef8d4e37194fbe43be30f400bcdff76fca35ef7e0e35092babdfe5
title: "GetStableTypeId"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Resolves the stable persistent type identity of a registered serializable type.

**Type parameter `TValue`:** The registered type whose stable identity is required.

**Returns:** The stable type identifier owned by the active extension generation.

**Exception `T:System.InvalidOperationException`:** Thrown when `TValue` has no stable type registration.
