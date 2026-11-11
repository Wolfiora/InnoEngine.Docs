---
title: "Inno.Adapter.Presentation.ImGui.ImGuiPresentationProvider"
description: "Reference for Inno.Adapter.Presentation.ImGui.ImGuiPresentationProvider in Inno.Adapter.Presentation.ImGui.Bgfx."
uid: api.inno.adapter.presentation.imgui.bgfx.0c7b5023d6394d3b
kind: api
owners:
  - Inno.Adapter.Presentation.ImGui.Bgfx
apiSurface: source-clr
contracts:
  - project.inno-adapter-presentation-imgui-bgfx
---
# `Inno.Adapter.Presentation.ImGui.ImGuiPresentationProvider`

This reference describes `Inno.Adapter.Presentation.ImGui.ImGuiPresentationProvider` in `Inno.Adapter.Presentation.ImGui.Bgfx`. Read the [shared contract](../../../projects/inno-adapter-presentation-imgui-bgfx.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Adapter.Presentation.PresentationBackendProvider`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-54adede1a0a66f0a) | Method |
| [`CreateContext`](#api-776961223089ae7e) | Method |

## Type declaration

<a id="api-0c7b5023d6394d3b"></a>
<!-- api: T:Inno.Adapter.Presentation.ImGui.ImGuiPresentationProvider bac8c72219a7ddbc501e31edd3f1e3900fc100dc6203032cc43133d43996e5aa -->

```csharp
public sealed class Inno.Adapter.Presentation.ImGui.ImGuiPresentationProvider : Inno.Adapter.Presentation.PresentationBackendProvider
```

Registers SDL3 window integration with BGFX ImGui presentation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Bgfx/ImGuiPresentationProvider.cs#L9).

## `#ctor`

<a id="api-54adede1a0a66f0a"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.ImGuiPresentationProvider.#ctor(Inno.Adapter.Presentation.ImGui.ImGuiInteractionOptions) 93edcce07f31616974bebe2882d41a15a1935b4185f14a580e7e07b98117c66e -->

```csharp
public Inno.Adapter.Presentation.ImGui.ImGuiPresentationProvider.ImGuiPresentationProvider(Inno.Adapter.Presentation.ImGui.ImGuiInteractionOptions interaction)
```

Registers the bundled presentation implementation without creating a native context.

**Parameter `interaction`:** The borrowed immutable conventions explicitly selected by the Editor product.

**Throws `System.ArgumentNullException`:** Interaction configuration is absent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Bgfx/ImGuiPresentationProvider.cs#L22).

## `CreateContext`

<a id="api-776961223089ae7e"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.ImGuiPresentationProvider.CreateContext(Inno.Adapter.Presentation.PresentationBackendOptions) 38681f14d63e63bac16d9948f0871c4e58a328a12edf7e16e152a93961d5e200 -->

```csharp
public override Inno.Adapter.Presentation.IPresentationContext Inno.Adapter.Presentation.ImGui.ImGuiPresentationProvider.CreateContext(Inno.Adapter.Presentation.PresentationBackendOptions options)
```

Creates a new caller-owned presentation context over the supplied host resources.

**Parameter `options`:** Externally owned platform and rendering resources, together with the requested presentation policy.

**Returns:** A new context whose caller must dispose it before releasing the supplied resources.
Providers must not return null.

**Throws `System.NotSupportedException`:** The host resources or requested features are incompatible with this implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Bgfx/ImGuiPresentationProvider.cs#L29).
