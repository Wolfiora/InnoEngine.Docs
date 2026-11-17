---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c682648ded731ab44088ddc7de653561f9f811db3f70e2c125d920e0d48bf0ed
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorModule.Update(InnoEditor.Core.EditorContext)
title: EditorModule.Update
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
reviewed: 495936c27196e447b9d882d852b64ff07276c02c59a8e9deea0c2661c7f9e66c
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The shared editor context containing the current frame state.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.

**Exception `T:System.ObjectDisposedException`:** Thrown after the module has been disposed.

**Exception `T:System.InvalidOperationException`:** Thrown when the module is not started.
