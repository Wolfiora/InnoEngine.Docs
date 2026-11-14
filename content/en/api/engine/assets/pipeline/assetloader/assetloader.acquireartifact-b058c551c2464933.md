---
uid: api.b058c551c246493365122426a8ee4906933e15e673fa1dac9da4463d57c26676
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.AcquireArtifact(System.Guid,System.String)"
source: xml
reviewed: 08a3f2a352b517b17abc8306737e07eae52500b5c9af64db7f324a78523becb2
title: "AssetLoader.AcquireArtifact"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Acquires an immutable output while excluding concurrent artifact collection.

## Parameters

**Parameter `persistentId`:** The source asset's persistent identity.

**Parameter `outputName`:** The required output protocol.

## Returns

A lease retaining this exact artifact key, even after reimport or source deletion.

## Exceptions

**Exception `T:System.InvalidOperationException`:** No current output can be resolved.
