---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6166ba76faf159c1cbc7c2dddf921129a857cd6d11bbc9a2640ee14d3cbf9b06
symbol: scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.MaterialPassResolver.Resolve(InnoEngine.Rendering.ShaderDefinition,InnoEngine.Rendering.ShaderTechniqueID,InnoEngine.Rendering.ShaderContractID,InnoEngine.Rendering.ShaderPassRoleID,InnoEngine.Rendering.GraphicsCapabilities)
title: MaterialPassResolver.Resolve
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: editor-script
sourceFingerprint: c960e253e36bdbf29f773f3972b169c402fd9b8ff796a4350a2df3f7779bf769
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `definition`:** The immutable publication's detached material contract.

**Parameter `techniqueID`:** Explicit material technique, or an invalid ID to select the first compatible technique.

**Parameter `contractID`:** Open rendering contract required by the caller.

**Parameter `passRoleID`:** Open pass role required by the caller.

**Parameter `capabilities`:** Current target capability snapshot.

## Returns

The matching technique and pass, or null when this publication has no compatible mapping.

## Exceptions

**Exception `T:System.ArgumentException`:** A required contract or role identity is invalid.
