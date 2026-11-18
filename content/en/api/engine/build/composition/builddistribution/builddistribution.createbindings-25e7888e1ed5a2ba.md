---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.25e7888e1ed5a2baa7135ec05b27b3d342207c2fbe2d017f14690f1d423ee901
symbol: engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildDistribution.CreateBindings(Inno.Assets.Pipeline.AssetPipeline,Inno.Core.Serialization.SerializationRegistry,Inno.Extensibility.Types.TypeCatalog)
title: BuildDistribution.CreateBindings
kind: api
owners:
- Inno.Build.Composition
apiSurface: source-clr
sourceFingerprint: 93b968d50035618ed6e189ee14865fd9d8bc878720e9641c5b0782969c6a8e1e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `assets`:** The active borrowed authoring asset owner.

**Parameter `serialization`:** The matching borrowed serialization registry.

**Parameter `types`:** The matching borrowed extension catalog.

## Returns

An immutable target collection ready for pipeline construction.

## Exceptions

**Exception `T:System.InvalidOperationException`:** A factory returns no target, targets disagree with Support Pack identities, or a default managed deployment cannot publish its platform.
