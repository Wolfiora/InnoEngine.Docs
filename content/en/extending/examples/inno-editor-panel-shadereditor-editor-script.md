---
title: Inno.Editor.Panel.ShaderEditor editor-script examples
description: Verified logical API use sites with the owning feature lifecycle kept explicit.
uid: examples.inno-editor-panel-shadereditor.editor-script
kind: how-to
owners: [Inno.Editor.Panel.ShaderEditor]
contracts: [project.inno-editor-panel-shadereditor]
exampleMode: editor-script
exampleProjects: [Inno.Editor.Panel.ShaderEditor]
---
# Inno.Editor.Panel.ShaderEditor editor-script examples

These examples use the selected logical script surface. Read [the feature contract](../../api/projects/inno-editor-panel-shadereditor.md) before adapting them. Host implementation namespaces and host-only readiness services are not substitutes for these references.

Provide the live services or authored source context required by each declaration. Compilation verifies these use sites, not device execution or completion of a reload lifecycle.

```csharp
using InnoEditor.Shaders;

[ShaderNodeDrawer("example.surface")]
public sealed class SurfaceDrawer : ShaderNodeDrawer
{
    public override void Draw(ShaderNodeDrawContext context)
    {
        float current = context.Read("gain", 1f);
        // Draw a shared Editor numeric widget here and call Write only after a user edit.
        // context.Write("gain", editedValue, continuous: true);
    }
}
```
