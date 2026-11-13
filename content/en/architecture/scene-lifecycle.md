---
title: Scene ownership, indexing and reload
description: How one Scene owner coordinates structure, lifecycle and neutral
  state across generations.
uid: architecture.scene-lifecycle
kind: explanation
owners:
  - Inno.Scene
contracts:
  - project.inno-scene#scene-ownership-contract
  - project.inno-scene#lifecycle-and-recovery-contract
---
# Scene ownership, indexing and reload

The Scene model combines persistent content with short-lived runtime instances. Its design keeps structure and lifecycle under the same world/scene owners while using shared Core identity, collections and serialization rather than a parallel object registry.

## Responsibility boundaries

SceneWorld owns a session's loaded set and lifecycle state. Each GameScene owns its store, hierarchy and system scheduling. GameObject owns component attachment order. GameSystem represents scene-level persistent coordination, not the device, runtime loop or asset database.

SceneContentSource projects the world into a bounded ContentReadScope for consumers that should not depend directly on Scene. Rendering infrastructure remains host-owned; a specific extension may supply a scene system for persistent extraction state. The base model does not promise that an optional renderer, physics engine or other plugin exists.

## Internal indexes

The current implementation stores objects, components and systems in Core IndexedObjectStore with typed keys. Persistent Guid uniqueness supports direct object/component lookup. A private ordered key preserves creation-order query results even when dense storage removes an item through swap-back. Attachment/display lists retain only the ordering their public contracts require.

Current-generation type indexes use integer runtime type IDs and precomputed assignability. The candidate SceneTypeCatalog may inspect candidate CLR types while preparing, but the published descriptors do not retain Type or TypeRef. Persistent state and reload transfer use stable type identity; a runtime type ID is never a serialized substitute.

Loaded scenes and lifecycle traversals reuse stable arrays until relevant structure, order or generation changes. Callback masks select only overridden GameBehavior phases. Activation changes enter synchronization queues; successful Start leaves its one-time queue. Replacement/removal drops old indexed references. These are internal allocation-reduction mechanisms, not a second behavior base class or a promise that arbitrary user callbacks allocate nothing.

## Capture and invalidation

Complete capture reuses unchanged eligible object entries through Core Serialization's neutral keys. Scene owns invalidation for structure, metadata, hierarchy and Transform changes. Exact source/parent identity, sibling order and component properties remain part of the boundary. Arbitrary plugin properties, custom converters, Missing and prefab state keep their ordinary writer paths when reuse cannot be proven. Counters are not persisted and exhaustion falls back to full capture.

The structure snapshot can reuse a source-ID projection after checking current persistent identities. Replacing it does not invalidate a synchronous writer already borrowing the old immutable projection. System identity is frozen separately for that write; the projection is serialization membership, not a live-object resolver. Subtree and prefab operations retain their own smaller graph boundaries.

## Generation transfer

1. Capture neutral property bytes, stable type/object identities, dependencies and reference aliases before retiring the old instances.
2. Prepare and activate the candidate type/serializer state and Scene type catalog; invalidate derived type arrays.
3. Apply real replacements or host-owned Missing placeholders through the shared ReferenceRecoveryTransaction. Persistent identities survive; runtime identities change.
4. Resolve actual element and asset slots and validate the candidate before publication. A Missing asset does not become null merely because its containing element recovers.
5. On reversible failure, restore structure before the old type/serializer and external asset state, then restore old properties and lifecycle. After commit, release the old graph and candidate references through retirement.

Active-to-active updates retain their documented per-property diagnostic policy. Missing-to-concrete recovery requires complete restoration, so an ignored or failed property cannot silently disappear. Ordinary old-element cleanup failures aggregate after attempting the remaining elements. Pending retirement immediately preserves owners/dependencies and faults admission. These outcomes remain visible to the shared coordinator.

Host callers receive ISceneReloadStateTransfer from SceneReloadService.Capture. `recoveryChanges` describes actual slots after application and clears after rollback. The transaction's lifetime—not a retained old TypeCache snapshot—controls when the previous assembly can unload. Consumer-held strong snapshots or old objects can still extend that lifetime and must be released at the safe point.
