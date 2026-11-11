---
title: "INativeWindowSurface"
description: "Reference for INativeWindowSurface in Inno.Adapter.Platform."
uid: api.inno.adapter.platform.2c6ba4b4de7adc1f
kind: api
owners:
  - Inno.Adapter.Platform
apiSurface: source-clr
contracts:
  - project.inno-adapter-platform
---
# `INativeWindowSurface`

This reference describes `INativeWindowSurface` in `Inno.Adapter.Platform`. Read the [shared contract](../../../projects/inno-adapter-platform.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`nativeHandles`](#api-2ca88f33ca867c43) | Property |

## Type declaration

<a id="api-2c6ba4b4de7adc1f"></a>
<!-- api: T:Inno.Adapter.Platform.INativeWindowSurface 50f19c2ee8deff9fe051a180aa07c7b6e82287b44587c3728dc7dae9a0243da4 -->

```csharp
public interface Inno.Adapter.Platform.INativeWindowSurface
```

Supplies borrowed native presentation handles to cooperating adapters.

**Constraints:** Window implementations opt into this SPI when they support native rendering integration.
Shared platform, Shell, and Player contracts do not expose these ABI details.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/INativeWindowSurface.cs#L12).

## `nativeHandles`

<a id="api-2ca88f33ca867c43"></a>
<!-- api: P:Inno.Adapter.Platform.INativeWindowSurface.nativeHandles 83585ddb8c57bb7443b2f838c775a0a379a952e0c5c28c430d5319d6225e25de -->

```csharp
Inno.Adapter.Platform.PlatformNativeHandles Inno.Adapter.Platform.INativeWindowSurface.nativeHandles { get; }
```

Gets handles owned by the live window; consumers must neither free nor retain them beyond its lifetime.

**Throws `System.ObjectDisposedException`:** The owning window has been released.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/adapters/platform/Inno.Adapter.Platform/INativeWindowSurface.cs#L20).
