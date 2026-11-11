---
title: Dynamic .NET serialization metadata
description: Supply reflection-backed declaration access for authoring without moving reflection into Core or retaining retired types globally.
uid: backends.dotnet-serialization
kind: explanation
owners:
  - Inno.Adapter.Serialization.DotNet
contracts:
  - project.inno-adapter-serialization-dotnet#dynamic-metadata-contract
exampleMode: host
exampleProjects:
  - Inno.Adapter.Serialization.DotNet
---
# Dynamic .NET serialization metadata

`Inno.Adapter.Serialization.DotNet` supplies reflection-based metadata for desktop authoring and build hosts. It implements Core's metadata contract and is selected explicitly by composition. Core does not depend on this adapter, and a static Player is expected to use its generated declaration source.

## Create the source in the owning composition

This host helper creates an isolated provider. The caller passes it to the registry associated with the same type catalog and owns the surrounding host lifecycle.

```csharp
using Inno.Adapter.Serialization.DotNet;
using Inno.Core.Serialization;

static ISerializationMetadataSource CreateAuthoringMetadata()
{
    return new ReflectionSerializationMetadataSource();
}
```

The provider exposes `GetMetadata(Type)` and no protected extension points. A result contains declaration accessors, construction, supported collection operations and restoration callbacks. Treat it as borrowed generation-sensitive metadata, even though its member collection is immutable.

## Discovery and validation

Serializable members are read base-first, ordered within each declaration by explicit order then metadata token. Fields/properties must provide the access required by their visibility flags. Duplicate serialized keys, indexers, missing accessors and invalid restoration hooks fail explicitly.

The provider can create suitable nonpublic parameterless instances. Selected constructor failures propagate through the metadata construction contract. Sequence/map construction is derived from the actual closed declaration; unsupported shapes do not silently switch to another provider.

Type-keyed metadata and shared reflection member/hook caches use weak-key storage rather than strong global type dictionaries. That avoids a cache alone owning collectible declarations indefinitely. It does not make externally retained metadata, delegates or objects harmless: release your own references before unload.

## Capture proofs

`SerializationRevisionAttribute` selects a readable, nonstatic `ulong` or nullable `ulong` member that is not persisted. Core requires the qualifying owner to be a sealed serializable identity reference type. Invalid declarations fail; unavailable revisions decline reuse. Getter failures remain failures rather than proof of unchanged state.

Pure-value eligibility comes from actual primitive field access, not an arbitrary property's getter. Custom-converter eligibility is still decided by the active Core generation. Missing proof retains complete capture and does not change ordinary serialization.

## Lifecycle and thread boundaries

Create the registry after its type catalog is ready. Retire sessions and operations using it before releasing the registry and catalog. An asynchronous transaction can capture an explicit generation lease, but must still respect source-object, converter and context-service threading requirements.

Restore callbacks run at operation completion. Their effects and constructor/setter side effects are governed by the caller's transaction, not automatically rolled back by this provider.

See [save declared state](../manual/serialization/save-state.md), [static metadata](../extending/serialization-metadata.md), and the [adapter API](../api/types/serialization-dotnet/index.md).
