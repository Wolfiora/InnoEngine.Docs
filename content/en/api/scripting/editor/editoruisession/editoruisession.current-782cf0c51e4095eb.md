---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.782cf0c51e4095eb21f305d845263fa66692fd5e85c86dee7af4a448436bc21c
symbol: scripting:Inno.Editor.ImGui:P:InnoEditor.ImGui.EditorUiSession.current
title: EditorUiSession.current
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: dddc82680ec68ccb55686eaee8fa2c9b83b0e5304253e0ba89970908d159096b
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Gets the current synchronous drawing scope; this accessor never creates or owns a session.

## Exceptions

**Exception `T:System.InvalidOperationException`:** No UI drawing scope is active on the calling thread.
