---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c2c18aa5adeea24dbae320bc77b84d63978d1cc8f9eee5be057886354413eadf
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorEditGesture.Cancel
title: EditorEditGesture.Cancel
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: e1cbc5c92bd4fa8e64839a0c564c075b1fdc68006e0f4373e27ffd5b3a8d5757
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

The rollback outcome; a state-preserving failure keeps this gesture active for retry.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The gesture is finished or a nested transaction remains active.
