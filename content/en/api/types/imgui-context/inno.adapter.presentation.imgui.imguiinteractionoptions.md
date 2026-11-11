---
title: "Inno.Adapter.Presentation.ImGui.ImGuiInteractionOptions"
description: "Reference for Inno.Adapter.Presentation.ImGui.ImGuiInteractionOptions in Inno.Adapter.Presentation.ImGui.Sdl3."
uid: api.inno.adapter.presentation.imgui.sdl3.a8808ec3a4a895ad
kind: api
owners:
  - Inno.Adapter.Presentation.ImGui.Sdl3
apiSurface: source-clr
contracts:
  - project.inno-adapter-presentation-imgui-sdl3
---
# `Inno.Adapter.Presentation.ImGui.ImGuiInteractionOptions`

This reference describes `Inno.Adapter.Presentation.ImGui.ImGuiInteractionOptions` in `Inno.Adapter.Presentation.ImGui.Sdl3`. Read the [shared contract](../../projects/inno-adapter-presentation-imgui-sdl3.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d3e884622286d619) | Method |
| [`commandKeyBehavior`](#api-36d0a0e2b7051adc) | Property |
| [`horizontalWheelDirection`](#api-445ecb755d66f6c6) | Property |

## Type declaration

<a id="api-a8808ec3a4a895ad"></a>
<!-- api: T:Inno.Adapter.Presentation.ImGui.ImGuiInteractionOptions 54465e014c4ba58cae918d664fcb0bec7e9e4f38ff3d24aa8787153af7b44c41 -->

```csharp
public sealed class Inno.Adapter.Presentation.ImGui.ImGuiInteractionOptions
```

Freezes product-selected keyboard conventions and horizontal wheel interpretation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/ImGuiInteractionOptions.cs#L8).

## `#ctor`

<a id="api-d3e884622286d619"></a>
<!-- api: M:Inno.Adapter.Presentation.ImGui.ImGuiInteractionOptions.#ctor(System.Boolean,System.Int32) 0733d09e25e12371174be90a7a93db31d613db3de1a2f69565801c25ed560ea9 -->

```csharp
public Inno.Adapter.Presentation.ImGui.ImGuiInteractionOptions.ImGuiInteractionOptions(bool commandKeyBehavior, int horizontalWheelDirection)
```

Captures interaction conventions without inferring them from the current operating system.

**Parameter `commandKeyBehavior`:** Whether ImGui should use Command-based editing and selection conventions.

**Parameter `horizontalWheelDirection`:** Either one or minus one, applied to the platform event's horizontal wheel value.

**Throws `System.ArgumentOutOfRangeException`:** The wheel direction is not one or minus one.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/ImGuiInteractionOptions.cs#L22).

## `commandKeyBehavior`

<a id="api-36d0a0e2b7051adc"></a>
<!-- api: P:Inno.Adapter.Presentation.ImGui.ImGuiInteractionOptions.commandKeyBehavior fb4d5e2f8f9ec37fa8230ee6f9cea2fc7f0be85fffec4531eb25d62501df8d7b -->

```csharp
public bool Inno.Adapter.Presentation.ImGui.ImGuiInteractionOptions.commandKeyBehavior { get; }
```

Gets the explicitly chosen editing and selection conventions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/ImGuiInteractionOptions.cs#L35).

## `horizontalWheelDirection`

<a id="api-445ecb755d66f6c6"></a>
<!-- api: P:Inno.Adapter.Presentation.ImGui.ImGuiInteractionOptions.horizontalWheelDirection f1c3fb3fdc8440c46fe5aa2aadaad66c453e6c9b16ee4a107ab4a1e114a55150 -->

```csharp
public int Inno.Adapter.Presentation.ImGui.ImGuiInteractionOptions.horizontalWheelDirection { get; }
```

Gets the horizontal platform wheel multiplier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/runtime/Inno.Adapter.Presentation.ImGui.Sdl3/Api/ImGuiInteractionOptions.cs#L40).
