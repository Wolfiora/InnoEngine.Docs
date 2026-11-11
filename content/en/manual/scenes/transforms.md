---
title: Arrange objects and transform points
description: Preserve hierarchy ownership and use complete matrices when world TRS is insufficient.
uid: manual.scenes.transforms
kind: how-to
owners:
  - Inno.Scene
contracts:
  - project.inno-scene#scene-ownership-contract
exampleMode: runtime-script
exampleProjects:
  - Inno.Scene
---
# Arrange objects and transform points

Every GameObject has exactly one Transform. It cannot be removed, although its component display/serialization position can be changed like other components. Parent/child and sibling relationships belong to the Scene hierarchy owner.

## Parent within one scene

This game-script helper receives two live objects in the same scene. `SetParent` preserves the child's world-space values and rejects self-parenting, cycles and cross-scene parents.

```csharp
using InnoEngine.Scene;

public static class ObjectHierarchy
{
    public static void AttachFirst(GameObject child, GameObject parent)
    {
        child.transform.SetParent(parent.transform);
        child.transform.SetSiblingIndex(0);
    }
}
```

Pass null to detach a parent. Use [scene transfer](manage-scenes.md) to move an object between loaded scenes. A zero-scale parent hierarchy is not invertible: world-to-local conversion and world-preserving reparenting fail explicitly rather than substituting an identity inverse.

## Choose the right transform representation

| Need | Operation |
| --- | --- |
| Edit a value relative to the parent | Local position, rotation and scale |
| Transform a point through the full hierarchy | `TransformPoint` / `InverseTransformPoint` |
| Consume the complete spatial mapping | `localToWorldMatrix` / `worldToLocalMatrix` |
| Apply a world-space TRS edit together | `SetWorldTransform` |

Rotated, non-uniformly scaled ancestors can introduce shear. One world translation/rotation/scale tuple cannot represent every such matrix exactly. Rendering, bounds and spatial queries should consume the complete matrix or point transforms. Atomic world-TRS editing avoids three observable intermediate recalculations; it does not make shear disappear.

## Refresh derived views deliberately

`GameScene.hierarchyRevision` changes for registration, removal, parenting and sibling order. It is a live refresh counter, not a persistent identity or a record of all property changes. Names, values and activation must still be read from current objects. Editor integrations should use their mutation/History boundary instead of bypassing it with direct model edits.
