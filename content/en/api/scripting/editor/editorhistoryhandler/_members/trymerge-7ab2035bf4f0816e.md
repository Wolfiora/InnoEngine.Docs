---
uid: api.7ab2035bf4f0816ee064d87af2cafb31e49f4df222e93581607c3e4e11fa17cf
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorHistoryHandler.TryMerge(InnoEditor.Interactions.EditorHistoryChange,InnoEditor.Interactions.EditorHistoryChange,InnoEditor.Interactions.EditorHistoryChange@)"
source: xml
reviewed: bbbc80f005a671c70b839007573ba20f8d41395cbc38ca476ceeb9ffa852cafd
title: "TryMerge"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Attempts to merge two adjacent changes to the same logical value.

**Parameter `older`:** The existing older history change.

**Parameter `newer`:** The newly recorded adjacent history change.

**Parameter `merged`:** The independently owned merged change when successful.

**Returns:** `true` when `merged` replaces both input changes.
