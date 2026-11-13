---
uid: api.598e32a0dce45051fbbd5e9cec80b79098bc29bf953467f30c6272dec3ca4b58
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSerializationServices.CaptureProperties\u0060\u00601(\u0060\u00600)"
source: xml
reviewed: 38c543249ef92a597b733fddfc9bc5df9616ce6b9f30f339d0219218435b4d23
title: "CaptureProperties"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Captures typed properties and their references as one neutral, owner-independent value.

**Type parameter `TValue`:** Current serializable settings contract.

**Parameter `value`:** Current generation settings object, never retained.

**Returns:** Frozen native properties with exact stable type identity and collected direct dependencies.
