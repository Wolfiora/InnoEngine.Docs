---
title: Capture the smallest scene state
description: Choose property, element, subtree or asset persistence without retaining runtime generations.
uid: extending.scene-state
kind: how-to
owners:
  - Inno.Scene
  - Inno.Scene.Assets
contracts:
  - project.inno-scene#scene-ownership-contract
  - project.inno-scene#lifecycle-and-recovery-contract
  - project.inno-scene-assets#import-and-export-contract
exampleMode: host
exampleProjects:
  - Inno.Scene
  - Inno.Scene.Assets
---
# Capture the smallest scene state

Host persistence and History integrations should capture the state their operation owns. A property edit does not need a whole-scene snapshot, and property bytes do not contain the logical element metadata needed to restore a removed component.

## Select a boundary

| Need | Contract |
| --- | --- |
| One or several declared property values | ScenePropertySerialization |
| Removed component/system, including Missing | SceneElementSerialization |
| An entire object subtree | SceneSubtreeSerialization |
| Save a whole scene as an asset | SceneAsset.Capture and the asset pipeline |

Element CaptureState includes logical type identity/name, properties, asset dependencies and scene-reference aliases. RestoreState expects that complete element payload and the same logical type. RestoreComponent/RestoreSystem re-establish the supplied persistent identity and original index without calling Reset, producing a Missing placeholder if necessary. Never substitute CaptureProperties bytes for CaptureState.

## Restore an element through its owner

This host helper receives a live owner in the correct Scene/Identity scope, the current serializer and complete asset resolver. The identity/index and bytes come from the removal operation's neutral record:

```csharp
using System;
using Inno.Assets;
using Inno.Core.Serialization;
using Inno.Extensibility.Types;
using Inno.Scene;

public static class SceneStateOperations
{
    public static GameComponent RestoreRemovedComponent(
        GameObject owner, TypeRef type, Guid id, int index, byte[] state,
        SerializationRegistry serialization, IAssetReferenceResolver assets)
    {
        return SceneElementSerialization.RestoreComponent(
            owner, type, id, index, state, serialization, assets);
    }
}
```

Editor actions reach this mechanism through SceneEdits and the shared History transaction. A panel should not mutate user state through this helper to bypass admission, undo or dirty-state handling. Failure removes partial ordinary restoration; identity conflicts and compensation failures remain visible. Irreversible retirement failure is a fault, not a reversible edit failure.

## Save scene source

The following host infrastructure helper also requires the Scene.Assets importers to be discovered by the supplied pipeline. It is not a game-script function:

```csharp
using Inno.Assets;
using Inno.Assets.Pipeline;
using Inno.Core.Serialization;
using Inno.Scene;

public static class SceneSourcePersistence
{
    public static bool Save(GameScene scene, SerializationRegistry serialization, AssetPipeline assets)
    {
        SceneAsset asset = SceneAsset.Capture(scene, serialization, assets);
        return assets.Save(AssetPath.Project("Scenes/Level.iscene"), asset);
    }
}
```

Use the normal authoring transaction for rename/save. A saved scene's name change marks the document dirty; saving can rename the source in its directory while preserving `.imeta`, persistent identity and canonical asset ownership. A conflicting destination must fail rather than overwrite an unrelated asset.

## Resolve references without a second registry

Local property/element restoration resolves current objects through the owning Scene's Core Identity domain and validates scene, generation and type. Destroyed, detached, cross-scene or cross-domain references fail. Pure-value properties do not need an unrelated whole-scene object map. Asset references still require the complete supplied asset resolver and its canonical instances.

Full scene, prefab, subtree and reload candidates have explicit frozen graph namespaces. Their Guid aliases are neutral state, not an alternate live-object authority. Conflicting, missing or corrupt alias targets fail. Nested conversion and getter failures restore the previous synchronous scope. Do not retain that scope, CLR types, runtime IDs or collectible delegates inside a snapshot or History record.
