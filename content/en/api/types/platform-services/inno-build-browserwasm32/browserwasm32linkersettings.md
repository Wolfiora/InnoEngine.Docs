---
title: "BrowserWasm32LinkerSettings"
description: "Reference for BrowserWasm32LinkerSettings in Inno.Build.BrowserWasm32."
uid: api.inno.build.browserwasm32.48c25f25c0728d7a
kind: api
owners:
  - Inno.Build.BrowserWasm32
apiSurface: source-clr
contracts:
  - project.inno-build-browserwasm32
---
# `BrowserWasm32LinkerSettings`

This reference describes `BrowserWasm32LinkerSettings` in `Inno.Build.BrowserWasm32`. Read the [shared contract](../../../projects/inno-build-browserwasm32.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Create`](#api-110769d6e9defb53) | Method |

## Type declaration

<a id="api-48c25f25c0728d7a"></a>
<!-- api: T:Inno.Build.BrowserWasm32.BrowserWasm32LinkerSettings 866afafc8efc2ac5ff9498bcc07a50bdcf623ca1bd5feb0fa1302c460a2293e5 -->

```csharp
public static class Inno.Build.BrowserWasm32.BrowserWasm32LinkerSettings
```

Owns the target's native library formats and linker policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/Native/BrowserWasm32LinkerSettings.cs#L8).

## `Create`

<a id="api-110769d6e9defb53"></a>
<!-- api: M:Inno.Build.BrowserWasm32.BrowserWasm32LinkerSettings.Create 4e189a3bf2e10677e1b92373d9729212ffed4bf17ed0642bf326eb85ab84f664 -->

```csharp
public static Inno.Build.Toolchains.NativeLinkPlan Inno.Build.BrowserWasm32.BrowserWasm32LinkerSettings.Create()
```

Creates the target linker plan without inspecting component names.

**Returns:** The immutable target linker plan.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/Native/BrowserWasm32LinkerSettings.cs#L16).
