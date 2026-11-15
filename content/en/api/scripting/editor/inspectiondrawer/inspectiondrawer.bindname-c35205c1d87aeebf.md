---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c35205c1d87aeebf46f55c3113408eac35098e5f7c6db6a3bdef014aa8236a7f
symbol: scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.InspectionDrawer`1.BindName(InnoEditor.Inspection.InspectionDrawContext,`0)
title: InspectionDrawer<TTarget>.BindName
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: editor-script
reviewed: d61a852aded716bf276f30b73bdf91da66400ddb3f09921f3e34d62defaf8edc
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `context`:** The active Inspector drawing context.

**Parameter `target`:** The strongly typed target being inspected.

## Returns

The current target name and a callback that accepts a requested replacement name, or `null` for the callback when the name is read-only.
