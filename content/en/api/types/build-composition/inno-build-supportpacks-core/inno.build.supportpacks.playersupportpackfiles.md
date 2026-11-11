---
title: "Inno.Build.SupportPacks.PlayerSupportPackFiles"
description: "Reference for Inno.Build.SupportPacks.PlayerSupportPackFiles in Inno.Build.SupportPacks.Core."
uid: api.inno.build.supportpacks.core.77f15e25690351aa
kind: api
owners:
  - Inno.Build.SupportPacks.Core
apiSurface: source-clr
contracts:
  - project.inno-build-supportpacks-core
---
# `Inno.Build.SupportPacks.PlayerSupportPackFiles`

This reference describes `Inno.Build.SupportPacks.PlayerSupportPackFiles` in `Inno.Build.SupportPacks.Core`. Read the [shared contract](../../../projects/inno-build-supportpacks-core.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CopyCompositionInputs`](#api-a20aff7bdf3a4095) | Method |
| [`CopyPlayerSourcesAsync`](#api-11aa8f226a7dbfc7) | Method |
| [`CopyReferences`](#api-7aad41fc2cec95ca) | Method |

## Type declaration

<a id="api-77f15e25690351aa"></a>
<!-- api: T:Inno.Build.SupportPacks.PlayerSupportPackFiles 8a77c228e34a5dfb9ef13610ff40fa1cf7b9e9cf96e9749fc4e2d5c77c6197e1 -->

```csharp
public static class Inno.Build.SupportPacks.PlayerSupportPackFiles
```

Prepares explicit product source and reference inputs for isolated Support Pack publication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackFiles.cs#L17).

## `CopyCompositionInputs`

<a id="api-a20aff7bdf3a4095"></a>
<!-- api: M:Inno.Build.SupportPacks.PlayerSupportPackFiles.CopyCompositionInputs(System.String,System.String) c56df497f38bc8e28dd02133b4544a00486f9e9be787ecb3130538f4d7d2af03 -->

```csharp
public static void Inno.Build.SupportPacks.PlayerSupportPackFiles.CopyCompositionInputs(string engineRoot, string playerDirectory)
```

Stages shared registration generators and the checkout's actual SDK selection.

**Parameter `engineRoot`:** The selected complete source checkout.

**Parameter `playerDirectory`:** The isolated template input directory.

**Throws `System.IO.FileNotFoundException`:** A required built generator is absent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackFiles.cs#L90).

## `CopyPlayerSourcesAsync`

<a id="api-11aa8f226a7dbfc7"></a>
<!-- api: M:Inno.Build.SupportPacks.PlayerSupportPackFiles.CopyPlayerSourcesAsync(Inno.Build.SupportPacks.PlayerSupportPackBuildContext,System.String,System.String,System.Threading.CancellationToken,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String}) c462e528a0d6af861e9fc4851d9623f229b67cbce9418a95b16eaae7ac70395e -->

```csharp
public static System.Threading.Tasks.Task Inno.Build.SupportPacks.PlayerSupportPackFiles.CopyPlayerSourcesAsync(Inno.Build.SupportPacks.PlayerSupportPackBuildContext context, string project, string destination, System.Threading.CancellationToken cancellationToken, System.Collections.Generic.IReadOnlyDictionary<string, string>? environment = null)
```

Copies the selected project's evaluated source closure into isolated template input.

**Parameter `context`:** The selected checkout, SDK and preparation lifetime.

**Parameter `project`:** The explicit product project to evaluate.

**Parameter `destination`:** The isolated source input directory.

**Parameter `cancellationToken`:** Cancels evaluation and source preparation.

**Parameter `environment`:** Optional explicitly selected SDK environment.

**Returns:** Completion after all sources have contained, unique publication paths.

**Throws `System.IO.InvalidDataException`:** Source paths collide, escape the root, or the closure is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackFiles.cs#L43).

## `CopyReferences`

<a id="api-7aad41fc2cec95ca"></a>
<!-- api: M:Inno.Build.SupportPacks.PlayerSupportPackFiles.CopyReferences(System.String,System.String,System.String) 06fad39d3f89065b4ddafb0fb5eed435b7e24cf6fd2c0f31d308f6d232e963e8 -->

```csharp
public static void Inno.Build.SupportPacks.PlayerSupportPackFiles.CopyReferences(string buildOutput, string destination, string productAssemblyName)
```

Stages current runtime references while excluding the selected executable and project scripts.

**Parameter `buildOutput`:** The explicit product compilation output directory.

**Parameter `destination`:** The isolated compilation reference directory.

**Parameter `productAssemblyName`:** The selected executable assembly to exclude from references.

**Throws `System.IO.InvalidDataException`:** The build produced no runtime compilation references.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackFiles.cs#L125).
