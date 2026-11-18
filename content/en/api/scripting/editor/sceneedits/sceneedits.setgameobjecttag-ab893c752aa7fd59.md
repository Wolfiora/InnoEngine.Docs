---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ab893c752aa7fd59b953c221baa27b099a2f6c25f8ca9b7160b94a060c6bf66c
symbol: scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.SetGameObjectTag(InnoEngine.Scene.GameObject,System.String,System.String)
title: SceneEdits.SetGameObjectTag
kind: api
owners:
- Inno.Editor.Scene
apiSurface: editor-script
sourceFingerprint: e08d870ade3f57e952875e2f0aa1d8c7c5aba35a8aff038cc800754074b856e4
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `gameObject`:** The live GameObject whose tag should change.

**Parameter `tag`:** The requested non-empty tag.

**Parameter `historyName`:** The user-facing history entry name.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `gameObject` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `tag` or `historyName` is empty.
