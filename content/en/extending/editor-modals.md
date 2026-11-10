---
exampleMode: host
exampleProjects: [Inno.Editor.Core]
title: Add a modal view
description: Declare a host-owned overlay with explicit visibility, sizing and preparation behavior.
uid: extending.editor-modals
kind: how-to
owners: [Inno.Editor.Core, Inno.Editor.Interactions, Inno.Editor.ImGui]
contracts: [architecture.editor-generations]
---
# Add a modal view

Use `EditorModal` for a non-dockable overlay whose visibility comes from its owning feature. The presentation runtime owns positioning, input blocking and the window. The feature draws its body and submits user actions back to the real operation owner.

## Declare visibility and sizing

This host-side declaration requires a discovered Editor extension assembly and a presentation implementation for the body:

```csharp
using System.Numerics;
using Inno.Editor.Core;

[EditorModule("example.operation")]
public sealed class OperationModule : EditorModule
{
    public bool isRunning { get; set; }
}

[EditorModal("example.operation-progress", "Operation Progress", order: 200)]
public sealed class OperationModal(OperationModule operation) : EditorModal
{
    public override bool isVisible => operation.isRunning;
    public override bool blocksInteraction => true;
    public override bool canMove => true;
    public override bool canResize => true;
    public override Vector2 initialSize => new(900f, 600f);
    public override Vector2 minimumSize => new(640f, 420f);

    protected override void OnDraw(EditorContext context)
    {
        // Render the owning operation's current presentation here.
    }
}
```

The example declares a sized surface; it is not a progress-operation implementation. The actual operation remains with its feature owner. Do not make drawing start, cancel or publish an operation without routing the user's action through that owner.

Move and resize default to false, preserving centered content-sized overlays. Initial and minimum dimensions are unscaled Editor units. A positive initial width remains meaningful when height is zero; zero width uses the general default, and zero height requests this frame's content measurement. A modal remains non-dockable and non-collapsible even when movement and resizing are enabled.

## Prepare content once per presentation

Override protected `OnPrepare(EditorContext, Vector2)` when the runtime needs content sizing. Its input and returned dimensions are already in current presentation coordinates; do not multiply them by zoom again. Preparation reads snapshots and measures them. It must not build, publish, cancel or change History.

A content-sized window prepares before opening. An explicitly sized resizable window prepares after native input determines its current content bounds. Each presentation prepares once and draws once. Missing or invalid measurements for an undeclared height quarantine the extension and report diagnostics instead of silently inventing a size.

`allowScrolling` defaults to true. Turn it off when child regions own all scrolling, avoiding duplicate modal and child scrollbars. Host `Prepare` and `Draw` entry points are excluded from script projection; extensions implement the protected hooks.
