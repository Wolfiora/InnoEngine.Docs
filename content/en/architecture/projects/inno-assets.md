---
title: Inno.Assets
description: Logical asset identities, runtime lookup, residency and retained artifact reads.
uid: project.inno-assets
kind: project
owners: [Inno.Assets]
---
# Inno.Assets

Inno.Assets separates an asset's identity and canonical object from its loaded resources and immutable artifact bytes. Runtime consumers use logical paths or persistent IDs; they do not need an authoring cache's physical directory.

Start with [loading and retaining assets](../../manual/assets/read-assets.md) or [reading retained artifact bytes](../../manual/assets/read-artifacts.md). Importing and source mutation belong to [Inno.Assets.Pipeline](inno-assets-pipeline.md).

## Asset ownership contract

`AssetDatabase` borrows its content store. It loads deployed content but does not run importers, create authoring directories or own the store's final disposal. The host retires asset services before releasing that store.

A lookup returns the current canonical asset. `AssetLease<TAsset>` expresses explicit residency retention; retaining a managed object reference is not a replacement for the owner's loading, dependency and release protocol. Residency coordinates preparation, dependency retention, preload budgets, cancellation and retirement. `RetentionScope` groups retention owned by one caller.

`RetirementPendingException` preserves an unfinished value and its cleanup callback for the owning lifecycle to advance. A terminal release failure is not permission to invoke the same destructive release repeatedly. Do not discard an owner because its first disposal attempt could not finish.

Runtime budget-eviction retries preserve the same release state; they must not decrement a lease count twice. Asset and artifact leases retain pending values and callbacks, while a retention scope uses the shared Core lifetime protocol.

Missing assets retain persistent identity, stable type identity, neutral property bytes and dependencies. Recovery participates in the shared generation transaction. Values containing references require the owner's complete serialization context, not an unrelated global serializer. [Reference recovery](../../extending/reference-recovery.md) explains how saved intent survives an unavailable generation.

## Artifact reading contract

`AssetArtifactInfo` contains a content-addressed key, output name, hash and length; it does not expose a physical location. `ArtifactLease.OpenRead()` obtains a stream with an independent retention pin. Disposing the outer lease does not invalidate an already opened stream; the caller must still close that stream.

Closing a provider prevents new acquisitions. Missing content and corrupt content are different failures, neither represented by an empty successful payload. `ArtifactRetention.GetRetainedKeys()` is a snapshot for coordinated collection, not proof that no reader can arrive later. Retention counts do not independently authorize physical cache deletion.

## Host and script entry points

Hosts receive explicit `IAssetLookup`, `IAssetResidency` and artifact lookup contracts. The script-facing `Assets` facade resolves services from the active runtime session and owns no second database. `Assets.LocalPath` uses the scripting compiler's canonical caller location so source-local paths follow a project into an installed plugin; an arbitrary host filesystem path is not that identity.

The reference describes the CLR surface. Actual script projections are separately selected; do not assume that every host owner or infrastructure type is exported.

## API reference

[Asset types and member contracts](../../api/engine/assets/index.md) cover lookup, paths, leases, residency, neutral state and the built-in text/binary asset values.

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Runtime script API](../../api/scripting/index.md)
