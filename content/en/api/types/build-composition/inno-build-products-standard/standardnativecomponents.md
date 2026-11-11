---
title: "StandardNativeComponents"
description: "Reference for StandardNativeComponents in Inno.Build.Products.Standard."
uid: api.inno.build.products.standard.81123f2d536f208d
kind: api
owners:
  - Inno.Build.Products.Standard
apiSurface: source-clr
contracts:
  - project.inno-build-products-standard
---
# `StandardNativeComponents`

This reference describes `StandardNativeComponents` in `Inno.Build.Products.Standard`. Read the [shared contract](../../../projects/inno-build-products-standard.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CreateEditor`](#api-02201969b70e41b6) | Method |
| [`CreatePlayer`](#api-75e6d05a4bf15784) | Method |
| [`CreateShaderTools`](#api-dc3a0dcc33466d83) | Method |
| [`CreateStaticPlayer`](#api-cf06c85b2ae1f422) | Method |

## Type declaration

<a id="api-81123f2d536f208d"></a>
<!-- api: T:Inno.Build.Products.Standard.StandardNativeComponents 3a678e37a83d88d83b6d645e7fc720c1b2aee7cb2d26479d8a1eb2361ce34f0d -->

```csharp
public static class Inno.Build.Products.Standard.StandardNativeComponents
```

Declares the standard product closures while keeping backend selection out of shared build mechanisms.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/products/Inno.Build.Products.Standard/StandardNativeComponents.cs#L18).

## `CreateEditor`

<a id="api-02201969b70e41b6"></a>
<!-- api: M:Inno.Build.Products.Standard.StandardNativeComponents.CreateEditor(Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile,System.Func{System.String,Inno.Build.Toolchains.NativeComponentBuildOptions},System.Func{System.String,System.String,System.String,System.String}) 49a03cdef041e6bc4dfb487d5b716d7d8606e257155befb290edb20b2b7965a3 -->

```csharp
public static Inno.Build.Toolchains.ProductNativeBuildPlan Inno.Build.Products.Standard.StandardNativeComponents.CreateEditor(Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile profile, System.Func<string, Inno.Build.Toolchains.NativeComponentBuildOptions> options, System.Func<string, string, string, string?> layout)
```

Composes the shared runtime closure and the Editor's presentation and authoring tools.

**Returns:** A fresh immutable Editor plan with the ImGuizmo dependency declared explicitly.

**Parameter `profile`:** The selected integration-owned BGFX SDK invocation for standalone component builds.

**Parameter `options`:** The platform-owned configuration for each named component.

**Parameter `layout`:** The platform-owned destination of each component output, or null to exclude it.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/products/Inno.Build.Products.Standard/StandardNativeComponents.cs#L77).

## `CreatePlayer`

<a id="api-75e6d05a4bf15784"></a>
<!-- api: M:Inno.Build.Products.Standard.StandardNativeComponents.CreatePlayer(Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile,System.Func{System.String,Inno.Build.Toolchains.NativeComponentBuildOptions},System.Func{System.String,System.String,System.String,System.String}) 75911df82f820d874c775d8410cb1cef0d1fa17ccd115a9a73ca4d7abd5a3211 -->

```csharp
public static Inno.Build.Toolchains.ProductNativeBuildPlan Inno.Build.Products.Standard.StandardNativeComponents.CreatePlayer(Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile profile, System.Func<string, Inno.Build.Toolchains.NativeComponentBuildOptions> options, System.Func<string, string, string, string?> layout)
```

Composes the standard Player's reusable native components with explicit deployment policies.

**Returns:** A fresh immutable Player plan without resolving tools or touching source files.

**Parameter `profile`:** The selected integration-owned BGFX SDK invocation for standalone component builds.

**Parameter `options`:** The platform-owned configuration for each named component.

**Parameter `layout`:** The platform-owned destination of each component output, or null to exclude it.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/products/Inno.Build.Products.Standard/StandardNativeComponents.cs#L35).

## `CreateShaderTools`

<a id="api-dc3a0dcc33466d83"></a>
<!-- api: M:Inno.Build.Products.Standard.StandardNativeComponents.CreateShaderTools(Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile,System.Func{System.String,Inno.Build.Toolchains.NativeComponentBuildOptions},System.Func{System.String,System.String,System.String,System.String}) 65791916a0c081585cd256e71d81f729c93c92dca013abf35cd7db4d97b490d5 -->

```csharp
public static Inno.Build.Toolchains.ProductNativeBuildPlan Inno.Build.Products.Standard.StandardNativeComponents.CreateShaderTools(Inno.Build.Toolchains.Bgfx.BgfxNativeBuildProfile profile, System.Func<string, Inno.Build.Toolchains.NativeComponentBuildOptions> options, System.Func<string, string, string, string?> layout)
```

Selects only the offline graphics compiler component needed for shader publication.

**Returns:** An immutable tool product without runtime or Editor presentation dependencies.

**Parameter `profile`:** The selected integration-owned BGFX SDK invocation for standalone component builds.

**Parameter `options`:** The platform-owned configuration for each named component.

**Parameter `layout`:** The platform-owned destination of each component output, or null to exclude it.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/products/Inno.Build.Products.Standard/StandardNativeComponents.cs#L56).

## `CreateStaticPlayer`

<a id="api-cf06c85b2ae1f422"></a>
<!-- api: M:Inno.Build.Products.Standard.StandardNativeComponents.CreateStaticPlayer(System.Func{System.String,Inno.Build.Toolchains.NativeComponentBuildOptions},System.Func{System.String,System.String,System.String,System.String}) e0df76e2f6bd4cb407641652d8ac17c4517a30a59218b70e56f8a862453b4348 -->

```csharp
public static Inno.Build.Toolchains.ProductNativeBuildPlan Inno.Build.Products.Standard.StandardNativeComponents.CreateStaticPlayer(System.Func<string, Inno.Build.Toolchains.NativeComponentBuildOptions> options, System.Func<string, string, string, string?> layout)
```

Declares the real static component closure consumed by an explicit aggregate executor.

**Returns:** A Player closure with static recipes and no unused standalone producers.

**Parameter `options`:** The platform-owned configuration for each named component.

**Parameter `layout`:** The platform-owned destination of each component output, or null to exclude it.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/products/Inno.Build.Products.Standard/StandardNativeComponents.cs#L126).
