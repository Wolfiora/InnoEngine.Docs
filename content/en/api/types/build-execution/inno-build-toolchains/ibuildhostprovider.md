---
title: "IBuildHostProvider"
description: "Reference for IBuildHostProvider in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.be21944cb498580e
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `IBuildHostProvider`

This reference describes `IBuildHostProvider` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`TryCapture`](#api-b17705a8365cb4db) | Method |

## Type declaration

<a id="api-be21944cb498580e"></a>
<!-- api: T:Inno.Build.Toolchains.IBuildHostProvider b5789f80d5ad92cb7dbfe0284acad171a084dbabbe2bbe55ef55f9a2abff0395 -->

```csharp
public interface Inno.Build.Toolchains.IBuildHostProvider
```

Discovers one explicitly registered host implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Host/IBuildHostProvider.cs#L6).

## `TryCapture`

<a id="api-b17705a8365cb4db"></a>
<!-- api: M:Inno.Build.Toolchains.IBuildHostProvider.TryCapture bf5dcc21309dc9d147f9c3cbf7bdeede9dc1e2d47893a783293e106605e27555 -->

```csharp
Inno.Build.Toolchains.BuildHostDescriptor? Inno.Build.Toolchains.IBuildHostProvider.TryCapture()
```

Captures the current execution machine when this provider supports it.

**Returns:** The immutable host, or null when the current machine is outside this provider's capabilities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Host/IBuildHostProvider.cs#L14).
