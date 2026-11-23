---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.be32f8b6eb06064a6b35e34c397e44a065ad03bb915b18fa6622309a9156c5ef
symbol: engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.MaterialPassResolver.Resolve(Inno.Rendering.Assets.ShaderDefinition,Inno.Rendering.Assets.ShaderTechniqueID,Inno.Rendering.Assets.ShaderContractID,Inno.Rendering.Assets.ShaderPassRoleID,Inno.Rendering.GraphicsCapabilities)
title: MaterialPassResolver.Resolve
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: source-clr
sourceFingerprint: 1d1e20ef04473a4709cb36f30668a880f7be7779ad418e9b143921b66273cdae
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
