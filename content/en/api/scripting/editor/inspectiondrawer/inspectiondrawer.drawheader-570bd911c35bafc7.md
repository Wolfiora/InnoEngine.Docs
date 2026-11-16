---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.570bd911c35bafc7476b9e587b2e416f4306899756cbffb3db319b5aae61afb7
symbol: scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.InspectionDrawer`1.DrawHeader(InnoEditor.Inspection.InspectionDrawContext,`0)
title: InspectionDrawer<TTarget>.DrawHeader
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: editor-script
reviewed: 404c92277a16570a25ad0960b92b51675237d6d8dd027a1b4300c0db5950fe2f
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The active Inspector drawing context.

**Parameter `target`:** The strongly typed target being inspected.

## Remarks

The callback is clipped to one header row. Implementations should keep all controls on the current line and must not begin another window, child, table, or popup.
