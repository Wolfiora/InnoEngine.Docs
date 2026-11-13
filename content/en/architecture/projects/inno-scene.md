---
title: Inno.Scene
description: Scene objects, behaviors, transforms, persistent state and generation recovery.
uid: project.inno-scene
kind: project
owners:
  - Inno.Scene
---
# Inno.Scene

Inno.Scene owns the runtime Scene model: scenes, objects, components, scene-level systems, transforms, prefab instances and their recoverable state. A host-owned `SceneWorld` isolates one session. The script-facing `SceneManager` resolves that world from the current execution context; it does not own another scene collection.

Start with [working with scenes](../../manual/scenes/index.md). For host integration, read [scene ownership and reload](../scene-lifecycle.md) and [capturing scene state](../../extending/scene-state.md).

## Scene ownership contract

Use live scenes and elements in their owning runtime session and its serialized execution/lifecycle boundary. `SceneWorld.EnterScope` binds the world and its identity allocator and returns a caller-owned, strictly nested scope. Entering a scope does not add synchronization or move work to the owner thread. The host supplies the type catalog and identity allocator; world disposal unloads scenes and releases its own type-catalog participant, not those borrowed host services.

A scene owns its objects, attached components and systems. Every object has one required, non-removable Transform. Do not keep old component/system instances, strong query snapshots or type-cache snapshots across generation retirement. Persist stable identities and neutral state; resolve the current live object when needed. Destruction, removal and reload invalidate former runtime identities even when a persistent identity survives.

Mutations during a lifecycle stage may be queued until its boundary. Do not capture a complete scene while structural work is uncommitted. New prefab subtrees can restore their own component order before commitment; this does not permit arbitrary reordering of already committed objects during execution.

Loading one scene replaces the loaded set. Additive loading preserves other scenes. An object move requires both scenes in the same loaded world, preserves the subtree and persistent identities, and makes the moved root a destination root. It is not a serialized clone or a reset. Closing the last scene is valid; no active scene is a supported state.

### Lifecycle and recovery contract

`GameBehavior` is the component base with independent enabling and frame callbacks. `GameSystem` is scene-level, serializable coordination. Display order, hierarchy order and execution priority are distinct; see [choosing a behavior or system](../../manual/scenes/behaviors.md).

Missing component/system placeholders preserve logical type identity, original neutral property bytes, asset dependencies and scene-reference aliases. They are restoration results, not ordinary attachable types. Their serialized form remains the original logical element. Restoring a Missing element requires complete property recovery; failure must preserve the placeholder. A still-Missing asset dependency is not silently changed to null.

Reload preparation, provisional replacement, publication and retirement belong to the shared generation transaction. Restore structure before old type/serializer state and previous properties/lifecycle when rolling back. Ordinary retirement failures aggregate; pending retirement retains owners and faults the shared gate. Cleanup after irreversible commit cannot pretend that the old generation was restored.

## API surfaces

The reference below describes the actual CLR surface, including host state-transfer and serialization APIs. Runtime scripts use the explicitly exported scene types under `InnoEngine.Scene`; namespace projection does not export the entire assembly. `SceneWorld`, host serialization helpers and Missing placeholder constructors are not general game-script entry points. Scene asset importers belong to [Inno.Scene.Assets](inno-scene-assets.md).

## API reference

[Types and exact member contracts](../../api/engine/scene/index.md) include the host and relevant protected extension surface. Member-specific contracts supplement the shared ownership and recovery rules above.

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Runtime script API](../../api/scripting/index.md)
