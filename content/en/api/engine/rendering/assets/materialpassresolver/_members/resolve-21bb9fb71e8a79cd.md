---
uid: api.21bb9fb71e8a79cda933360c1239e73c0ad60d78559178d3498d969f8a152cae
symbol: "engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.MaterialPassResolver.Resolve(Inno.Rendering.Assets.ShaderDefinition,Inno.Rendering.Assets.ShaderTechniqueId,Inno.Rendering.Assets.ShaderContractId,Inno.Rendering.Assets.ShaderPassRoleId,Inno.Rendering.GraphicsCapabilities)"
source: xml
reviewed: 337c9b15f67df6a327527846b48d83643f40b5b6c0bfafe192a951b83426286c
title: "Resolve"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: source-clr
---

Resolves a role against an exact published shader contract rather than a possibly newer authoring asset.

**Parameter `definition`:** The immutable publication's detached material contract.

**Parameter `techniqueId`:** Explicit material technique, or an invalid ID to select the first compatible technique.

**Parameter `contractId`:** Open rendering contract required by the caller.

**Parameter `passRoleId`:** Open pass role required by the caller.

**Parameter `capabilities`:** Current target capability snapshot.

**Returns:** The matching technique and pass, or null when this publication has no compatible mapping.

**Exception `T:System.ArgumentException`:** A required contract or role identity is invalid.
