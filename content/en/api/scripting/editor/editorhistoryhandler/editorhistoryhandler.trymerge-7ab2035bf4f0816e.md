---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7ab2035bf4f0816ee064d87af2cafb31e49f4df222e93581607c3e4e11fa17cf
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorHistoryHandler.TryMerge(InnoEditor.Interactions.EditorHistoryChange,InnoEditor.Interactions.EditorHistoryChange,InnoEditor.Interactions.EditorHistoryChange@)
title: EditorHistoryHandler.TryMerge
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
sourceFingerprint: bc6e22b244501d8b0fb8b55f27d2c7afc2813752fdcae40afc74b9c81a4ec8d2
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `older`:** The existing older history change.

**Parameter `newer`:** The newly recorded adjacent history change.

**Parameter `merged`:** The independently owned merged change when successful.

## Returns

`true` when `merged` replaces both input changes.
