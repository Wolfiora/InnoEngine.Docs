---
title: "GameBuildRequest"
description: "Reference for GameBuildRequest in Inno.Build."
uid: api.inno.build.b4f67d09390b1761
kind: api
owners:
  - Inno.Build
apiSurface: source-clr
contracts:
  - project.inno-build
---
# `GameBuildRequest`

This reference describes `GameBuildRequest` in `Inno.Build`. Read the [shared contract](../../../projects/inno-build.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-75189c8af56268d4) | Method |
| [`Validate`](#api-346e333bd49e0f3e) | Method |
| [`outputDirectory`](#api-b4531d9079a635aa) | Property |
| [`profile`](#api-d501f43b4706a4de) | Property |

## Type declaration

<a id="api-b4f67d09390b1761"></a>
<!-- api: T:Inno.Build.GameBuildRequest e2f038cd3115270676490aa226c8fe4b76ac1aae674a6ad1a27f3a195343bc86 -->

```csharp
public sealed class Inno.Build.GameBuildRequest
```

Requests one game build from the current validated authoring generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/GameBuildRequest.cs#L9).

## `#ctor`

<a id="api-75189c8af56268d4"></a>
<!-- api: M:Inno.Build.GameBuildRequest.#ctor 993b654cbd2de53797f7f4c3f4225759e74997ab95f69c7de338af756f1a5fa6 -->

```csharp
public Inno.Build.GameBuildRequest.GameBuildRequest()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/GameBuildRequest.cs#L9).

## `Validate`

<a id="api-346e333bd49e0f3e"></a>
<!-- api: M:Inno.Build.GameBuildRequest.Validate aa2f4ea162e35d44c7ff310b06c0148ead03a6687aa758d1b99e118d9fb2764e -->

```csharp
public void Inno.Build.GameBuildRequest.Validate()
```

Validates destination and product inputs without mutating output.

**Throws `System.IO.InvalidDataException`:** Thrown when the request is incomplete.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/GameBuildRequest.cs#L27).

## `outputDirectory`

<a id="api-b4531d9079a635aa"></a>
<!-- api: P:Inno.Build.GameBuildRequest.outputDirectory 8fd55c7f4d2330095e0dcb0c3a55ed625a88df74c26ce011a5eb15c664c68759 -->

```csharp
public required string Inno.Build.GameBuildRequest.outputDirectory { get; init; }
```

Gets or initializes the parent directory that receives the atomically committed platform output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/GameBuildRequest.cs#L19).

## `profile`

<a id="api-d501f43b4706a4de"></a>
<!-- api: P:Inno.Build.GameBuildRequest.profile fad722c42fbd43180c9f590bca35015225ee8b5d34615eeec5399f9ebcd0b744 -->

```csharp
public required Inno.Build.BuildProfile Inno.Build.GameBuildRequest.profile { get; init; }
```

Gets or initializes the reusable product profile.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/pipeline/Inno.Build/GameBuildRequest.cs#L14).
