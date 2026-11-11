---
title: "BuildProfile"
description: "Reference for BuildProfile in Inno.Build."
uid: api.inno.build.bec857b0dcc96c8d
kind: api
owners:
  - Inno.Build
apiSurface: source-clr
contracts:
  - project.inno-build
---
# `BuildProfile`

This reference describes `BuildProfile` in `Inno.Build`. Read the [shared contract](../../../projects/inno-build.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-acb1f0875618aadf) | Method |
| [`Copy`](#api-68a22374f3b8d51c) | Method |
| [`Validate`](#api-2e6c9aafd603bdf2) | Method |
| [`applicationId`](#api-d9dd2399f665ba0f) | Property |
| [`managedDeployment`](#api-346622677e7e7a0f) | Property |
| [`persistentDataPath`](#api-3d22cd86e190ff8f) | Property |
| [`productName`](#api-a8bc99a795c08de1) | Property |
| [`startupScene`](#api-625ffe18d09ca2b8) | Property |
| [`target`](#api-1ef31b4a355e2400) | Property |
| [`windowHeight`](#api-4df0488e61f5d2d8) | Property |
| [`windowWidth`](#api-119e3fc0c5ec143e) | Property |

## Type declaration

<a id="api-bec857b0dcc96c8d"></a>
<!-- api: T:Inno.Build.BuildProfile 2d90d1c2750801755f3c688dff3f340502d1811ba98ef74d31db861c17d92902 -->

```csharp
public sealed class Inno.Build.BuildProfile : Inno.Core.Serialization.ISerializable
```

Defines reusable product and startup settings for deterministic game builds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProfile.cs#L15).

## `#ctor`

<a id="api-acb1f0875618aadf"></a>
<!-- api: M:Inno.Build.BuildProfile.#ctor 71a827bcef25a291763256121a966732957ccb71a68ede63891f2ad2c1bbc3ba -->

```csharp
public Inno.Build.BuildProfile.BuildProfile()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProfile.cs#L15).

## `Copy`

<a id="api-68a22374f3b8d51c"></a>
<!-- api: M:Inno.Build.BuildProfile.Copy eb4341a4130476e77e05a4ba2ed97c6f04c7241498a6f2e5e00a818bf2204bd9 -->

```csharp
public Inno.Build.BuildProfile Inno.Build.BuildProfile.Copy()
```

Copies product and deployment settings before an asynchronous build retains the request.

**Returns:** A newly owned profile with the same current-format scalar settings and stable selections.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProfile.cs#L91).

## `Validate`

<a id="api-2e6c9aafd603bdf2"></a>
<!-- api: M:Inno.Build.BuildProfile.Validate beee6931edb36db457af7aa324734f7d36123b63585dce24a409c986cee8cea0 -->

```csharp
public void Inno.Build.BuildProfile.Validate()
```

Validates product identity, startup content, target, and window dimensions.

**Throws `System.IO.InvalidDataException`:** Thrown when the profile cannot produce a portable Player deployment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProfile.cs#L109).

## `applicationId`

<a id="api-d9dd2399f665ba0f"></a>
<!-- api: P:Inno.Build.BuildProfile.applicationId 05b589b0746ebc42d47b03f3f59a6b3727f03321dd29bbdf1352ab212182d39a -->

```csharp
public string Inno.Build.BuildProfile.applicationId { get; set; }
```

Gets or sets the stable lowercase identity used for persistent application data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProfile.cs#L28).

## `managedDeployment`

<a id="api-346622677e7e7a0f"></a>
<!-- api: P:Inno.Build.BuildProfile.managedDeployment 046be3eea460dac7f3ae783eec7beb4881c1dee8b16e6823b24f29f9ef8f387e -->

```csharp
public Inno.Build.Managed.ManagedDeploymentId? Inno.Build.BuildProfile.managedDeployment { get; set; }
```

Gets or sets an explicit managed publisher; null uses the platform composition's default.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProfile.cs#L61).

## `persistentDataPath`

<a id="api-3d22cd86e190ff8f"></a>
<!-- api: P:Inno.Build.BuildProfile.persistentDataPath 6c109d72b7b2c2393af7e4b7df4bf6b07e771f611c5c0d2e29383c4567b8929b -->

```csharp
public string Inno.Build.BuildProfile.persistentDataPath { get; set; }
```

Gets or sets the writable data folder relative to the operating system's local application data directory.
An empty value uses `Inno.Build.BuildProfile.applicationId`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProfile.cs#L41).

## `productName`

<a id="api-a8bc99a795c08de1"></a>
<!-- api: P:Inno.Build.BuildProfile.productName e758921e8f67527dbc29b8d7f228784d02347121b846c53f2c595227f54d7c4c -->

```csharp
public string Inno.Build.BuildProfile.productName { get; set; }
```

Gets or sets the player-facing product and output name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProfile.cs#L34).

## `startupScene`

<a id="api-625ffe18d09ca2b8"></a>
<!-- api: P:Inno.Build.BuildProfile.startupScene cb4b6d394ee40f6d1fbd0654ee73fd53410bcfea62017cdb8ffb458c29b1b7d5 -->

```csharp
public string Inno.Build.BuildProfile.startupScene { get; set; }
```

Gets or sets the mount-qualified startup scene path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProfile.cs#L47).

## `target`

<a id="api-1ef31b4a355e2400"></a>
<!-- api: P:Inno.Build.BuildProfile.target 49394cf42de8914382ce32463d884014925e967e10df038026882dd3ef0732bf -->

```csharp
public Inno.Build.BuildTargetId Inno.Build.BuildProfile.target { get; set; }
```

Gets or sets the platform target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProfile.cs#L52).

## `windowHeight`

<a id="api-4df0488e61f5d2d8"></a>
<!-- api: P:Inno.Build.BuildProfile.windowHeight 553ad1e956787d15c2c4c563eb0454e2f9d0e51a89b17bd7c52a61ca58a6e98d -->

```csharp
public int Inno.Build.BuildProfile.windowHeight { get; set; }
```

Gets or sets the initial logical window height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProfile.cs#L80).

## `windowWidth`

<a id="api-119e3fc0c5ec143e"></a>
<!-- api: P:Inno.Build.BuildProfile.windowWidth a3d824c19c027c7bfd963da083e2d1c646445682cb1c333de999e0867e462d50 -->

```csharp
public int Inno.Build.BuildProfile.windowWidth { get; set; }
```

Gets or sets the initial logical window width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/BuildProfile.cs#L74).
