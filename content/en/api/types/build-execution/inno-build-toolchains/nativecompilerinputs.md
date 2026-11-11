---
title: "NativeCompilerInputs"
description: "Reference for NativeCompilerInputs in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.4f869b7a66d1e86f
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeCompilerInputs`

This reference describes `NativeCompilerInputs` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-92747ececfe4f9d5) | Method |
| [`arguments`](#api-298d0965bf86e24c) | Property |
| [`cCompiler`](#api-a377619af88925d2) | Property |
| [`cppCompiler`](#api-0b2fd9ac4849cdb2) | Property |
| [`cppSystemIncludeDirectories`](#api-d04f2acb9c0d4f8b) | Property |
| [`defines`](#api-612213a159443f55) | Property |
| [`sysRoot`](#api-c493a61a4fff8479) | Property |
| [`systemIncludeDirectories`](#api-1876b6dd57358732) | Property |

## Type declaration

<a id="api-4f869b7a66d1e86f"></a>
<!-- api: T:Inno.Build.Toolchains.NativeCompilerInputs c79513fc101dbfa280758a605f66796d746459f60fab58008d8b877982cbb29f -->

```csharp
public sealed class Inno.Build.Toolchains.NativeCompilerInputs
```

Freezes SDK-resolved native compiler and header inputs without interpreting environment conventions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeCompilerInputs.cs#L11).

## `#ctor`

<a id="api-92747ececfe4f9d5"></a>
<!-- api: M:Inno.Build.Toolchains.NativeCompilerInputs.#ctor(System.String,System.String,System.String,System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String}) d09881b57c419f6f5b745b02b84677a334ecfef3eb95993235f3d443fe7123af -->

```csharp
public Inno.Build.Toolchains.NativeCompilerInputs.NativeCompilerInputs(string? cCompiler = null, string? cppCompiler = null, string? sysRoot = null, System.Collections.Generic.IEnumerable<string>? systemIncludeDirectories = null, System.Collections.Generic.IEnumerable<string>? cppSystemIncludeDirectories = null, System.Collections.Generic.IEnumerable<string>? defines = null, System.Collections.Generic.IEnumerable<string>? arguments = null)
```

Captures explicit parser inputs supplied by the target SDK provider.

**Parameter `cCompiler`:** The selected C compiler, or null when this selection does not provide one.

**Parameter `cppCompiler`:** The selected C++ compiler, or null when this selection does not provide one.

**Parameter `sysRoot`:** The SDK root, or null when the compiler does not use a sysroot.

**Parameter `systemIncludeDirectories`:** Ordered system header directories.

**Parameter `cppSystemIncludeDirectories`:** Ordered C++ standard library directories.

**Parameter `defines`:** Ordered target preprocessor definitions.

**Parameter `arguments`:** Ordered parser arguments supplied by the SDK.

**Throws `System.ArgumentException`:** An assigned physical path is not absolute.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeCompilerInputs.cs#L40).

## `arguments`

<a id="api-298d0965bf86e24c"></a>
<!-- api: P:Inno.Build.Toolchains.NativeCompilerInputs.arguments 370bec873e0e137d1a70ed422bc428461d1e3afb580d4777a04c06896f742553 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.Toolchains.NativeCompilerInputs.arguments { get; }
```

Gets ordered target parser arguments.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeCompilerInputs.cs#L85).

## `cCompiler`

<a id="api-a377619af88925d2"></a>
<!-- api: P:Inno.Build.Toolchains.NativeCompilerInputs.cCompiler 582b526c5265726853c38c4e9795e5705c7a066fa0edd058b5a5b9c119e3e645 -->

```csharp
public string? Inno.Build.Toolchains.NativeCompilerInputs.cCompiler { get; }
```

Gets the explicit C compiler, or null when unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeCompilerInputs.cs#L61).

## `cppCompiler`

<a id="api-0b2fd9ac4849cdb2"></a>
<!-- api: P:Inno.Build.Toolchains.NativeCompilerInputs.cppCompiler c0511d1a0a669cda4714ca6ec422a7abd3828bf66428f01f0b11f656794df9e5 -->

```csharp
public string? Inno.Build.Toolchains.NativeCompilerInputs.cppCompiler { get; }
```

Gets the explicit C++ compiler, or null when unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeCompilerInputs.cs#L65).

## `cppSystemIncludeDirectories`

<a id="api-d04f2acb9c0d4f8b"></a>
<!-- api: P:Inno.Build.Toolchains.NativeCompilerInputs.cppSystemIncludeDirectories b55f7eec8e228b941198aad8b9061db38669b7c3f086a3367aa3ce462a329ece -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.Toolchains.NativeCompilerInputs.cppSystemIncludeDirectories { get; }
```

Gets ordered C++ standard library directories.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeCompilerInputs.cs#L77).

## `defines`

<a id="api-612213a159443f55"></a>
<!-- api: P:Inno.Build.Toolchains.NativeCompilerInputs.defines 2769010b65bee22c8a8d7b1caf0ba7be8054462ed8f15393681eb981b92433fc -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.Toolchains.NativeCompilerInputs.defines { get; }
```

Gets ordered target definitions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeCompilerInputs.cs#L81).

## `sysRoot`

<a id="api-c493a61a4fff8479"></a>
<!-- api: P:Inno.Build.Toolchains.NativeCompilerInputs.sysRoot 32deee128f4b8f915434e17fa84ea4c77a08713431d1608b383b3be86bd1cf78 -->

```csharp
public string? Inno.Build.Toolchains.NativeCompilerInputs.sysRoot { get; }
```

Gets the target SDK root, or null when unnecessary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeCompilerInputs.cs#L69).

## `systemIncludeDirectories`

<a id="api-1876b6dd57358732"></a>
<!-- api: P:Inno.Build.Toolchains.NativeCompilerInputs.systemIncludeDirectories c096c37c44cffa2e9fb014ff2913155d2fe5f7219fb225ab109e494b4b7d45c2 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.Toolchains.NativeCompilerInputs.systemIncludeDirectories { get; }
```

Gets ordered SDK header directories.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeCompilerInputs.cs#L73).
