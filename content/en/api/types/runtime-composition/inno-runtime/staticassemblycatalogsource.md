---
title: "StaticAssemblyCatalogSource"
description: "Reference for StaticAssemblyCatalogSource in Inno.Runtime."
uid: api.inno.runtime.e40327a24fd0b626
kind: api
owners:
  - Inno.Runtime
apiSurface: source-clr
contracts:
  - project.inno-runtime
---
# `StaticAssemblyCatalogSource`

This reference describes `StaticAssemblyCatalogSource` in `Inno.Runtime`. Read the [shared contract](../../../projects/inno-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Extensibility.Modules.IAssemblyCatalogSource`.

## Members

| Member | Kind |
| --- | --- |
| [`changed`](#api-ad6c014139cfd5e2) | Event |
| [`#ctor`](#api-ea4536f8796ba050) | Method |
| [`Dispose`](#api-cc77f800b49f2600) | Method |
| [`GetAssemblies`](#api-8ab84bee6c83629c) | Method |
| [`GetSharedAssemblies`](#api-dfc04779bbb47306) | Method |
| [`IsFrameworkAssembly`](#api-3b59706299670d8e) | Method |
| [`IsFrameworkReference`](#api-916a02933c65ab56) | Method |

## Type declaration

<a id="api-e40327a24fd0b626"></a>
<!-- api: T:Inno.Runtime.StaticAssemblyCatalogSource 038a81bf8c97acbc1ae05b1160d9cbaa4577a8ddcb01d9047308e6ec3d5f419a -->

```csharp
public sealed class Inno.Runtime.StaticAssemblyCatalogSource : Inno.Extensibility.Modules.IAssemblyCatalogSource
```

Supplies an explicit linked host closure without runtime assembly probing or dynamic loading.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Registration/StaticAssemblyCatalogSource.cs#L12).

## `changed`

<a id="api-ad6c014139cfd5e2"></a>
<!-- api: E:Inno.Runtime.StaticAssemblyCatalogSource.changed 256c3d6480ace2e4c3779dd7d34b092ab50b83c7ec644247841b765b1b1acdc7 -->

```csharp
public System.Action? Inno.Runtime.StaticAssemblyCatalogSource.changed
```

Notifies the owner that the host assembly snapshot should be refreshed at a safe point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Registration/StaticAssemblyCatalogSource.cs#L46).

## `#ctor`

<a id="api-ea4536f8796ba050"></a>
<!-- api: M:Inno.Runtime.StaticAssemblyCatalogSource.#ctor(System.Collections.Generic.IReadOnlyList{System.Reflection.Assembly},System.Collections.Generic.IReadOnlyList{System.Reflection.Assembly}) 030eb471417a1ea9c58b0a74b8bf3aac1a0d5c79d2016a6e64c6bc8acdbc0022 -->

```csharp
public Inno.Runtime.StaticAssemblyCatalogSource.StaticAssemblyCatalogSource(System.Collections.Generic.IReadOnlyList<System.Reflection.Assembly> assemblies, System.Collections.Generic.IReadOnlyList<System.Reflection.Assembly> frameworkAssemblies)
```

Copies the host and framework identities provided by the generated platform composition.

**Parameter `assemblies`:** The complete statically linked Inno host closure.

**Parameter `frameworkAssemblies`:** Framework contracts shared by every contributed module.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Registration/StaticAssemblyCatalogSource.cs#L29).

## `Dispose`

<a id="api-cc77f800b49f2600"></a>
<!-- api: M:Inno.Runtime.StaticAssemblyCatalogSource.Dispose 0d02254242e247f882057938993017aac14d0a9c3df365ad91ffeb28e7ad1b41 -->

```csharp
public void Inno.Runtime.StaticAssemblyCatalogSource.Dispose()
```

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Registration/StaticAssemblyCatalogSource.cs#L81).

## `GetAssemblies`

<a id="api-8ab84bee6c83629c"></a>
<!-- api: M:Inno.Runtime.StaticAssemblyCatalogSource.GetAssemblies 6b99fb32f77aa2dcbd3958e7e63c3326b0a741ddad374db17172e0ce65f41d8e -->

```csharp
public System.Collections.Generic.IReadOnlyList<System.Reflection.Assembly> Inno.Runtime.StaticAssemblyCatalogSource.GetAssemblies()
```

Gets the complete host assemblies that participate in extension discovery.

**Returns:** The current host snapshot; the caller must not retain it beyond its catalog generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Registration/StaticAssemblyCatalogSource.cs#L53).

## `GetSharedAssemblies`

<a id="api-dfc04779bbb47306"></a>
<!-- api: M:Inno.Runtime.StaticAssemblyCatalogSource.GetSharedAssemblies 00c1bee19d8ea4ebc9493e581f29f82cecb47f645d57d9c115a211fa1301e98d -->

```csharp
public System.Collections.Generic.IReadOnlyList<System.Reflection.Assembly> Inno.Runtime.StaticAssemblyCatalogSource.GetSharedAssemblies()
```

Gets host contracts and framework assemblies available to candidate modules.

**Returns:** A snapshot of shareable assemblies owned by the host implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Registration/StaticAssemblyCatalogSource.cs#L60).

## `IsFrameworkAssembly`

<a id="api-3b59706299670d8e"></a>
<!-- api: M:Inno.Runtime.StaticAssemblyCatalogSource.IsFrameworkAssembly(System.Reflection.Assembly) d4c4229c8f3c1c7f49cb2f729748cacbe33ed3b7071cf07189208c0b70c7acb5 -->

```csharp
public bool Inno.Runtime.StaticAssemblyCatalogSource.IsFrameworkAssembly(System.Reflection.Assembly assembly)
```

Determines whether an assembly is a framework contract rather than a contributed module.

**Parameter `assembly`:** The candidate shared assembly.

**Returns:** Whether the assembly is owned by the selected managed framework.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Registration/StaticAssemblyCatalogSource.cs#L74).

## `IsFrameworkReference`

<a id="api-916a02933c65ab56"></a>
<!-- api: M:Inno.Runtime.StaticAssemblyCatalogSource.IsFrameworkReference(System.String) a429226029343865403046c99e09d757e7cae7ae1fd25fb677a6a5a926abc51a -->

```csharp
public bool Inno.Runtime.StaticAssemblyCatalogSource.IsFrameworkReference(string assemblyName)
```

Determines whether a referenced simple name belongs to the selected managed framework.

**Parameter `assemblyName`:** The referenced managed assembly simple name.

**Returns:** Whether the framework owns this dependency.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Registration/StaticAssemblyCatalogSource.cs#L67).
