---
title: "WindowsX64BuildIntegration"
description: "Reference for WindowsX64BuildIntegration in Inno.Integration.WindowsX64.Build."
uid: api.inno.integration.windowsx64.build.8a8bc98ff2897de7
kind: api
owners:
  - Inno.Integration.WindowsX64.Build
apiSurface: source-clr
contracts:
  - project.inno-integration-windowsx64-build
---
# `WindowsX64BuildIntegration`

This reference describes `WindowsX64BuildIntegration` in `Inno.Integration.WindowsX64.Build`. Read the [shared contract](../../../projects/inno-integration-windowsx64-build.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Create`](#api-7efbaf74425d943c) | Method |

## Type declaration

<a id="api-8a8bc98ff2897de7"></a>
<!-- api: T:Inno.Integration.WindowsX64.Build.WindowsX64BuildIntegration 732835dd5f8f07b55295d3df86f30b9684a7d60f46ac895e8fc8f89c8b8a5837 -->

```csharp
public static class Inno.Integration.WindowsX64.Build.WindowsX64BuildIntegration
```

Composes this platform's binding, component and deployment policies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/integrations/Inno.Integration.WindowsX64.Build/WindowsX64BuildIntegration.cs#L15).

## `Create`

<a id="api-7efbaf74425d943c"></a>
<!-- api: M:Inno.Integration.WindowsX64.Build.WindowsX64BuildIntegration.Create(Inno.Build.Composition.BuildCompositionContext) e3f6e9b579e4043889118bd1f457b60aa5ab75ec2f297a65079f611496c75d6e -->

```csharp
public static Inno.Build.Composition.BuildPlatformContribution Inno.Integration.WindowsX64.Build.WindowsX64BuildIntegration.Create(Inno.Build.Composition.BuildCompositionContext context)
```

Creates the complete platform registration without discovering tools or writing outputs.

**Parameter `context`:** The explicit operation host.

**Returns:** A platform contribution containing its selected native and binding capabilities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/integrations/Inno.Integration.WindowsX64.Build/WindowsX64BuildIntegration.cs#L26).
