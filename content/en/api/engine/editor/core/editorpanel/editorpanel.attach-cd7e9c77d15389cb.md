---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.cd7e9c77d15389cbc3183eac6380dace40654d2a2ad59c80725f796ca101a639
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorPanel.Attach(Inno.Editor.Core.EditorContext)
title: EditorPanel.Attach
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
reviewed: a6c4345d4c64c1c87541a804585b32c3ab90067bfc2a6b306662eb3e56c3e5c6
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
