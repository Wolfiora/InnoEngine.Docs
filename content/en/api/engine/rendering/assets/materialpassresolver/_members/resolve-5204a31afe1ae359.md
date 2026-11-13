---
uid: api.5204a31afe1ae359cb51724b4b146ae39df51b1a85ff63a2ac689eaa228f37f4
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.MaterialPassResolver.Resolve(Inno.Rendering.Assets.MaterialAsset,Inno.Rendering.Assets.ShaderContractId,Inno.Rendering.Assets.ShaderPassRoleId,Inno.Rendering.GraphicsCapabilities)"
source: xml
reviewed: 93673b40e486b47b0a9cd09e76bd813a1669854ee21739c9da3692b1fb71c73a
title: "Resolve"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: source-clr
---

Resolves one capability-compatible pass.

**Parameter `material`:** Material whose shader and technique should be queried.

**Parameter `contractId`:** Rendering-provider contract required by the caller.

**Parameter `passRoleId`:** Provider-defined pass role required by the caller.

**Parameter `capabilities`:** Current device capability snapshot.

**Returns:** The selected technique and pass, or `null` when no compatible mapping exists.
