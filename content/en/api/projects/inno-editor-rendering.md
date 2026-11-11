---
title: Inno.Editor.Rendering
description: "Backend-neutral viewport contributors, model composition, safe previews and authoring target artifacts."
uid: project.inno-editor-rendering
kind: project
owners: [Inno.Editor.Rendering]
exampleMode: host
exampleProjects: [Inno.Editor.Rendering]
---
# Inno.Editor.Rendering

Backend-neutral viewport contributors, model composition, safe previews and authoring target artifacts.

## Compose a model without coupling the Editor

[Contribute to a viewport](../../extending/editor-viewports.md) explains purpose IDs, render routes, independent interaction priority, frame-scoped content and same-frame manipulation matrices. Multiple models need an explicit route and separate targets with compatible output format; there is no implicit cross-model depth sharing.

## Publish ready output

Opaque presentation output becomes ready only after the current target revision records its write. Preview release covers targets that have not produced an image and their persistent program scopes. Resident texture generation/size is rechecked after reimport. Wrong or absent contributors produce local diagnostics/unavailable state rather than exposing native handles or breaking unrelated Editor features.

## Distinguish candidate policies

Interactive draft Check requires tool output plus real device pipeline/link/reflection validation at a safe point and does not fall back to a stale preview as proof of success. The formal authoring artifact provider may retain last-good Ready output while compiling a replacement by content version. Pending, Failed and Unavailable remain distinct. PipelineDocuments records detached settings edits with full owner references through the shared draft/History service; Save and runtime activation are separate. Completed-frame Stats reports unavailable diagnostics explicitly.

## Host examples

These use the actual host contracts and borrowed live dependencies. They do not initialize a product or establish lifecycle/device acceptance.

```csharp
using Inno.Editor.Rendering;
using Inno.Rendering;
using Inno.Rendering.Runtime;

public readonly record struct ViewportExtent(
    int width,
    int height
);

[EditorViewportContributorExtension("sample.viewport-extent", "sample.viewport")]
public sealed class ViewportExtentContributor : EditorViewportContributor
{
    public override bool CanContribute(EditorViewportContext context)
        => context.pixelWidth > 0 && context.pixelHeight > 0;

    public override EditorViewportContribution Build(EditorViewportContext context)
    {
        var data = new RenderFrameData();
        data.Set(new RenderDataChannelId("sample.viewport-extent"),
            new ViewportExtent(context.pixelWidth, context.pixelHeight));
        return new EditorViewportContribution(data);
    }
}
```

## Source boundary

[Source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/Inno.Editor.Rendering.csproj). Declarations, script selection and runtime behavior require separate matching evidence.

## API reference

[Types and exact member contracts](../types/editor-domains/inno-editor-rendering/index.md) preserve captured declarations and source XML.
