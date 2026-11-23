---
# Identity metadata. Set once; other pages reference uid through contracts.
uid: examples.inno-editor-scripting.editor-script
kind: how-to

# Relation metadata. Name actual engine projects and page identities; validation rejects unknown values.
owners:
  - Inno.Editor.Scripting
contracts:
  - project.inno-editor-scripting
exampleMode: editor-script
exampleProjects:
  - Inno.Editor.Scripting

# Authoring metadata. Edit these fields and the text below.
title: Inno.Editor.Scripting editor-script examples
description: Verified logical API use sites with the owning feature lifecycle kept explicit.
---
# Inno.Editor.Scripting editor-script examples

These examples use the selected logical script surface. Read [the feature contract](../../architecture/projects/inno-editor-scripting.md) before adapting them. Host implementation namespaces and host-only readiness services are not substitutes for these references.

Provide the live services or authored source context required by each declaration. Compilation verifies these use sites, not device execution or completion of a reload lifecycle.

```csharp
using InnoEngine.Core;
using InnoEditor.Interactions;

[EditorAction("project.items.select", "project/items")]
[EditorMenu("project/items", "Selection/Select Item")]
public sealed class SelectItemAction : EditorAction<IdentityObject>
{
    protected override void Execute(EditorActionContext<IdentityObject> context)
        => context.interactions.For(context.area, context.target).Select();
}
```
