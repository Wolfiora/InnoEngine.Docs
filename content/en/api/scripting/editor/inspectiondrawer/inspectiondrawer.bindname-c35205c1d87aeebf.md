---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c35205c1d87aeebf46f55c3113408eac35098e5f7c6db6a3bdef014aa8236a7f
symbol: scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.InspectionDrawer`1.BindName(InnoEditor.Inspection.InspectionDrawContext,`0)
title: InspectionDrawer<TTarget>.BindName
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: editor-script
reviewed: 37a6fbbbdf9490c5e7a370f32acc8e87b93f82a07ef685345bdb950c12d936ed
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

## Returns

The current target name and a callback that accepts a requested replacement name, or `null` for the callback when the name is read-only.
