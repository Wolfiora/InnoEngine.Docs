---
title: Inno.Editor.ImGui editor-script examples
description: Verified logical API use sites with the owning feature lifecycle kept explicit.
uid: examples.inno-editor-imgui.editor-script
kind: how-to
owners:
  - Inno.Editor.ImGui
contracts:
  - project.inno-editor-imgui
exampleMode: editor-script
exampleProjects:
  - Inno.Editor.ImGui
---
# Inno.Editor.ImGui editor-script examples

These examples use the selected logical script surface. Read [the feature contract](../../architecture/projects/inno-editor-imgui.md) before adapting them. Host implementation namespaces and host-only readiness services are not substitutes for these references.

Provide the live services or authored source context required by each declaration. Compilation verifies these use sites, not device execution or completion of a reload lifecycle.

```csharp
using InnoEditor.ImGui;

public static class Example0
{
    static void DrawHelp()
    {
        EditorUiSession.current.widgets.Hint("Changes use the shared Editor History.");
    }
}
```

```csharp
using System.Numerics;
using InnoEditor.Core;
using InnoEditor.ImGui;

[EditorModal("example.message", "Message")]
public sealed class MessageModal : EditorModal
{
    private bool m_visible = true;
    private DialogPresentation m_content;
    private DialogLayout m_layout;
    public override bool isVisible => m_visible;
    public override bool allowScrolling => false;
    protected override Vector2? OnPrepare(
        EditorContext context,
        Vector2 availableContentSize
    ) {
        m_content = new("A message that can wrap.", actionLabel: "Close", cancelOnEscape: true);
        m_layout = EditorUiSession.current.widgets.MeasureDialog(m_content, availableContentSize);
        return m_layout.size;
    }
    protected override void OnDraw(EditorContext context)
    {
        if (EditorUiSession.current.widgets.DrawDialog(m_content, m_layout))
            m_visible = false;
    }
}
```
