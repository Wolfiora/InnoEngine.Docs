---
title: "ImGuizmoToolchain"
description: "Reference for ImGuizmoToolchain in Inno.Build.Toolchains.ImGuizmo."
uid: api.inno.build.toolchains.imguizmo.4977392cfe1a4a7c
kind: api
owners:
  - Inno.Build.Toolchains.ImGuizmo
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains-imguizmo
---
# `ImGuizmoToolchain`

This reference describes `ImGuizmoToolchain` in `Inno.Build.Toolchains.ImGuizmo`. Read the [shared contract](../../../projects/inno-build-toolchains-imguizmo.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`BindImGui`](#api-3edcd1cd76a4bd6b) | Method |
| [`BuildAsync`](#api-395f2da4230f08fb) | Method |
| [`CreateRecipe`](#api-044245144f0cecef) | Method |
| [`componentDescriptor`](#api-2d14cacb08205e7d) | Property |

## Type declaration

<a id="api-4977392cfe1a4a7c"></a>
<!-- api: T:Inno.Build.Toolchains.ImGuizmo.ImGuizmoToolchain 15c8e72ef65d4950609548919db88ecdb1f5aaa453fc70790a228550fbf93dee -->

```csharp
public static class Inno.Build.Toolchains.ImGuizmo.ImGuizmoToolchain
```

Builds and installs this component through the shared native process lifecycle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/build/Inno.Build.Toolchains.ImGuizmo/ImGuizmoToolchain.cs#L14).

## `BindImGui`

<a id="api-3edcd1cd76a4bd6b"></a>
<!-- api: M:Inno.Build.Toolchains.ImGuizmo.ImGuizmoToolchain.BindImGui(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeBuildRecipe,Inno.Build.Toolchains.NativeBuildProduct) 64bae928c54972e481c912a47c931f6a2942f5183603f156bbfaede3966c9b6b -->

```csharp
public static Inno.Build.Toolchains.NativeBuildRecipe Inno.Build.Toolchains.ImGuizmo.ImGuizmoToolchain.BindImGui(Inno.Build.Toolchains.NativeBuildContext context, Inno.Build.Toolchains.NativeBuildRecipe sourceRecipe, Inno.Build.Toolchains.NativeBuildProduct imGui)
```

Freezes the exact ImGui link input for both compilation and complete product cache lookup.

**Parameter `context`:** The operation owning the explicit target SDK.

**Parameter `sourceRecipe`:** The component's previously declared source recipe.

**Parameter `imGui`:** The borrowed, integrity-checked dependency matching this target.

**Returns:** A recipe including the selected link library and dependency fingerprint.

**Throws `System.ArgumentException`:** The dependency belongs to a different component or target.

**Throws `System.InvalidOperationException`:** The dependency does not expose exactly one link library.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/build/Inno.Build.Toolchains.ImGuizmo/ImGuizmoToolchain.cs#L149).

## `BuildAsync`

<a id="api-395f2da4230f08fb"></a>
<!-- api: M:Inno.Build.Toolchains.ImGuizmo.ImGuizmoToolchain.BuildAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeBuildProduct,System.Threading.CancellationToken) 1aa10b8217b67c6bc41952a81683b690bbe65588abaf18d1cd0f2bdb849c482c -->

```csharp
public static System.Threading.Tasks.Task<Inno.Build.Toolchains.NativeBuildProduct> Inno.Build.Toolchains.ImGuizmo.ImGuizmoToolchain.BuildAsync(Inno.Build.Toolchains.NativeBuildContext context, Inno.Build.Toolchains.NativeBuildProduct imGui, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Builds and installs the component for the explicitly selected native target.

**Parameter `context`:** The checkout and configuration whose sources and outputs belong to this operation.

**Parameter `imGui`:** The matching published ImGui product providing the native link dependency.

**Throws `System.ArgumentException`:** The configuration is invalid.

**Throws `System.InvalidOperationException`:** A native build process fails.

**Parameter `cancellationToken`:** Cancels child processes and prevents artifact installation after cancellation.

**Returns:** The validated gizmo library linked against the explicitly supplied ImGui product.

**Throws `System.OperationCanceledException`:** The operation was canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/build/Inno.Build.Toolchains.ImGuizmo/ImGuizmoToolchain.cs#L49).

## `CreateRecipe`

<a id="api-044245144f0cecef"></a>
<!-- api: M:Inno.Build.Toolchains.ImGuizmo.ImGuizmoToolchain.CreateRecipe(Inno.Build.Toolchains.NativeBuildContext) 4a65a038232a2656dd0c8443b6a0e65cf4e514023e18bfe36f615e2f6a353293 -->

```csharp
public static Inno.Build.Toolchains.NativeBuildRecipe Inno.Build.Toolchains.ImGuizmo.ImGuizmoToolchain.CreateRecipe(Inno.Build.Toolchains.NativeBuildContext context)
```

Declares gizmo source inputs before preparing bindings or its ImGui link dependency.

**Parameter `context`:** The operation with a frozen target SDK and explicit shared component options.

**Returns:** The source recipe; execution adds the validated ImGui library and its artifact identity.

**Throws `System.ArgumentNullException`:** The context is null.

**Throws `System.InvalidOperationException`:** Required upstream source, SDK or component options are unavailable.

**Throws `System.NotSupportedException`:** The requested linkage is not supported by this recipe.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/build/Inno.Build.Toolchains.ImGuizmo/ImGuizmoToolchain.cs#L112).

## `componentDescriptor`

<a id="api-2d14cacb08205e7d"></a>
<!-- api: P:Inno.Build.Toolchains.ImGuizmo.ImGuizmoToolchain.componentDescriptor 8c17fa661de61bd5f047badc60fb617f7940f29cb3fb5fc7c9998b08cb1d8a58 -->

```csharp
public static Inno.Build.Toolchains.NativeComponentDescriptor Inno.Build.Toolchains.ImGuizmo.ImGuizmoToolchain.componentDescriptor { get; }
```

Gets the unique native and recipe owners used for sources and target-scoped intermediates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/ImGui/build/Inno.Build.Toolchains.ImGuizmo/ImGuizmoToolchain.cs#L19).
