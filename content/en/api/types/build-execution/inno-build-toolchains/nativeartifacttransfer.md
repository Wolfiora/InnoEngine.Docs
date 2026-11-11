---
title: "NativeArtifactTransfer"
description: "Reference for NativeArtifactTransfer in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.6bc3090690be67c5
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeArtifactTransfer`

This reference describes `NativeArtifactTransfer` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`ExportAsync`](#api-5846262df4e746d5) | Method |
| [`ImportAsync`](#api-e752370ac8e491e1) | Method |

## Type declaration

<a id="api-6bc3090690be67c5"></a>
<!-- api: T:Inno.Build.Toolchains.NativeArtifactTransfer 0e63aa46f32d1412cb9d5fc7cf3ff7074d619a05b1b60ba6270dfe0e7f2125a3 -->

```csharp
public static class Inno.Build.Toolchains.NativeArtifactTransfer
```

Transports verified native payloads without copying publisher registrations, leases or writable workspaces.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/NativeArtifactTransfer.cs#L15).

## `ExportAsync`

<a id="api-5846262df4e746d5"></a>
<!-- api: M:Inno.Build.Toolchains.NativeArtifactTransfer.ExportAsync(System.String,System.String,System.Threading.CancellationToken) 577932ed79b8d8541f52ce6daa4284f08be35ee3b3101f777b48bef7cc0976a6 -->

```csharp
public static System.Threading.Tasks.Task<int> Inno.Build.Toolchains.NativeArtifactTransfer.ExportAsync(string engineRoot, string archivePath, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Exports only locally registered immutable native and binding generations under their existing read leases.

**Parameter `engineRoot`:** The checkout whose publishers have already verified the selected generations.

**Parameter `archivePath`:** The explicit transport file, atomically replaced after complete export.

**Parameter `cancellationToken`:** Cancels copying before the completed archive replaces its previous version.

**Returns:** The number of verified generations exported.

**Throws `System.IO.IOException`:** A registered artifact is damaged, linked, inaccessible or outside its publisher boundary.

**Throws `System.OperationCanceledException`:** Export was canceled before installation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/NativeArtifactTransfer.cs#L38).

## `ImportAsync`

<a id="api-e752370ac8e491e1"></a>
<!-- api: M:Inno.Build.Toolchains.NativeArtifactTransfer.ImportAsync(System.String,System.String,System.Threading.CancellationToken) 030a4376b9a5f172fa2a144aa8cfa004f3985cdc8012e7b772076ed6ab037767 -->

```csharp
public static System.Threading.Tasks.Task<int> Inno.Build.Toolchains.NativeArtifactTransfer.ImportAsync(string engineRoot, string archivePath, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Imports complete payload candidates without adopting them; each consumer's publisher must still verify its requested inputs.

**Parameter `engineRoot`:** The consumer checkout whose existing native publishers own the destination layout.

**Parameter `archivePath`:** The restored transport archive, which remains available for diagnosis after rejection.

**Parameter `cancellationToken`:** Cancels extraction or acquisition without replacing any existing generation.

**Returns:** The number of newly imported candidates; existing destinations remain under their publisher's repair policy.

**Throws `System.IO.IOException`:** The archive is malformed, contains invalid ownership paths or fails complete payload validation.

**Throws `System.OperationCanceledException`:** Import was canceled before further candidates could be installed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Cache/NativeArtifactTransfer.cs#L117).
