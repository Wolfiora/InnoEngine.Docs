---
title: Inno.Editor.Inspection
description: "Generation-scoped target/property/attribute drawers and feature-owned reversible mutation, independent of Inspector Panel."
uid: project.inno-editor-inspection
kind: project
owners: [Inno.Editor.Inspection]
exampleMode: host
exampleProjects: [Inno.Editor.Inspection]
---
# Inno.Editor.Inspection

Generation-scoped target/property/attribute drawers and feature-owned reversible mutation, independent of Inspector Panel.

## Reuse common inspection

[Add an Inspector drawer](../../extending/inspectors.md) explains deterministic discovery, conditional ambiguity, one-snapshot name binding, shared property rendering, inline isolation and neutral text state. A feature references Inspection and injects only its domain services, without depending on another panel.

## Preserve mutation and lifetime contracts

PropertyDrawContext.SetValue routes to the feature's edit service. Drawers do not mutate serialized owners behind History. Shared annotations affect presentation, not persistence or schema. Linear color semantics, precise editing/range constraints and readonly behavior remain consistent across default/custom/inline controls.

Each renderer owns text state through weak owners, full property paths and local keys; only strings are retained. Candidate registry failure preserves the previous valid snapshot. Feature icon providers share policy without panel-to-panel references. Editor scripts receive selected drawer and property-edit contracts, not activators, registry snapshots or concrete scene mutation adapters.

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

```csharp
using Inno.Editor.Inspection;
using Inno.Editor.ImGui;
using Inno.Editor.ImGui.ImGuiWidget;

public readonly record struct AuthoringWeight(float value);

[PropertyDrawer(typeof(AuthoringWeight), priority: 100)]
public sealed class AuthoringWeightDrawer : IPropertyDrawer
{
    public void Draw(PropertyDrawContext context)
    {
        float value = context.GetValue() is AuthoringWeight current ? current.value : 0f;
        if (EditorUiSession.current.widgets.CompactSliderFloat($"##{context.path}", ref value, 0f, 1f))
            context.SetValue(new AuthoringWeight(value));
    }
}
```

## Script examples

- [Explicit editor-script surface](../../extending/examples/inno-editor-inspection-editor-script.md)

## Source boundary

[Source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Inspection/Inno.Editor.Inspection.csproj). Declarations, script selection and runtime behavior require separate matching evidence.

## API reference

[Types and exact member contracts](../../api/engine/editor/inspection/index.md) preserve captured declarations and source XML.

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Editor script API](../../api/scripting/index.md)
