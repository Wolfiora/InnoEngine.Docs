---
title: Inno.Editor.Panel.Inspector
description: "Target inspection, generation-safe locking, scene element operations and typed reference drops."
uid: project.inno-editor-panel-inspector
kind: project
owners: [Inno.Editor.Panel.Inspector]
exampleMode: host
exampleProjects: [Inno.Editor.Panel.Inspector]
---
# Inno.Editor.Panel.Inspector

Target inspection, generation-safe locking, scene element operations and typed reference drops.

## Inspect through shared feature contracts

[Inspector tasks](../../manual/editor/inspector.md) explain target locking, Transform spaces, component/system cards, tags/layers and reference assignment. [Drawer extensions](../../extending/inspectors.md) belong to the reusable Inspection project; this panel contributes its window, header, scene actions and drop targets.

## Retain identity rather than an old instance

Locking retains a resolvable persistent identity for scene targets and weak references for other collectible targets. It does not change Selection. Failure to resolve unlocks. Play selection resolves runtime copies, whose edits use temporary History and cannot persist.

All data mutation routes through SceneEdits, including enabled state, order, Reset/Remove and root-property changes. Transform world editing records actual local deltas and fails visibly for noninvertible parents. Asset drops use typed compatibility checks and persistent item IDs; short source-qualified display names do not replace full path provenance.

Header/property/card layout shares one vertical scroll owner and constrained width. Generic drawers and registries are not duplicated here; shared settings/icon services provide consistent appearance.

## Host examples

These use the actual host contracts and borrowed live dependencies. They do not initialize a product or establish lifecycle/device acceptance.

```csharp
using System;
using Inno.Assets;
using Inno.Editor.Inspection;

[InspectionDrawer(typeof(TextAsset), priority: 100)]
public sealed class TextAssetDrawer : InspectionDrawer<TextAsset>
{
    public override string icon => "T";

    protected override (string name, Action<string>? setter) BindName(
        InspectionDrawContext context,
        TextAsset target
    ) => (target.name, null);

    protected override void Draw(
        InspectionDrawContext context,
        TextAsset target
    ) {
        context.DrawProperties();
    }
}
```

## Source boundary

[Source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/panels/Inno.Editor.Panel.Inspector/Inno.Editor.Panel.Inspector.csproj). Declarations, script selection and runtime behavior require separate matching evidence.

## API reference

[Types and exact member contracts](../types/editor-presentation/inno-editor-panel-inspector/index.md) retain the engine-owned declarations and captured XML.
