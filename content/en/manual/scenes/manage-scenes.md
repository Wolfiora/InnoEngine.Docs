---
title: Load scenes and move objects
description: Manage an additive loaded set without cloning or losing persistent
  object identity.
uid: manual.scenes.manage
kind: how-to
owners:
  - Inno.Scene
contracts:
  - project.inno-scene#scene-ownership-contract
exampleMode: runtime-script
exampleProjects:
  - Inno.Scene
---
# Load scenes and move objects

Use additive loading to keep several scenes alive in one runtime session. Active selection chooses the current scene; hierarchy ordering changes presentation and traversal, not the ownership of every loaded scene.

## Prepare the runtime context

The host must have established the Runtime Session and SceneWorld execution scope. The following game-script helper receives two distinct prepared scenes in that world and a live object in the first. `LoadScene` unloads the existing set, so this operation is unsuitable for retaining unrelated unsaved editing scenes.

```csharp
using InnoEngine.Scene;

public static class SceneComposition
{
    public static void LoadPair(GameScene first, GameScene second, GameObject player)
    {
        SceneManager.LoadScene(first);
        SceneManager.LoadSceneAdditive(second);
        SceneManager.SetSceneIndex(second, 0);
        SceneManager.SetActiveScene(first);
        SceneManager.MoveGameObjectToScene(player, second);
    }
}
```

Both scenes remain loaded; the first is active and the second is first in hierarchy order. The player becomes a root in the second scene. Its children, object/component instances, persistent identities, world transform and lifecycle state move with it. Moving does not call Reset or Destroy and does not serialize a duplicate.

## Read and close the loaded set

`loadedScenes` is a stable snapshot of hierarchy order. Do not retain it as a permanent live index across reload or scene retirement. `UnloadScene` closes one loaded scene; unloading the last scene leaves `activeScene` null and `hasActiveScene` false. Consumers must handle that state rather than creating an implicit scene.

The Editor opens scene assets additively, activates an already-open source instead of duplicating it, and saves all open scenes with Ctrl/Cmd+S. Closing a scene from Hierarchy closes the in-memory document; it does not delete the scene asset.

## Diagnose a failed move

Verify that both scenes are loaded in the same world and the object is live in the source scene. A hierarchy cannot connect parents from different scenes. Use the world move operation for transfer and [Transform parenting](transforms.md) within one scene. Scene ordering is not a precise script scheduling mechanism; use an explicit [GameSystem order](behaviors.md).
