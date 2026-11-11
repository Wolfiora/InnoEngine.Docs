---
title: "MacOSArm64BuildIntegration"
description: "Reference for MacOSArm64BuildIntegration in Inno.Integration.MacOSArm64.Build."
uid: api.inno.integration.macosarm64.build.ccc081c940d395ea
kind: api
owners:
  - Inno.Integration.MacOSArm64.Build
apiSurface: source-clr
contracts:
  - project.inno-integration-macosarm64-build
---
# `MacOSArm64BuildIntegration`

This reference describes `MacOSArm64BuildIntegration` in `Inno.Integration.MacOSArm64.Build`. Read the [shared contract](../../../projects/inno-integration-macosarm64-build.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Create`](#api-38aae30cc6cbb74c) | Method |

## Type declaration

<a id="api-ccc081c940d395ea"></a>
<!-- api: T:Inno.Integration.MacOSArm64.Build.MacOSArm64BuildIntegration 1321ba627716a46589c25aaec37f2020d0b0457e59e12f895131d5e743e4c570 -->

```csharp
public static class Inno.Integration.MacOSArm64.Build.MacOSArm64BuildIntegration
```

Composes this platform's binding, component and deployment policies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/integrations/Inno.Integration.MacOSArm64.Build/MacOSArm64BuildIntegration.cs#L15).

## `Create`

<a id="api-38aae30cc6cbb74c"></a>
<!-- api: M:Inno.Integration.MacOSArm64.Build.MacOSArm64BuildIntegration.Create(Inno.Build.Composition.BuildCompositionContext) 7ae17a9dd8a2e953588664655f5be332ff69afb0b178b7712ca136e822a27274 -->

```csharp
public static Inno.Build.Composition.BuildPlatformContribution Inno.Integration.MacOSArm64.Build.MacOSArm64BuildIntegration.Create(Inno.Build.Composition.BuildCompositionContext context)
```

Creates the complete platform registration without discovering tools or writing outputs.

**Parameter `context`:** The explicit operation host.

**Returns:** A platform contribution containing its selected native and binding capabilities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/integrations/Inno.Integration.MacOSArm64.Build/MacOSArm64BuildIntegration.cs#L26).
