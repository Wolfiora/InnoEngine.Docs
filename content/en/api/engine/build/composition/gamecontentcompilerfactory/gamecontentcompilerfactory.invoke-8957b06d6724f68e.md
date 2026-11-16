---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8957b06d6724f68ec27419f9d5b41f2bab9f4e8f576cd438d86afbdbbf5f5543
symbol: engine:Inno.Build.Composition:M:Inno.Build.Composition.GameContentCompilerFactory.Invoke(Inno.Assets.Pipeline.AssetPipeline,Inno.Core.Serialization.SerializationRegistry,Inno.Extensibility.Types.TypeCatalog)
title: GameContentCompilerFactory.Invoke
kind: api
owners:
- Inno.Build.Composition
apiSurface: source-clr
reviewed: c0d6170c23e085cd0267829be25ed3b7d95a28bff40d0e72111d85571de9b89f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `assets`:** The asset owner whose content the build freezes.

**Parameter `serialization`:** The matching serialization registry; ownership remains with the host.

**Parameter `types`:** The matching extension catalog; the compiler must not outlive its pipeline.

## Returns

A non-null scoped compiler that never disposes or globally retains these services.
