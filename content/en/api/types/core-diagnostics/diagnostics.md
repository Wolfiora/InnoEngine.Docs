---
title: "Diagnostics"
description: "Reference for Diagnostics in Inno.Core.Diagnostics."
uid: api.inno.core.diagnostics.5b7fdb99c353e45d
kind: api
owners:
  - Inno.Core.Diagnostics
apiSurface: source-clr
contracts:
  - project.inno-core-diagnostics#producer-and-presentation-contract
---
# `Diagnostics`

This reference describes `Diagnostics` in `Inno.Core.Diagnostics`. Read the [shared contract](../../projects/inno-core-diagnostics.md#producer-and-presentation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Clear`](#api-1deab0ba5375d17b) | Method |
| [`Clear`](#api-1804cecbaec81760) | Method |
| [`Set`](#api-db8b6817ac7873dd) | Method |
| [`Set`](#api-1216948d96dabf23) | Method |
| [`Set`](#api-f560110a8e208609) | Method |
| [`Set`](#api-a0cde78cb8904d2e) | Method |

## Type declaration

<a id="api-5b7fdb99c353e45d"></a>
<!-- api: T:Inno.Core.Diagnostics.Diagnostics a966b4d9bceb869d431a9c6d0d1eecf5cf800e3da065eab5786fe5a69fe3bd1b -->

```csharp
public static class Inno.Core.Diagnostics.Diagnostics
```

Provides concise state-oriented diagnostic publication for the calling type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/Diagnostics.cs#L10).

## `Clear`

<a id="api-1deab0ba5375d17b"></a>
<!-- api: M:Inno.Core.Diagnostics.Diagnostics.Clear(System.Guid,System.String) c603f43ff34340a9726dca9f048c84f0d744eaa596e649253193e5fbc3142eb3 -->

```csharp
public static void Inno.Core.Diagnostics.Diagnostics.Clear(System.Guid targetId, string group)
```

Clears one targeted diagnostic group owned by the calling type.

**Parameter `targetId`:** The stable identity of the asset, scene element, or other dynamic target.

**Parameter `group`:** The non-empty responsibility name scoped to the calling type and target.

**Throws `System.ArgumentException`:** Thrown when `targetId` is empty or `group` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/Diagnostics.cs#L153).

## `Clear`

<a id="api-1804cecbaec81760"></a>
<!-- api: M:Inno.Core.Diagnostics.Diagnostics.Clear(System.String) f9da73d19c642ce6a26cf5de15e6d83aa1caf43afa2cc8fcde65439a76966f27 -->

```csharp
public static void Inno.Core.Diagnostics.Diagnostics.Clear(string group)
```

Clears one diagnostic group owned by the calling type.

**Parameter `group`:** The non-empty responsibility name scoped to the calling type.

**Throws `System.ArgumentException`:** Thrown when `group` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/Diagnostics.cs#L138).

## `Set`

<a id="api-db8b6817ac7873dd"></a>
<!-- api: M:Inno.Core.Diagnostics.Diagnostics.Set(System.Guid,System.String,Inno.Core.Diagnostics.Diagnostic,System.String) 5958b010b0f2aac42a9c269598d0b737dc9cd94de0f02b69c1b0b0f8efdb3e53 -->

```csharp
public static void Inno.Core.Diagnostics.Diagnostics.Set(System.Guid targetId, string group, Inno.Core.Diagnostics.Diagnostic diagnostic, string? displayName = null)
```

Atomically sets the complete current state of one targeted diagnostic group owned by the calling type.

**Parameter `targetId`:** The stable identity of the asset, scene element, or other dynamic target.

**Parameter `group`:** The non-empty responsibility name scoped to the calling type and target.

**Parameter `diagnostic`:** The single current diagnostic. It replaces every previous entry in the targeted group.

**Parameter `displayName`:** The optional target name presented by diagnostic consumers.

**Throws `System.ArgumentException`:** Thrown when `targetId` is empty or `group` is empty.

**Throws `System.ArgumentNullException`:** Thrown when `diagnostic` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/Diagnostics.cs#L84).

## `Set`

<a id="api-1216948d96dabf23"></a>
<!-- api: M:Inno.Core.Diagnostics.Diagnostics.Set(System.Guid,System.String,System.Collections.Generic.IEnumerable{Inno.Core.Diagnostics.Diagnostic},System.String) bdd9481b24e77e2d2f653cc1b744d716257f8b8cac742a7f92ed2da0f98663a1 -->

```csharp
public static void Inno.Core.Diagnostics.Diagnostics.Set(System.Guid targetId, string group, System.Collections.Generic.IEnumerable<Inno.Core.Diagnostics.Diagnostic> diagnostics, string? displayName = null)
```

Atomically sets the complete current state of one targeted diagnostic group owned by the calling type.

**Parameter `targetId`:** The stable identity of the asset, scene element, or other dynamic target.

**Parameter `group`:** The non-empty responsibility name scoped to the calling type and target.

**Parameter `diagnostics`:** The complete current diagnostic collection. An empty collection clears the targeted group.

**Parameter `displayName`:** The optional target name presented by diagnostic consumers.

**Throws `System.ArgumentException`:** Thrown when `targetId` is empty, `group` is empty, or the collection contains a null entry.

**Throws `System.ArgumentNullException`:** Thrown when `diagnostics` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/Diagnostics.cs#L116).

## `Set`

<a id="api-f560110a8e208609"></a>
<!-- api: M:Inno.Core.Diagnostics.Diagnostics.Set(System.String,Inno.Core.Diagnostics.Diagnostic) 8388ea64dff0845747c88887ee835478b287d42b28697d7c8d44bcd868499cd5 -->

```csharp
public static void Inno.Core.Diagnostics.Diagnostics.Set(string group, Inno.Core.Diagnostics.Diagnostic diagnostic)
```

Atomically sets the complete current state of one diagnostic group owned by the calling type.

**Parameter `group`:** The non-empty responsibility name scoped to the calling type.

**Parameter `diagnostic`:** The single current diagnostic. It replaces every previous entry in the group.

**Throws `System.ArgumentException`:** Thrown when `group` is empty.

**Throws `System.ArgumentNullException`:** Thrown when `diagnostic` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/Diagnostics.cs#L28).

## `Set`

<a id="api-a0cde78cb8904d2e"></a>
<!-- api: M:Inno.Core.Diagnostics.Diagnostics.Set(System.String,System.Collections.Generic.IEnumerable{Inno.Core.Diagnostics.Diagnostic}) de36b7dee17480ec43887c8a7a3b1a1e3f8b75f8ab0b554bf81df94739c9169a -->

```csharp
public static void Inno.Core.Diagnostics.Diagnostics.Set(string group, System.Collections.Generic.IEnumerable<Inno.Core.Diagnostics.Diagnostic> diagnostics)
```

Atomically sets the complete current state of one diagnostic group owned by the calling type.

**Parameter `group`:** The non-empty responsibility name scoped to the calling type.

**Parameter `diagnostics`:** The complete current diagnostic collection. An empty collection clears the group.

**Throws `System.ArgumentException`:** Thrown when `group` is empty or the collection contains a null entry.

**Throws `System.ArgumentNullException`:** Thrown when `diagnostics` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/Diagnostics.cs#L52).
