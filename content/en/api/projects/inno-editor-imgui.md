---
title: Inno.Editor.ImGui
description: "Scoped Editor UI primitives, shared semantic metrics, pointer-free drawing and interaction rendering bridges."
uid: project.inno-editor-imgui
kind: project
owners: [Inno.Editor.ImGui]
exampleMode: host
exampleProjects: [Inno.Editor.ImGui]
---
# Inno.Editor.ImGui

Scoped Editor UI primitives, shared semantic metrics, pointer-free drawing and interaction rendering bridges.

## Use an active UI session

[Build consistent controls](../../extending/editor-widgets.md) explains synchronous session/context ownership, borrowed draw lists/fonts, one-scale metrics, constrained layouts, shared forms/cards/menus/dialogs, input capture and native hit testing. This library does not own Scene, Selection or panel business state.

Host and script facades are distinct. The selected logical API exposes pointer-free calls and neutral options, not userdata, backend texture IDs or internal pointer helpers. The engine-authored facade is documented here; upstream native/binding member mirrors remain outside scope.

## Preserve balanced presentation and retirement

Runtime-owned scopes unwind through failures; individual extensions are quarantined without corrupting the surrounding draw stack. Pending interaction retirement retains its owner and cannot authorize native-context disposal. Current-frame/session validation applies even when a draw-list value is copied.

Palette supplies generic semantic colors and metrics supply shared geometry; domain owners interpret asset and Shader categories. Gesture and dialog state stays session-owned and neutral. Existing real-context widget regressions cover geometry/input boundaries, while product/device and complete visual journeys remain separate evidence.

## Host examples

These use the actual host contracts and borrowed live dependencies. They do not initialize a product or establish lifecycle/device acceptance.

```csharp
using Inno.Editor.ImGui;

public static class Example0
{
    static void DrawEngineLabel()
    {
        ImGui.Text(ImGuiIcon.Inno + " InnoEngine");
    }
}
```

```csharp
using System;
using Inno.Editor.ImGui;
using Inno.Editor.ImGui.ImGuiWidget;

public static class Example1
{
    static bool DrawCardHeader(
        string id,
        string title,
        bool enabled,
        float trailingControlWidth,
        Action drawLeadingControl,
        Action drawTrailingControl,
        Action drawContextMenu
    ) {
        return EditorUiSession.current.widgets.CollapsingCard(id, title,
            drawLeadingControl: drawLeadingControl, drawTrailingControl: drawTrailingControl,
            defaultOpen: true, dimmed: !enabled,
            trailingControlWidth: trailingControlWidth,
            drawContextMenu: drawContextMenu);
    }
}
```

```csharp
using System;
using Inno.Editor.ImGui;
using Inno.Editor.ImGui;
using Inno.Editor.ImGui.ImGuiWidget;

public static class Example2
{
    static void DrawOpenCardBody(
        bool open,
        string id,
        bool enabled,
        Action drawContent
    ) {
        if (!open)
            return;
        try
        {
            EditorUiSession.current.widgets.CardBody(id, drawContent: drawContent, dimmed: !enabled);
        }
        finally
        {
            ImGui.TreePop();
        }
    }
}
```

## Script examples

- [Explicit editor-script surface](../../extending/examples/inno-editor-imgui-editor-script.md)

## Source boundary

[Source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Inno.Editor.ImGui.csproj). Declarations, script selection and runtime behavior require separate matching evidence.

## API reference

[Types and exact member contracts](../types/editor-presentation/inno-editor-imgui/index.md) retain the engine-owned declarations and captured XML.
