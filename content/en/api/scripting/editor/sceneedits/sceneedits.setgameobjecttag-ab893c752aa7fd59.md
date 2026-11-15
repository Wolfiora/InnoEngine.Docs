---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ab893c752aa7fd59b953c221baa27b099a2f6c25f8ca9b7160b94a060c6bf66c
symbol: scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.SetGameObjectTag(InnoEngine.Scene.GameObject,System.String,System.String)
title: SceneEdits.SetGameObjectTag
kind: api
owners:
- Inno.Editor.Scene
apiSurface: editor-script
reviewed: 29bd18307c1ff08f4da4a261e8effb5479958fda31d12d543cb188555eee2eb9
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Changes the tag of a live GameObject and records the two ordinal tag strings.

## Parameters

**Parameter `gameObject`:** The live GameObject whose tag should change.

**Parameter `tag`:** The requested non-empty tag.

**Parameter `historyName`:** The user-facing history entry name.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `gameObject` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `tag` or `historyName` is empty.
