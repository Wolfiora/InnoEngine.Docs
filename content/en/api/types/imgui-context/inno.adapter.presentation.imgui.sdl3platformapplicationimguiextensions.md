---
title: "Inno.Adapter.Presentation.ImGui.Sdl3PlatformApplicationImGuiExtensions"
description: "Reference for Inno.Adapter.Presentation.ImGui.Sdl3PlatformApplicationImGuiExtensions in Inno.Adapter.Presentation.ImGui.Sdl3."
uid: api.inno.adapter.presentation.imgui.sdl3.1f9b31fc57ed8367
kind: api
owners:
  - Inno.Adapter.Presentation.ImGui.Sdl3
apiSurface: source-clr
contracts:
  - project.inno-adapter-presentation-imgui-sdl3
---
# `Inno.Adapter.Presentation.ImGui.Sdl3PlatformApplicationImGuiExtensions`

This reference describes `Inno.Adapter.Presentation.ImGui.Sdl3PlatformApplicationImGuiExtensions` in `Inno.Adapter.Presentation.ImGui.Sdl3`. Read the [shared contract](../../projects/inno-adapter-presentation-imgui-sdl3.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CreateImGuiContext`](#api-00f37cf44e2b1ae1) | Method |
| [`DestroyImGuiContext`](#api-c2da187e980c2c44) | Method |

## Type declaration

<a id="api-1f9b31fc57ed8367"></a>
<!-- api: T:Inno.Adapter.Presentation.ImGui.Sdl3PlatformApplicationImGuiExtensions 43c72939254fab00f0dd5199297def40bbe73948b58f8410c4ba39a9893798f9 -->

```csharp
public static class Inno.Adapter.Presentation.ImGui.Sdl3PlatformApplicationImGuiExtensions
```

Extension APIs that add ImGui integration on top of `Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/Sdl3PlatformApplicationImGuiExtensions.cs#L14).

## `CreateImGuiContext`

<a id="api-00f37cf44e2b1ae1"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.Sdl3PlatformApplicationImGuiExtensions.CreateImGuiContext(Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication,Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow,Inno.Adapter.Presentation.ImGui.ImGuiContextFlags,Inno.Adapter.Presentation.ImGui.ImGuiInteractionOptions,Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer) 474c91685ae7f6af7ed7dba89763261750f858f5fb8128240506a98e3599b8ff -->

```csharp
public static Inno.Adapter.Presentation.ImGui.PlatformImGuiContext Inno.Adapter.Presentation.ImGui.Sdl3PlatformApplicationImGuiExtensions.CreateImGuiContext(Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication application, Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow window, Inno.Adapter.Presentation.ImGui.ImGuiContextFlags contextFlags, Inno.Adapter.Presentation.ImGui.ImGuiInteractionOptions interaction, Inno.Adapter.Presentation.ImGui.IPlatformImGuiRenderer? renderer = null)
```

Creates one ImGui context and transfers the supplied renderer ownership only after successful creation.

**Parameter `application`:** Target platform application instance.

**Parameter `window`:** Target platform window.

**Parameter `interaction`:** Explicit immutable keyboard and wheel conventions supplied by the product.

**Parameter `contextFlags`:** ImGui context feature flags.

**Parameter `renderer`:** Optional presentation backend; ownership transfers on success and remains with the caller on failure.

**Returns:** The newly created context, which owns its renderer until complete retirement and disposal.

**Throws `System.ArgumentNullException`:** An application, window, or interaction configuration is null.

**Throws `System.ArgumentException`:** The window does not belong to the supplied application.

**Throws `System.InvalidOperationException`:** The window is closed or already owns an ImGui context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/Sdl3PlatformApplicationImGuiExtensions.cs#L111).

## `DestroyImGuiContext`

<a id="api-c2da187e980c2c44"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.Sdl3PlatformApplicationImGuiExtensions.DestroyImGuiContext(Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication,Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow) 25b38053a09f503d8e7b036861d9327f7d8e55201cc3d2a89e10d480ff56c45d -->

```csharp
public static void Inno.Adapter.Presentation.ImGui.Sdl3PlatformApplicationImGuiExtensions.DestroyImGuiContext(Inno.Adapter.Platform.Sdl3.Sdl3PlatformApplication application, Inno.Adapter.Platform.Sdl3.Sdl3PlatformWindow window)
```

Retires and disposes the window's context, retaining its application registration if retirement fails.

**Parameter `application`:** Target platform application instance.

**Parameter `window`:** Target platform window.

**Throws `System.ArgumentNullException`:** The application or window is null.

**Throws `System.InvalidOperationException`:** Retirement cannot complete at the current owner-thread safe point; the context remains owned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/Sdl3PlatformApplicationImGuiExtensions.cs#L158).
