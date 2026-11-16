---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.49838bd59268f5e749acae55865e2e699299ce395e9ceafbc6ceeba8521f1f8c
symbol: scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.MaterialPassResolver.Resolve(InnoEngine.Rendering.MaterialAsset,InnoEngine.Rendering.ShaderContractId,InnoEngine.Rendering.ShaderPassRoleId,InnoEngine.Rendering.GraphicsCapabilities)
title: MaterialPassResolver.Resolve
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: editor-script
reviewed: 6a3957da97f69745a4eca286c743ac77c35b574fa6328e4be1bf6081daa82294
apiScope: Runtime
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
