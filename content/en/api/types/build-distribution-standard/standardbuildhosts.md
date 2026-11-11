---
title: "StandardBuildHosts"
description: "Reference for StandardBuildHosts in Inno.Build.Distribution.Standard."
uid: api.inno.build.distribution.standard.0a5c106f8b70c978
kind: api
owners:
  - Inno.Build.Distribution.Standard
apiSurface: source-clr
contracts:
  - project.inno-build-distribution-standard#cache-and-workspace-ownership
---
# `StandardBuildHosts`

This reference describes `StandardBuildHosts` in `Inno.Build.Distribution.Standard`. Read the [shared contract](../../projects/inno-build-distribution-standard.md#cache-and-workspace-ownership) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Capture`](#api-3ce661633c816e3d) | Method |

## Type declaration

<a id="api-0a5c106f8b70c978"></a>
<!-- api: T:Inno.Build.Distribution.Standard.StandardBuildHosts 997bb8b0cb07d9b567b60c03ef2c6a7861072a44568ebd0ee760f85e1efe1ec7 -->

```csharp
public static class Inno.Build.Distribution.Standard.StandardBuildHosts
```

Registers supported build hosts without duplicating their execution facts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/build/distributions/Inno.Build.Distribution.Standard/StandardBuildHosts.cs#L11).

## `Capture`

<a id="api-3ce661633c816e3d"></a>
<!-- api: M:Inno.Build.Distribution.Standard.StandardBuildHosts.Capture 7472805f697cc9502717f200fd052d128e385e00091ce6ebfbdd7f6505b76df9 -->

```csharp
public static Inno.Build.Toolchains.BuildHostDescriptor Inno.Build.Distribution.Standard.StandardBuildHosts.Capture()
```

Captures the current execution machine from registered platform providers.

**Returns:** The selected immutable host and execution capabilities.

**Throws `System.PlatformNotSupportedException`:** No registered provider supports the current machine.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5e5ed64c981a51f1568004415ad80c44f32da9c0/build/distributions/Inno.Build.Distribution.Standard/StandardBuildHosts.cs#L22).
