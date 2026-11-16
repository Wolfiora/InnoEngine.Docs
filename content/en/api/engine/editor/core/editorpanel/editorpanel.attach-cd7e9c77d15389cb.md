---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.cd7e9c77d15389cbc3183eac6380dace40654d2a2ad59c80725f796ca101a639
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorPanel.Attach(Inno.Editor.Core.EditorContext)
title: EditorPanel.Attach
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
reviewed: e5eeceb85e63de05661192f15394a196ee223cbb73e529067c9ce6b0316790c3
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
