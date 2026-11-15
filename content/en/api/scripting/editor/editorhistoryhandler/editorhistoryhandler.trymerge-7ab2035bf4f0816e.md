---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7ab2035bf4f0816ee064d87af2cafb31e49f4df222e93581607c3e4e11fa17cf
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorHistoryHandler.TryMerge(InnoEditor.Interactions.EditorHistoryChange,InnoEditor.Interactions.EditorHistoryChange,InnoEditor.Interactions.EditorHistoryChange@)
title: EditorHistoryHandler.TryMerge
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: 17630e816c8c68e4ded96347a6a9f1489187f3a894b14dcf67e2feae41edfb17
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Attempts to merge two adjacent changes to the same logical value.

## Parameters

**Parameter `older`:** The existing older history change.

**Parameter `newer`:** The newly recorded adjacent history change.

**Parameter `merged`:** The independently owned merged change when successful.

## Returns

`true` when `merged` replaces both input changes.
