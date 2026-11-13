---
uid: api.49838bd59268f5e749acae55865e2e699299ce395e9ceafbc6ceeba8521f1f8c
symbol: "scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.MaterialPassResolver.Resolve(InnoEngine.Rendering.MaterialAsset,InnoEngine.Rendering.ShaderContractId,InnoEngine.Rendering.ShaderPassRoleId,InnoEngine.Rendering.GraphicsCapabilities)"
source: xml
reviewed: 70ebe01d0ec75c40997e4509a1d198d2788151621214dca1444c9ff07190f39e
title: "MaterialPassResolver.Resolve"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Resolves one capability-compatible pass.

**Parameter `material`:** Material whose shader and technique should be queried.

**Parameter `contractId`:** Rendering-provider contract required by the caller.

**Parameter `passRoleId`:** Provider-defined pass role required by the caller.

**Parameter `capabilities`:** Current device capability snapshot.

**Returns:** The selected technique and pass, or `null` when no compatible mapping exists.
