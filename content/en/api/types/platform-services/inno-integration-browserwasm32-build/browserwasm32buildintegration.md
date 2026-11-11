---
title: "BrowserWasm32BuildIntegration"
description: "Reference for BrowserWasm32BuildIntegration in Inno.Integration.BrowserWasm32.Build."
uid: api.inno.integration.browserwasm32.build.821b2874adf9863f
kind: api
owners:
  - Inno.Integration.BrowserWasm32.Build
apiSurface: source-clr
contracts:
  - project.inno-integration-browserwasm32-build
---
# `BrowserWasm32BuildIntegration`

This reference describes `BrowserWasm32BuildIntegration` in `Inno.Integration.BrowserWasm32.Build`. Read the [shared contract](../../../projects/inno-integration-browserwasm32-build.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Create`](#api-80471a27b60d76a7) | Method |

## Type declaration

<a id="api-821b2874adf9863f"></a>
<!-- api: T:Inno.Integration.BrowserWasm32.Build.BrowserWasm32BuildIntegration c0b5a69b391c0b155af03b8812093990f44d17c1e0d4ecbd5877ac4705f81996 -->

```csharp
public static class Inno.Integration.BrowserWasm32.Build.BrowserWasm32BuildIntegration
```

Composes this platform's binding, component and deployment policies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/integrations/Inno.Integration.BrowserWasm32.Build/BrowserWasm32BuildIntegration.cs#L15).

## `Create`

<a id="api-80471a27b60d76a7"></a>
<!-- api: M:Inno.Integration.BrowserWasm32.Build.BrowserWasm32BuildIntegration.Create(Inno.Build.Composition.BuildCompositionContext) 1f5023c22c04aaec424d533d6580a3092e1d1293b565c4e14029d04dee042af2 -->

```csharp
public static Inno.Build.Composition.BuildPlatformContribution Inno.Integration.BrowserWasm32.Build.BrowserWasm32BuildIntegration.Create(Inno.Build.Composition.BuildCompositionContext context)
```

Creates the complete platform registration without discovering tools or writing outputs.

**Parameter `context`:** The explicit operation host.

**Returns:** A platform contribution containing its selected native and binding capabilities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/integrations/Inno.Integration.BrowserWasm32.Build/BrowserWasm32BuildIntegration.cs#L26).
