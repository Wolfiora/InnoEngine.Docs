---
uid: api.8957b06d6724f68ec27419f9d5b41f2bab9f4e8f576cd438d86afbdbbf5f5543
symbol: "engine:Inno.Build.Composition:M:Inno.Build.Composition.GameContentCompilerFactory.Invoke(Inno.Assets.Pipeline.AssetPipeline,Inno.Core.Serialization.SerializationRegistry,Inno.Extensibility.Types.TypeCatalog)"
source: xml
reviewed: ed25d3a46c62b5f32e5dbcbcbd7c7ce97e7d580d743721c80188edb500d0ac4a
title: "GameContentCompilerFactory.Invoke"
kind: api
owners: [Inno.Build.Composition]
apiSurface: source-clr
---

Creates a content compiler borrowing the active authoring services for one pipeline.

**Parameter `assets`:** The asset owner whose content the build freezes.

**Parameter `serialization`:** The matching serialization registry; ownership remains with the host.

**Parameter `types`:** The matching extension catalog; the compiler must not outlive its pipeline.

**Returns:** A non-null scoped compiler that never disposes or globally retains these services.
