---
uid: api.25e7888e1ed5a2baa7135ec05b27b3d342207c2fbe2d017f14690f1d423ee901
symbol: "engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildDistribution.CreateBindings(Inno.Assets.Pipeline.AssetPipeline,Inno.Core.Serialization.SerializationRegistry,Inno.Extensibility.Types.TypeCatalog)"
source: xml
reviewed: c9fbf329ef7cd06169b11cf9054ae5668cea78d2a48d5460d4a0e6d9df98bbda
title: "BuildDistribution.CreateBindings"
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
