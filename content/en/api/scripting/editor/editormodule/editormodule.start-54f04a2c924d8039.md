---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.54f04a2c924d8039ec374bb6843527a2b1a5bf4a617545351e8940cfcec67acf
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorModule.Start(InnoEditor.Core.EditorContext)
title: EditorModule.Start
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
sourceFingerprint: 9cb1a6ca9f1c9f7a219f564a16b23abfcf239e88e1aec1865618a85a1ae5ade2
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The shared editor context for the active runtime.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `context` is `null`.

**Exception `T:System.ObjectDisposedException`:** Thrown after the module has been disposed.

**Exception `T:System.InvalidOperationException`:** Thrown when the module is already started.
