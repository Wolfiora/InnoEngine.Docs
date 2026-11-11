---
title: Serialization and generation ownership
description: Follow the shared value pipeline from declared metadata through converter leases, neutral nodes and completion callbacks.
uid: architecture.serialization
kind: explanation
owners:
  - Inno.Core.Serialization
  - Inno.Core.Serialization.Generators
  - Inno.Adapter.Serialization.DotNet
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
---
# Serialization and generation ownership

Serialization separates a domain's live objects from a deterministic current-format representation. The domain defines identity, references and publication; Core provides metadata-driven value processing, converter selection, neutral nodes and encoding. Dynamic reflection and static generated access are alternative metadata providers at the boundary, not fallback branches inside Core.

## One operation pipeline

The registry captures the active converter generation, binds its own type catalog and metadata source into an immutable context, and creates an operation. That operation resolves selected converters and declared values, tracks cycles, and scopes readers, writers and completion callbacks.

The value pipeline creates neutral nodes. One binary encoder handles ordinary serialization, snapshot output and structured object payloads. Object key ordering is canonical; arrays retain their order. Independent property payloads preserve their own restoration boundary through the same underlying value semantics.

On decode or restore, callbacks run only after the value-processing phase reaches completion. A failed phase clears pending callbacks. A callback failure ends the operation and propagates; already executed callbacks or application setters are not automatically undone. The owner supplies any broader transaction.

## Converter generations

`SerializationRegistry` borrows a `TypeCatalog` and metadata source and owns its converter registry. Candidate refresh follows type-catalog generation transactions. Converter instances and resolved selections are generation-owned rather than process-global.

Exact targets take precedence over assignable targets. Class inheritance distance and assignable interfaces determine other candidates; equal best distances are ambiguous and fail explicitly. Variance and supported generic closure use the existing type-catalog capabilities. Discovery order does not silently choose a converter.

`CaptureGeneration` returns a caller-owned lease for operations spanning asynchronous continuations or a reload. Release it only after all work using it has finished. Last-lease retirement releases the converter generation. Capturing a generation does not make custom converters, source objects, metadata providers or context services thread-safe, and it does not marshal work to an owner thread.

## Metadata belongs to the selected declaration

`SerializationTypeMetadata` freezes ordered member descriptions, constructor access, collection construction and restoration callbacks. It composes base metadata before derived metadata and rejects duplicate keys. Construction uses the selected factory; unsupported declarations fail rather than switching providers.

The [dynamic DotNet adapter](../backends/dotnet-serialization.md) uses weakly keyed type metadata and reflection. The [generators](../extending/serialization-metadata.md) emit typed accessors and closed collection construction in the declaring compilation. Private shapes stay private through generated contributions in suitable partial lexical owners.

A metadata source must be paired with the same owning composition and generation expectations as its type catalog. Public `GetMetadata` results and `SerializedProperty` accessors may retain types and delegates; borrowing them does not permit retaining collectible declarations after retirement.

## Neutral data across generations

`SerializationSnapshot` contains neutral nodes and can outlive the source generation. In-memory `SerializationPropertySnapshot`, by contrast, carries its declared `Type`; encode it before crossing an unload boundary. Property-data bytes resolve against current target metadata and current reference services on restoration.

Persistent identity locates the replacement object. Runtime identity qualifies a particular live generation and any snapshot reuse proof. Neither a neutral payload nor a cached key restores access to a retired CLR object.

## Scope of optimizations

Current implementations cache converter resolution inside a generation, allocate operation bookkeeping on demand and reuse unchanged snapshot nodes. Proven capture keys can skip a write, and bounded immutable encoded blocks can avoid re-encoding. These optimizations retain the same value pipeline, current binary format, failure behavior and owner leases.

No shared business-object pool, global context or second serialization service is introduced. A source mutation invalidates the relevant proof; an unproved input takes the full capture path. Snapshot reuse is independent of CI evidence reuse and does not authorize skipping tests.

## Choose a task

- [Save declared state](../manual/serialization/save-state.md).
- [Restore properties across reload](../manual/serialization/restore-properties.md).
- [Capture immutable snapshots](../manual/serialization/capture-snapshots.md).
- [Implement a converter](../extending/serialization-converters.md).
- [Prepare static metadata](../extending/serialization-metadata.md).
