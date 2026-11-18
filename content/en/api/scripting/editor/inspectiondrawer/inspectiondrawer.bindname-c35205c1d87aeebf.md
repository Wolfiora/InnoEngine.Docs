---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c35205c1d87aeebf46f55c3113408eac35098e5f7c6db6a3bdef014aa8236a7f
symbol: scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.InspectionDrawer`1.BindName(InnoEditor.Inspection.InspectionDrawContext,`0)
title: InspectionDrawer<TTarget>.BindName
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: editor-script
sourceFingerprint: 9fbd71f367e8aa553807ff3eef21882f1517d54e1ed0b20fac5bd8311f822b4e
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
