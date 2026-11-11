---
title: "ImGuiToolchain"
description: "Reference for ImGuiToolchain in Inno.Build.Toolchains.ImGui."
uid: api.inno.build.toolchains.imgui.e0a9740b39ddd554
kind: api
owners:
  - Inno.Build.Toolchains.ImGui
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains-imgui
---
# `ImGuiToolchain`

This reference describes `ImGuiToolchain` in `Inno.Build.Toolchains.ImGui`. Read the [shared contract](../../../projects/inno-build-toolchains-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`BuildAsync`](#api-c42114783caa835a) | Method |
| [`CreateRecipe`](#api-c427c58c10960b64) | Method |
| [`componentDescriptor`](#api-4ada589813d66796) | Property |

## Type declaration

<a id="api-e0a9740b39ddd554"></a>
<!-- api: T:Inno.Build.Toolchains.ImGui.ImGuiToolchain faaf5019ee8e8ccc5d1361f6404dcc2045f282830a537e7779f4a84383c557be -->

```csharp
public static class Inno.Build.Toolchains.ImGui.ImGuiToolchain
```

Owns this backend's native recipe while SDK selection remains with the platform provider.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/build/Inno.Build.Toolchains.ImGui/ImGuiToolchain.cs#L13).

## `BuildAsync`

<a id="api-c42114783caa835a"></a>
<!-- api: M:Inno.Build.Toolchains.ImGui.ImGuiToolchain.BuildAsync(Inno.Build.Toolchains.NativeBuildContext,System.Threading.CancellationToken) e1c4c8d960588ce133709b5d0ef4cdb19fac575d99f44171772452ae66bb2d80 -->

```csharp
public static System.Threading.Tasks.Task<Inno.Build.Toolchains.NativeBuildProduct> Inno.Build.Toolchains.ImGui.ImGuiToolchain.BuildAsync(Inno.Build.Toolchains.NativeBuildContext context, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Builds the component using the explicitly selected target SDK and validates the complete native product.

**Parameter `context`:** The operation-owned checkout, configuration, tools and target.

**Parameter `cancellationToken`:** Cancels and drains active tool processes before publication.

**Returns:** The immutable validated product; a failed or canceled candidate is not published.

**Throws `System.InvalidOperationException`:** The SDK is unassigned or native compilation or export validation fails.

**Throws `System.OperationCanceledException`:** The operation was canceled before publication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/build/Inno.Build.Toolchains.ImGui/ImGuiToolchain.cs#L42).

## `CreateRecipe`

<a id="api-c427c58c10960b64"></a>
<!-- api: M:Inno.Build.Toolchains.ImGui.ImGuiToolchain.CreateRecipe(Inno.Build.Toolchains.NativeBuildContext) 29e432c6aef29c85d53887dded8785795393c706c64e30169278258181530dab -->

```csharp
public static Inno.Build.Toolchains.NativeBuildRecipe Inno.Build.Toolchains.ImGui.ImGuiToolchain.CreateRecipe(Inno.Build.Toolchains.NativeBuildContext context)
```

Declares the selected source, tools and parameters without generating bindings or compiling native code.

**Parameter `context`:** The operation with a frozen target SDK and explicit shared component options.

**Returns:** The source recipe; publication adds the selected binding outputs before computing artifact identity.

**Throws `System.ArgumentNullException`:** The context is null.

**Throws `System.InvalidOperationException`:** The target SDK or component options have not been assigned.

**Throws `System.NotSupportedException`:** The component requests a linkage mode this recipe cannot produce.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/build/Inno.Build.Toolchains.ImGui/ImGuiToolchain.cs#L100).

## `componentDescriptor`

<a id="api-4ada589813d66796"></a>
<!-- api: P:Inno.Build.Toolchains.ImGui.ImGuiToolchain.componentDescriptor 064777d83c6313d7d53c02142a9df6c677766f3daab81c269f221703e94a6230 -->

```csharp
public static Inno.Build.Toolchains.NativeComponentDescriptor Inno.Build.Toolchains.ImGui.ImGuiToolchain.componentDescriptor { get; }
```

Gets the component's sole source, binding and intermediate owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/build/Inno.Build.Toolchains.ImGui/ImGuiToolchain.cs#L18).
