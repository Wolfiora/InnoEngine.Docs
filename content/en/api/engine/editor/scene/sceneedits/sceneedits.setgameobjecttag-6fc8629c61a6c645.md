---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6fc8629c61a6c645c00bd0c8fa90923de6ff7a7a54ae063ac1f1af0a4c62f9be
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.SetGameObjectTag(Inno.Scene.GameObject,System.String,System.String)
title: SceneEdits.SetGameObjectTag
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
reviewed: 08e33e1deecb95848920935cbb6bd540af9e36e3b4264d64ffafcc9f9070f673

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `gameObject`:** The live GameObject whose tag should change.

**Parameter `tag`:** The requested non-empty tag.

**Parameter `historyName`:** The user-facing history entry name.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `gameObject` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `tag` or `historyName` is empty.
