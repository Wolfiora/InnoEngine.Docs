---
uid: api.25e7888e1ed5a2baa7135ec05b27b3d342207c2fbe2d017f14690f1d423ee901
symbol: "engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildDistribution.CreateBindings(Inno.Assets.Pipeline.AssetPipeline,Inno.Core.Serialization.SerializationRegistry,Inno.Extensibility.Types.TypeCatalog)"
source: xml
reviewed: 8c621c0e03f8536f7180d5d238bf8dee0af0e16ea003133ac186d6de7e7e6c9d
title: "CreateBindings"
kind: api
owners: [Inno.Build.Composition]
apiSurface: source-clr
---

Creates platform targets and validates their identities and default deployment capabilities.

**Parameter `assets`:** The active borrowed authoring asset owner.

**Parameter `serialization`:** The matching borrowed serialization registry.

**Parameter `types`:** The matching borrowed extension catalog.

**Returns:** An immutable target collection ready for pipeline construction.

**Exception `T:System.InvalidOperationException`:** A factory returns no target, targets disagree with Support Pack identities, or a default managed deployment cannot publish its platform.
