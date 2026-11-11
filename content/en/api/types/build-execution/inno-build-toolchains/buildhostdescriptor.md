---
title: "BuildHostDescriptor"
description: "Reference for BuildHostDescriptor in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.09542b31f728b4f2
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `BuildHostDescriptor`

This reference describes `BuildHostDescriptor` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Build.Toolchains.BuildHostDescriptor>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-1db352c490b4221e) | Method |
| [`Equals`](#api-10c02883d4897d76) | Method |
| [`Equals`](#api-b45a28b3ec9a9590) | Method |
| [`GetHashCode`](#api-335817f5af9610c3) | Method |
| [`op_Equality`](#api-01b692d1a128ea1d) | Method |
| [`op_Inequality`](#api-6bbcca640e9951b9) | Method |
| [`ToString`](#api-91ea24736ddf918c) | Method |
| [`architecture`](#api-71735d741923196e) | Property |
| [`services`](#api-f5e607cb94f9b0e5) | Property |
| [`system`](#api-f47149fd0cf96cca) | Property |

## Type declaration

<a id="api-09542b31f728b4f2"></a>
<!-- api: T:Inno.Build.Toolchains.BuildHostDescriptor 59b163d77d2a43818f7c940b49214a445780d203d710830960dfe298fdda9119 -->

```csharp
public sealed record Inno.Build.Toolchains.BuildHostDescriptor : System.IEquatable<Inno.Build.Toolchains.BuildHostDescriptor>
```

Identifies the tool execution machine without selecting any product target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/BuildHostDescriptor.cs#L8).

## `#ctor`

<a id="api-1db352c490b4221e"></a>
<!-- api: M:Inno.Build.Toolchains.BuildHostDescriptor.#ctor(System.String,System.String,Inno.Build.Toolchains.BuildHostServices) 1923842d030ad505d45ef86cab6119ec7c6dc8a276d6c27a3c511b330f79c5a8 -->

```csharp
public Inno.Build.Toolchains.BuildHostDescriptor.BuildHostDescriptor(string system, string architecture, Inno.Build.Toolchains.BuildHostServices? services = null)
```

Captures host facts supplied by a product or command composition boundary.

**Parameter `system`:** The execution operating system identity.

**Parameter `architecture`:** The execution processor architecture.

**Parameter `services`:** Explicit host execution services, or null for direct physical execution.

**Throws `System.ArgumentException`:** A host fact is unassigned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/BuildHostDescriptor.cs#L25).

## `Equals`

<a id="api-10c02883d4897d76"></a>
<!-- api: M:Inno.Build.Toolchains.BuildHostDescriptor.Equals(Inno.Build.Toolchains.BuildHostDescriptor) 48a773fbeb3e17bcd68391e528a4a0cca33cc078318ee4e616bd315b54e8cbfe -->

```csharp
public bool Inno.Build.Toolchains.BuildHostDescriptor.Equals(Inno.Build.Toolchains.BuildHostDescriptor? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/BuildHostDescriptor.cs#L8).

## `Equals`

<a id="api-b45a28b3ec9a9590"></a>
<!-- api: M:Inno.Build.Toolchains.BuildHostDescriptor.Equals(System.Object) 674d01a64f5b4204143042e7683c840b68a066505634deaafbc548f2159aa44a -->

```csharp
public override bool Inno.Build.Toolchains.BuildHostDescriptor.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/BuildHostDescriptor.cs#L8).

## `GetHashCode`

<a id="api-335817f5af9610c3"></a>
<!-- api: M:Inno.Build.Toolchains.BuildHostDescriptor.GetHashCode bbca95068a547440fd6b2c623fa93b8c8d49a0a05d6bd11625cf4d4d240290af -->

```csharp
public override int Inno.Build.Toolchains.BuildHostDescriptor.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/BuildHostDescriptor.cs#L8).

## `op_Equality`

<a id="api-01b692d1a128ea1d"></a>
<!-- api: M:Inno.Build.Toolchains.BuildHostDescriptor.op_Equality(Inno.Build.Toolchains.BuildHostDescriptor,Inno.Build.Toolchains.BuildHostDescriptor) 9f4e5b1c2d8214dc1d233c01fb931a139883cf036ecd0e1cc0b1ee9005232b7c -->

```csharp
public static bool Inno.Build.Toolchains.BuildHostDescriptor.operator ==(Inno.Build.Toolchains.BuildHostDescriptor? left, Inno.Build.Toolchains.BuildHostDescriptor? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/BuildHostDescriptor.cs#L8).

## `op_Inequality`

<a id="api-6bbcca640e9951b9"></a>
<!-- api: M:Inno.Build.Toolchains.BuildHostDescriptor.op_Inequality(Inno.Build.Toolchains.BuildHostDescriptor,Inno.Build.Toolchains.BuildHostDescriptor) 161463dba41f99d6612ea7273016944a9eb04bb00a2e13cb69b436bdf2d5a7ea -->

```csharp
public static bool Inno.Build.Toolchains.BuildHostDescriptor.operator !=(Inno.Build.Toolchains.BuildHostDescriptor? left, Inno.Build.Toolchains.BuildHostDescriptor? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/BuildHostDescriptor.cs#L8).

## `ToString`

<a id="api-91ea24736ddf918c"></a>
<!-- api: M:Inno.Build.Toolchains.BuildHostDescriptor.ToString bbb81562f7cf3bc937ac2312b68f3107cb9704e4c0c45e5003b3b137e61e544f -->

```csharp
public override string Inno.Build.Toolchains.BuildHostDescriptor.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/BuildHostDescriptor.cs#L8).

## `architecture`

<a id="api-71735d741923196e"></a>
<!-- api: P:Inno.Build.Toolchains.BuildHostDescriptor.architecture 2fb964b1b1e47446ceeeebfd79efd5d1a2b95b1533690fa002792abafd6a5fd3 -->

```csharp
public string Inno.Build.Toolchains.BuildHostDescriptor.architecture { get; }
```

Gets the processor architecture on which tools execute.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/BuildHostDescriptor.cs#L45).

## `services`

<a id="api-f5e607cb94f9b0e5"></a>
<!-- api: P:Inno.Build.Toolchains.BuildHostDescriptor.services 6fd71b802ddab38ab67f545e5de939babcd4a8cd070570355a7616d23edbbe1b -->

```csharp
public Inno.Build.Toolchains.BuildHostServices Inno.Build.Toolchains.BuildHostDescriptor.services { get; }
```

Gets frozen host execution services.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/BuildHostDescriptor.cs#L50).

## `system`

<a id="api-f47149fd0cf96cca"></a>
<!-- api: P:Inno.Build.Toolchains.BuildHostDescriptor.system 09391eef9c79632742bf99f147df6bd57e6ec0b20d736bf9563f0cee15e79ccd -->

```csharp
public string Inno.Build.Toolchains.BuildHostDescriptor.system { get; }
```

Gets the operating system on which tools execute.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/BuildHostDescriptor.cs#L40).
