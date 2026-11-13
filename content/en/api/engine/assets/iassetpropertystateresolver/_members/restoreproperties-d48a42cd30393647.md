---
uid: api.d48a42cd303936470c19e44aba6a4be01d63ca6ba7ef976d5b0a36d412008508
symbol: "engine:Inno.Assets:M:Inno.Assets.IAssetPropertyStateResolver.RestoreProperties\u0060\u00601(System.Guid,System.Byte[],\u0060\u00600)"
source: xml
reviewed: 8395b6d67ea067270edc3c6c42c852edb5dc6ea35a4d43f6d5195bd2082d6535
title: "RestoreProperties"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Restores a stable typed property payload into a caller-owned current-generation value.

**Type parameter `TValue`:** Declared native property contract.

**Parameter `stableTypeId`:** Stable identity captured with the properties.

**Parameter `propertyData`:** Native property bytes.

**Parameter `target`:** Detached destination. Referenced assets resolve in this owner.
