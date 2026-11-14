---
uid: api.ed79c7a17c250a30e750f6b66b245c8d871433d9393ee90918113c1a0bcd9bc3
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorContext.GetLayoutSectionNames(System.String)"
source: xml
reviewed: 42db9b1621ce8524f8ddbbc649527dbe2941b2833469c6bdead50956223c20cb
title: "EditorContext.GetLayoutSectionNames"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Gets layout section names matching an ordinal prefix.

## Parameters

**Parameter `prefix`:** The prefix to match, or an empty string for every section.

## Returns

A stable sorted snapshot of matching section names.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `prefix` is `null`.
