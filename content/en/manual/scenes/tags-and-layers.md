---
title: Assign tags and layers
description: Separate object assignments from project definitions and stable layer identity.
uid: manual.scenes.tags-layers
kind: how-to
owners:
  - Inno.Scene
contracts:
  - project.inno-scene#scene-ownership-contract
exampleMode: runtime-script
exampleProjects:
  - Inno.Scene
---
# Assign tags and layers

Tags are named string assignments; layers are compact slots used with masks. Their catalogs are ordinary project settings. Updating a definition is distinct from changing the value already serialized on an object.

## Use defined tags

The default object tag is `Untagged`. Name and tag lookup use ordinal matching, and plural queries preserve scene creation order. This runtime-script helper checks the current setting before assigning a tag:

```csharp
using InnoEngine.Scene;
using InnoEngine.Settings;

public static class SceneLabels
{
    public static bool AssignPlayer(GameObject player)
    {
        GameTagCatalog tags = Settings.Get<GameTagCatalog>(GameTagCatalog.settingId);
        if (!tags.IsDefined("Player"))
            return false;
        player.tag = "Player";
        return true;
    }

    public static GameLayerMask AssignPlayerLayer(GameObject player)
    {
        GameLayerCatalog layers = Settings.Get<GameLayerCatalog>(GameLayerCatalog.settingId);
        player.layer = layers.GetLayer("Player");
        return layers.GetMask(["Player", "Enemy"]);
    }
}
```

The layer helper requires those layer names to be defined. Settings reads need the current runtime settings scope. Editing definitions belongs to the writable settings/Editor transaction; calling catalog Add or Remove only changes that editable instance.

Deleting a tag definition does not rewrite stored object strings. Reintroducing the same name restores its configured meaning. `GetTags` returns an independently owned deterministic snapshot.

## Understand layer identity and capacity

| Type | Meaning |
| --- | --- |
| GameLayer | One runtime slot from 0 through 31; stored in scenes/prefabs |
| GameLayerMask | A 32-bit selection of slots |
| GameLayerId | Current project identity plus a stable local layer key |
| GameLayerDefinition | Snapshot of local key, slot and display name |
| GameLayerCatalog | Named slots and a symmetric interaction matrix |

Default is slot 0 with local key `default`. New definitions receive local keys rather than asking users to invent global IDs. Renaming a display name does not change its local key; changing the project identity changes the qualified identity without rewriting every scene assignment.

Plugin contributions carry local keys, slots, names and interaction operations, not the exporting project's global identity. Identical declarations coalesce; conflicting declarations require explicit dependency/override intent. Composition does not rearrange the finite slots or silently rewrite object assignments. A layer interaction matrix is configuration, not proof of an implemented physics service.
