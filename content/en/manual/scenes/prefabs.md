---
title: Instantiate a prefab in its owning scene
description: Create a connected instance while preserving scene and asset ownership boundaries.
uid: manual.scenes.prefabs
kind: how-to
owners:
  - Inno.Scene
contracts:
  - project.inno-scene#scene-ownership-contract
  - project.inno-scene#lifecycle-and-recovery-contract
exampleMode: runtime-script
exampleProjects:
  - Inno.Scene
---
# Instantiate a prefab in its owning scene

A PrefabAsset stores an authored object graph. Instantiate it into a loaded scene to create a new connected subtree. The instance receives its own persistent object identities; it is not the original prefab's live graph.

## Supply the asset and parent

The host must configure prefab instantiation on the SceneWorld with the current serializer and complete asset resolver. That is host composition, not a game-script API. In a loaded scene, this behavior creates one instance from its assigned serialized asset:

```csharp
using InnoEngine.Scene;
using InnoEngine.Serialization;

public sealed class ObstacleSpawner : GameBehavior
{
    [SerializableProperty]
    public PrefabAsset? obstacle { get; set; }

    protected override void Start()
    {
        if (obstacle is not null)
            gameObject.scene.InstantiatePrefab(obstacle, gameObject.transform);
    }
}
```

The result is the connected root object. The parent must belong to the target scene; unavailable prefab/scene state fails explicitly. The owning world's Scene and Identity scopes are used even when the caller entered through another temporary presentation scope.

## Understand deferred creation

Instantiation is allowed during an execution phase. The new object and components commit together at the phase boundary. Restoration may arrange this new object's component order before commit, but cannot reorder arbitrary committed objects during execution.

The implementation restores the independent instance before attaching the target parent. Prefab difference mapping includes currently valid pending objects and only calibrates the new subtree's nested prefabs; it does not require a whole-scene capture while structure is unsettled.

## Preserve overrides and missing state

Tag assignments, component/system order and prefab overrides participate in serialization. A copied graph remaps persistent identities and scene-reference aliases. If a type is unavailable, its Missing state retains those mappings so later recovery targets objects in this instance. Follow [Missing recovery](missing.md); replacing an unavailable reference with null would lose that intent.
