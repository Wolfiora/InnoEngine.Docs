---
uid: api.b058c551c246493365122426a8ee4906933e15e673fa1dac9da4463d57c26676
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.AcquireArtifact(System.Guid,System.String)"
source: xml
reviewed: 47fb26e179b105fe82f90b8b9c2c97b7f04a7dd08edc1c72a3369399021a2b8c
title: "AcquireArtifact"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Acquires an immutable output while excluding concurrent artifact collection.

**Parameter `persistentId`:** The source asset's persistent identity.

**Parameter `outputName`:** The required output protocol.

**Returns:** A lease retaining this exact artifact key, even after reimport or source deletion.

**Exception `T:System.InvalidOperationException`:** No current output can be resolved.
