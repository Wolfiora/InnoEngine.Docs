---
title: "NativeInputMaterializer"
description: "Reference for NativeInputMaterializer in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.a0e889be82fb9f09
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeInputMaterializer`

This reference describes `NativeInputMaterializer` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CopyAsync`](#api-27908fe1ce801aaf) | Method |

## Type declaration

<a id="api-a0e889be82fb9f09"></a>
<!-- api: T:Inno.Build.Toolchains.NativeInputMaterializer 57c81f01896aea9a0082099ec035a95eeeddd8e9e1b3286760584d6be0a717a0 -->

```csharp
public static class Inno.Build.Toolchains.NativeInputMaterializer
```

Materializes frozen native inputs without rewriting identical intermediate files.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeInputMaterializer.cs#L13).

## `CopyAsync`

<a id="api-27908fe1ce801aaf"></a>
<!-- api: M:Inno.Build.Toolchains.NativeInputMaterializer.CopyAsync(Inno.Build.Toolchains.NativeBuildContext,System.String,System.String,System.Threading.CancellationToken) 624da1940e47df247407089f2a7a0f74a0d4588a53514175bcbefec5f9cec129 -->

```csharp
public static System.Threading.Tasks.ValueTask<bool> Inno.Build.Toolchains.NativeInputMaterializer.CopyAsync(Inno.Build.Toolchains.NativeBuildContext context, string source, string destination, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Copies a declared input atomically when its destination differs, preserving identical file timestamps.

**Parameter `context`:** The operation whose initial source bytes and hashing statistics are shared across components.

**Parameter `source`:** The absolute input file already declared by the component recipe.

**Parameter `destination`:** The absolute intermediate file owned exclusively by the component producer.

**Parameter `cancellationToken`:** Cancels copying before publication and preserves the prior intermediate file.

**Returns:** True when bytes were copied and published; false when the existing content was identical.

**Throws `System.InvalidOperationException`:** The source changes relative to the operation's frozen input snapshot.

**Throws `System.IO.IOException`:** The source, destination or atomic candidate cannot be read or published.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeInputMaterializer.cs#L39).
