---
title: "Sdl3Toolchain"
description: "Reference for Sdl3Toolchain in Inno.Build.Toolchains.Sdl3."
uid: api.inno.build.toolchains.sdl3.2f07ce9bbbdd0d4e
kind: api
owners:
  - Inno.Build.Toolchains.Sdl3
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains-sdl3
---
# `Sdl3Toolchain`

This reference describes `Sdl3Toolchain` in `Inno.Build.Toolchains.Sdl3`. Read the [shared contract](../../../projects/inno-build-toolchains-sdl3.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`BuildAsync`](#api-1ee46b8d3da362fd) | Method |
| [`CreateRecipe`](#api-f2adda145d725a4d) | Method |
| [`componentDescriptor`](#api-9d10bf0884513234) | Property |

## Type declaration

<a id="api-2f07ce9bbbdd0d4e"></a>
<!-- api: T:Inno.Build.Toolchains.Sdl3.Sdl3Toolchain dc5c7844b44fa8e24ca685f0a9ae4525dd3f9e59e6d271de65d75f58a3ecf388 -->

```csharp
public static class Inno.Build.Toolchains.Sdl3.Sdl3Toolchain
```

Owns this backend's native recipe while SDK selection remains with the platform provider.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/build/Inno.Build.Toolchains.Sdl3/Sdl3Toolchain.cs#L13).

## `BuildAsync`

<a id="api-1ee46b8d3da362fd"></a>
<!-- api: M:Inno.Build.Toolchains.Sdl3.Sdl3Toolchain.BuildAsync(Inno.Build.Toolchains.NativeBuildContext,System.Threading.CancellationToken) 01aa72d1bc1830b7b7b9cd1b6efa6430dc39f0dfa484ab9913e76187ea2f209f -->

```csharp
public static System.Threading.Tasks.Task<Inno.Build.Toolchains.NativeBuildProduct> Inno.Build.Toolchains.Sdl3.Sdl3Toolchain.BuildAsync(Inno.Build.Toolchains.NativeBuildContext context, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Builds the component using the explicitly selected target SDK and validates the complete native product.

**Parameter `context`:** The operation-owned checkout, configuration, tools and target.

**Parameter `cancellationToken`:** Cancels and drains active tool processes before publication.

**Returns:** The immutable validated product; a failed or canceled candidate is not published.

**Throws `System.InvalidOperationException`:** The SDK is unassigned or native compilation or export validation fails.

**Throws `System.OperationCanceledException`:** The operation was canceled before publication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/build/Inno.Build.Toolchains.Sdl3/Sdl3Toolchain.cs#L48).

## `CreateRecipe`

<a id="api-f2adda145d725a4d"></a>
<!-- api: M:Inno.Build.Toolchains.Sdl3.Sdl3Toolchain.CreateRecipe(Inno.Build.Toolchains.NativeBuildContext) 54a08608f2fb8eb0d9784fcb91ef74bb6d19f3bd2b92ce880e40b35e11c70f19 -->

```csharp
public static Inno.Build.Toolchains.NativeBuildRecipe Inno.Build.Toolchains.Sdl3.Sdl3Toolchain.CreateRecipe(Inno.Build.Toolchains.NativeBuildContext context)
```

Declares the standalone source, SDK and ordered options without compiling or generating bindings.

**Parameter `context`:** The operation with an explicit target toolchain and this component's shared-library options.

**Returns:** A frozen declaration also consumed by BuildAsync; selected binding outputs are added by publication.

**Throws `System.ArgumentNullException`:** The context is null.

**Throws `System.InvalidOperationException`:** Target tools or component options have not been selected.

**Throws `System.NotSupportedException`:** The request uses static rather than standalone shared linkage.

**Throws `System.IO.FileNotFoundException`:** The component's declared build project is absent from the checkout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/build/Inno.Build.Toolchains.Sdl3/Sdl3Toolchain.cs#L99).

## `componentDescriptor`

<a id="api-9d10bf0884513234"></a>
<!-- api: P:Inno.Build.Toolchains.Sdl3.Sdl3Toolchain.componentDescriptor e1d4d1ab6d4b930a3e6f1ad43718fcadb671a6bc3bdf3be061c5afa216489a5d -->

```csharp
public static Inno.Build.Toolchains.NativeComponentDescriptor Inno.Build.Toolchains.Sdl3.Sdl3Toolchain.componentDescriptor { get; }
```

Gets the component's sole source, binding and intermediate owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Sdl3/build/Inno.Build.Toolchains.Sdl3/Sdl3Toolchain.cs#L20).
