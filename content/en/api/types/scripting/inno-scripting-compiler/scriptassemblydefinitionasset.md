---
title: "ScriptAssemblyDefinitionAsset"
description: "Reference for ScriptAssemblyDefinitionAsset in Inno.Scripting.Compiler."
uid: api.inno.scripting.compiler.e2451df648b6b38b
kind: api
owners:
  - Inno.Scripting.Compiler
apiSurface: source-clr
contracts:
  - project.inno-scripting-compiler
---
# `ScriptAssemblyDefinitionAsset`

This reference describes `ScriptAssemblyDefinitionAsset` in `Inno.Scripting.Compiler`. Read the [shared contract](../../../projects/inno-scripting-compiler.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.AssetObject`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5a8428011eab51f6) | Method |
| [`#ctor`](#api-bf643f72db87f202) | Method |
| [`allowUnsafe`](#api-cae87c53fcc69f8e) | Property |
| [`assemblyName`](#api-7870d3280379871b) | Property |
| [`defines`](#api-25571d63529bd8b3) | Property |
| [`nullable`](#api-27adb35d854a53ea) | Property |
| [`references`](#api-08f5b00738a807be) | Property |
| [`scope`](#api-4acc36db008dba0b) | Property |

## Type declaration

<a id="api-e2451df648b6b38b"></a>
<!-- api: T:Inno.Scripting.Compiler.ScriptAssemblyDefinitionAsset 066c6b73f217d691525db115d667cc86fd98b607d770ea019965fbab60d1cb06 -->

```csharp
public sealed class Inno.Scripting.Compiler.ScriptAssemblyDefinitionAsset : Inno.Assets.AssetObject
```

Defines one project script assembly and its compilation policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Assets/ScriptAssemblyDefinitionAsset.cs#L13).

## `#ctor`

<a id="api-5a8428011eab51f6"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptAssemblyDefinitionAsset.#ctor e14ede228e1f3e3cf1cb961681d239353f57450a40c3c6a17bb4f5d88fb68296 -->

```csharp
public Inno.Scripting.Compiler.ScriptAssemblyDefinitionAsset.ScriptAssemblyDefinitionAsset()
```

Creates an empty definition asset for deserialization.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Assets/ScriptAssemblyDefinitionAsset.cs#L54).

## `#ctor`

<a id="api-bf643f72db87f202"></a>
<!-- api: M:Inno.Scripting.Compiler.ScriptAssemblyDefinitionAsset.#ctor(System.String,Inno.Scripting.Compiler.ScriptAssemblyScope,System.String[],System.String[],System.Boolean,System.Boolean) 5edba28ace99e4ae5f845f1d789478ef3f6ac5bb5727e37798fb0565dd3dfa07 -->

```csharp
public Inno.Scripting.Compiler.ScriptAssemblyDefinitionAsset.ScriptAssemblyDefinitionAsset(string assemblyName, Inno.Scripting.Compiler.ScriptAssemblyScope scope, string[]? references = null, string[]? defines = null, bool nullable = true, bool allowUnsafe = false)
```

Creates a configured script assembly definition for native asset export.

**Parameter `assemblyName`:** Stable managed assembly name.

**Parameter `scope`:** Runtime or Editor API scope.

**Parameter `references`:** Referenced script assembly names.

**Parameter `defines`:** Preprocessor symbols.

**Parameter `nullable`:** Whether nullable reference analysis is enabled.

**Parameter `allowUnsafe`:** Whether unsafe source is permitted.

**Throws `System.ArgumentException`:** Thrown when `assemblyName` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Assets/ScriptAssemblyDefinitionAsset.cs#L82).

## `allowUnsafe`

<a id="api-cae87c53fcc69f8e"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptAssemblyDefinitionAsset.allowUnsafe 1b405fb8650f1d8d853c0cb5267bd53d3bb1f39f056717e53c43c58fc9a7e5b1 -->

```csharp
public bool Inno.Scripting.Compiler.ScriptAssemblyDefinitionAsset.allowUnsafe { get; private set; }
```

Gets whether unsafe source is permitted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Assets/ScriptAssemblyDefinitionAsset.cs#L49).

## `assemblyName`

<a id="api-7870d3280379871b"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptAssemblyDefinitionAsset.assemblyName 60ab5b9f0a3300164f45e89b29c23d303d71fae4f29c21cdaec429eeaa1a0d61 -->

```csharp
public string Inno.Scripting.Compiler.ScriptAssemblyDefinitionAsset.assemblyName { get; private set; }
```

Gets the stable assembly name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Assets/ScriptAssemblyDefinitionAsset.cs#L19).

## `defines`

<a id="api-25571d63529bd8b3"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptAssemblyDefinitionAsset.defines efc5fc0d5d8216da7a976896cb826c58188e1e4cfaadd473835de72332102cff -->

```csharp
public string[] Inno.Scripting.Compiler.ScriptAssemblyDefinitionAsset.defines { get; private set; }
```

Gets preprocessor symbols applied to this assembly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Assets/ScriptAssemblyDefinitionAsset.cs#L37).

## `nullable`

<a id="api-27adb35d854a53ea"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptAssemblyDefinitionAsset.nullable 3906576fb1b1d3ff6d2dda84fff188d21a033b260619c201750d4b85621b575c -->

```csharp
public bool Inno.Scripting.Compiler.ScriptAssemblyDefinitionAsset.nullable { get; private set; }
```

Gets whether nullable reference analysis is enabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Assets/ScriptAssemblyDefinitionAsset.cs#L43).

## `references`

<a id="api-08f5b00738a807be"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptAssemblyDefinitionAsset.references 6cf990b5d7534a64c4d05ef5cf5f7c5bbaf737d22f2042089447734179cb83a9 -->

```csharp
public string[] Inno.Scripting.Compiler.ScriptAssemblyDefinitionAsset.references { get; private set; }
```

Gets referenced script assembly names.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Assets/ScriptAssemblyDefinitionAsset.cs#L31).

## `scope`

<a id="api-4acc36db008dba0b"></a>
<!-- api: P:Inno.Scripting.Compiler.ScriptAssemblyDefinitionAsset.scope ed6da8b02b16e52dd0470dca48f6a78d84b0a13f5376ccb37c4e4f154091f023 -->

```csharp
public Inno.Scripting.Compiler.ScriptAssemblyScope Inno.Scripting.Compiler.ScriptAssemblyDefinitionAsset.scope { get; private set; }
```

Gets the assembly API scope.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/scripting/Inno.Scripting.Compiler/Assets/ScriptAssemblyDefinitionAsset.cs#L25).
