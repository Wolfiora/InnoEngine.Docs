---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8e2903a32ea69044b6a18c361216b64bfe08974da41fed41c7a6934c1680bd6b
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorPanel.Draw(InnoEditor.Core.EditorContext)
title: EditorPanel.Draw
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
reviewed: caeb2a8d5397e6a18367a15c275fd2f6757fb740e682ebc16a99ce0b18ff23c7
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The shared editor context containing current selection, focus, and frame state.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the panel is not attached.
