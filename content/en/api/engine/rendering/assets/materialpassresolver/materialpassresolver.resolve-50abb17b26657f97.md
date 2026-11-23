---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.50abb17b26657f972283625328d025c4cec7ec2e18547697e98a1cedd2150110
symbol: engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.MaterialPassResolver.Resolve(Inno.Rendering.Assets.MaterialAsset,Inno.Rendering.Assets.ShaderContractID,Inno.Rendering.Assets.ShaderPassRoleID,Inno.Rendering.GraphicsCapabilities)
title: MaterialPassResolver.Resolve
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: source-clr
sourceFingerprint: 11e914e7789f7069b2d411148f00f80915499dd686f1dcc5c3a600df6789cbce
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `material`:** Material whose shader and technique should be queried.

**Parameter `contractID`:** Rendering-provider contract required by the caller.

**Parameter `passRoleID`:** Provider-defined pass role required by the caller.

**Parameter `capabilities`:** Current device capability snapshot.

## Returns

The selected technique and pass, or `null` when no compatible mapping exists.
