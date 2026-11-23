---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.0dae950d5f48ab6fd7c187e65397aaa5bfa1ee29416f0fdcfa15187e731e7a86
symbol: scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.MaterialPassResolver.Resolve(InnoEngine.Rendering.MaterialAsset,InnoEngine.Rendering.ShaderContractID,InnoEngine.Rendering.ShaderPassRoleID,InnoEngine.Rendering.GraphicsCapabilities)
title: MaterialPassResolver.Resolve
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: editor-script
sourceFingerprint: 15b5d86f24ed99fdade4ec62a93f83e45478e8ec84cb537b4195d466f3fbc0c7
apiScope: Runtime
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
