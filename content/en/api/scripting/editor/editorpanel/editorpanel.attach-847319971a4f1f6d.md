---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.847319971a4f1f6d0024cfbd24520a3cdfa978fca2ed2bb2de39d362388c82b9
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorPanel.Attach(InnoEditor.Core.EditorContext)
title: EditorPanel.Attach
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
reviewed: 97dea16bddddb2dfe2e76afb357d5f4d6d2ec6a06a26284103234274be00d830
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

**Exception `T:System.InvalidOperationException`:** Thrown when the panel is already attached.
