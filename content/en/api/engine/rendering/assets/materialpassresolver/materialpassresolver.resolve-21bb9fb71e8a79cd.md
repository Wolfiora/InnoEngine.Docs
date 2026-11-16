---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.21bb9fb71e8a79cda933360c1239e73c0ad60d78559178d3498d969f8a152cae
symbol: engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.MaterialPassResolver.Resolve(Inno.Rendering.Assets.ShaderDefinition,Inno.Rendering.Assets.ShaderTechniqueId,Inno.Rendering.Assets.ShaderContractId,Inno.Rendering.Assets.ShaderPassRoleId,Inno.Rendering.GraphicsCapabilities)
title: MaterialPassResolver.Resolve
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: source-clr
reviewed: 66ee9fb35ad6021aee299d0e3695acf2e92b9cd6f4a568078df02e1e864c144f
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
