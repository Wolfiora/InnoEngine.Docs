---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.58d3b511e224c24c7a23533de2fec8dfb20410f5eeb041266d8778a65accb4c0
symbol: scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.MaterialPassResolver.Resolve(InnoEngine.Rendering.ShaderDefinition,InnoEngine.Rendering.ShaderTechniqueId,InnoEngine.Rendering.ShaderContractId,InnoEngine.Rendering.ShaderPassRoleId,InnoEngine.Rendering.GraphicsCapabilities)
title: MaterialPassResolver.Resolve
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: editor-script
reviewed: f9788b0e7a20f53c02d2a7a491caac23f9fe65e66d3dcd9b2cacd212111d5f19
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `definition`:** The immutable publication's detached material contract.

**Parameter `techniqueId`:** Explicit material technique, or an invalid ID to select the first compatible technique.

**Parameter `contractId`:** Open rendering contract required by the caller.

**Parameter `passRoleId`:** Open pass role required by the caller.

**Parameter `capabilities`:** Current target capability snapshot.

## Returns

The matching technique and pass, or null when this publication has no compatible mapping.

## Exceptions

**Exception `T:System.ArgumentException`:** A required contract or role identity is invalid.
