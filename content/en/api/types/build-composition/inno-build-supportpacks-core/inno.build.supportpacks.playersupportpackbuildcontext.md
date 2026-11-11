---
title: "Inno.Build.SupportPacks.PlayerSupportPackBuildContext"
description: "Reference for Inno.Build.SupportPacks.PlayerSupportPackBuildContext in Inno.Build.SupportPacks.Core."
uid: api.inno.build.supportpacks.core.8dead9f58893d1ec
kind: api
owners:
  - Inno.Build.SupportPacks.Core
apiSurface: source-clr
contracts:
  - project.inno-build-supportpacks-core
---
# `Inno.Build.SupportPacks.PlayerSupportPackBuildContext`

This reference describes `Inno.Build.SupportPacks.PlayerSupportPackBuildContext` in `Inno.Build.SupportPacks.Core`. Read the [shared contract](../../../projects/inno-build-supportpacks-core.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-63806220a73f9ec1) | Method |
| [`engineRoot`](#api-bda713ef2dee6c48) | Property |
| [`sdk`](#api-6a4223717034eb69) | Property |
| [`stagingDirectory`](#api-84eba9d0f5bfcf34) | Property |

## Type declaration

<a id="api-8dead9f58893d1ec"></a>
<!-- api: T:Inno.Build.SupportPacks.PlayerSupportPackBuildContext f75d20db3de451c908bec2f6304678b15f3cd5170fd7455d1efcf65c6b3a563d -->

```csharp
public sealed class Inno.Build.SupportPacks.PlayerSupportPackBuildContext
```

Supplies preparation with explicit paths and a selected SDK, excluding installed output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackBuildContext.cs#L9).

## `#ctor`

<a id="api-63806220a73f9ec1"></a>
<!-- api: M:Inno.Build.SupportPacks.PlayerSupportPackBuildContext.#ctor(System.String,System.String,Inno.Build.Toolchains.DotNetSdkDescriptor) 92cec114a3349cd76b1caf7677948e05f8d241987e1fed9d129e41772feee041 -->

```csharp
public Inno.Build.SupportPacks.PlayerSupportPackBuildContext.PlayerSupportPackBuildContext(string engineRoot, string stagingDirectory, Inno.Build.Toolchains.DotNetSdkDescriptor sdk)
```

Creates immutable inputs for an isolated preparation operation.

**Parameter `engineRoot`:** The complete engine source checkout.

**Parameter `stagingDirectory`:** The empty transaction directory to populate.

**Parameter `sdk`:** The project-selected SDK frozen during read-only preflight.

**Throws `System.ArgumentException`:** A required input is blank.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackBuildContext.cs#L26).

## `engineRoot`

<a id="api-bda713ef2dee6c48"></a>
<!-- api: P:Inno.Build.SupportPacks.PlayerSupportPackBuildContext.engineRoot 7dee78638b25f1bf462682685f11082b21bbe89ed957b970c5f6a652c43876e2 -->

```csharp
public string Inno.Build.SupportPacks.PlayerSupportPackBuildContext.engineRoot { get; }
```

Gets the engine source checkout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackBuildContext.cs#L42).

## `sdk`

<a id="api-6a4223717034eb69"></a>
<!-- api: P:Inno.Build.SupportPacks.PlayerSupportPackBuildContext.sdk df35006c4b689116e9f79ce39ae98669e9dbd8145c9814ebd50c8281c2612446 -->

```csharp
public Inno.Build.Toolchains.DotNetSdkDescriptor Inno.Build.SupportPacks.PlayerSupportPackBuildContext.sdk { get; }
```

Gets the frozen SDK host and CLI entry used without resolving another SDK.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackBuildContext.cs#L52).

## `stagingDirectory`

<a id="api-84eba9d0f5bfcf34"></a>
<!-- api: P:Inno.Build.SupportPacks.PlayerSupportPackBuildContext.stagingDirectory f56db9267afacbb54f2620896dd17f5ebc0b3c5ac65c90ec21a30c20ce4756b3 -->

```csharp
public string Inno.Build.SupportPacks.PlayerSupportPackBuildContext.stagingDirectory { get; }
```

Gets the isolated directory that the source must populate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackBuildContext.cs#L47).
