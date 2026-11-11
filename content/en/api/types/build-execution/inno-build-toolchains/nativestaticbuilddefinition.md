---
title: "NativeStaticBuildDefinition"
description: "Reference for NativeStaticBuildDefinition in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.81764400c18f064f
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeStaticBuildDefinition`

This reference describes `NativeStaticBuildDefinition` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-90b0494add32a676) | Method |
| [`cmakeFile`](#api-84acc64706607ffe) | Property |
| [`inputPaths`](#api-fe2fc26e997d2dc4) | Property |
| [`logicalOutputs`](#api-6dd0830b68db65a9) | Property |
| [`nativeSourceDirectory`](#api-fb8fd5818e10ca0e) | Property |

## Type declaration

<a id="api-81764400c18f064f"></a>
<!-- api: T:Inno.Build.Toolchains.NativeStaticBuildDefinition 602d8fed5f863736e4c3e5f7347b7d58b1dc9d6125b3fadfeb5205a501c8193d -->

```csharp
public sealed class Inno.Build.Toolchains.NativeStaticBuildDefinition
```

Declares a backend-owned static-library recipe and its complete checkout input closure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeStaticBuildDefinition.cs#L10).

## `#ctor`

<a id="api-90b0494add32a676"></a>
<!-- api: M:Inno.Build.Toolchains.NativeStaticBuildDefinition.#ctor(System.String,System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},System.String) 403722e4534ebe1ed60971da223f11bb792161a1b4bb7e981ca92dcc5b823a66 -->

```csharp
public Inno.Build.Toolchains.NativeStaticBuildDefinition.NativeStaticBuildDefinition(string cmakeFile, System.Collections.Generic.IEnumerable<string> inputPaths, System.Collections.Generic.IEnumerable<string> logicalOutputs, string? nativeSourceDirectory = null)
```

Freezes the component's CMake entry point, source dependencies and exact installed archive names.

**Parameter `cmakeFile`:** The portable checkout-relative component definition.

**Parameter `inputPaths`:** The portable checkout-relative source and build dependencies.

**Parameter `logicalOutputs`:** The exact archive file names required after installation.

**Parameter `nativeSourceDirectory`:** The declared checkout-relative root used by the component's native CMake fragment, or null when no such fragment is consumed.

**Throws `System.ArgumentException`:** A path escapes its root or an archive name is invalid or duplicated.

**Throws `System.ArgumentNullException`:** A required collection is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeStaticBuildDefinition.cs#L33).

## `cmakeFile`

<a id="api-84acc64706607ffe"></a>
<!-- api: P:Inno.Build.Toolchains.NativeStaticBuildDefinition.cmakeFile 3314a95dad4830299bdce1837afe65409fc6b167e37c03a71d4ebe046fb3d7d9 -->

```csharp
public string Inno.Build.Toolchains.NativeStaticBuildDefinition.cmakeFile { get; }
```

Gets the component-owned CMake definition, which participates in artifact identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeStaticBuildDefinition.cs#L58).

## `inputPaths`

<a id="api-fe2fc26e997d2dc4"></a>
<!-- api: P:Inno.Build.Toolchains.NativeStaticBuildDefinition.inputPaths b988d747881926b1900eace12958796eb9eb9d4da84db341fc265232dce88efc -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.Toolchains.NativeStaticBuildDefinition.inputPaths { get; }
```

Gets the immutable complete source dependency paths relative to the checkout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeStaticBuildDefinition.cs#L63).

## `logicalOutputs`

<a id="api-6dd0830b68db65a9"></a>
<!-- api: P:Inno.Build.Toolchains.NativeStaticBuildDefinition.logicalOutputs 01c666a0334ac56a42a2ac7367dad1f58bedf174397a7cfd0455808aabc417d0 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.Toolchains.NativeStaticBuildDefinition.logicalOutputs { get; }
```

Gets the exact required output closure within this component's target directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeStaticBuildDefinition.cs#L73).

## `nativeSourceDirectory`

<a id="api-fb8fd5818e10ca0e"></a>
<!-- api: P:Inno.Build.Toolchains.NativeStaticBuildDefinition.nativeSourceDirectory 70fd00af375c6b455b369e141234fd5c3a716d3f0a38d00ae00e87ef237390b1 -->

```csharp
public string? Inno.Build.Toolchains.NativeStaticBuildDefinition.nativeSourceDirectory { get; }
```

Gets the declared native fragment's source root, or null when the recipe only consumes its other inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeStaticBuildDefinition.cs#L68).
