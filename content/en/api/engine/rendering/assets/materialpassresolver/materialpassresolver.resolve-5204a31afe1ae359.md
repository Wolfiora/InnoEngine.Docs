---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.5204a31afe1ae359cb51724b4b146ae39df51b1a85ff63a2ac689eaa228f37f4
symbol: engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.MaterialPassResolver.Resolve(Inno.Rendering.Assets.MaterialAsset,Inno.Rendering.Assets.ShaderContractId,Inno.Rendering.Assets.ShaderPassRoleId,Inno.Rendering.GraphicsCapabilities)
title: MaterialPassResolver.Resolve
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: source-clr
reviewed: 8b7f9cd47834b13d6150670ed1c8209764d3358fe4aa8ac94807b74ec73bc834
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `material`:** Material whose shader and technique should be queried.

**Parameter `contractId`:** Rendering-provider contract required by the caller.

**Parameter `passRoleId`:** Provider-defined pass role required by the caller.

**Parameter `capabilities`:** Current device capability snapshot.

## Returns

The selected technique and pass, or `null` when no compatible mapping exists.
