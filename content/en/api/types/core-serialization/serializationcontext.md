---
title: "SerializationContext"
description: "Reference for SerializationContext in Inno.Core.Serialization."
uid: api.inno.core.serialization.3827a2d220cf4954
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: source-clr
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
---
# `SerializationContext`

This reference describes `SerializationContext` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [```GetRequired``1```](#api-61674d926170341e) | Method |
| [```TryGet``1```](#api-5a888eef07e65506) | Method |
| [```With``1```](#api-aec399826cfbdc2d) | Method |
| [`empty`](#api-f03ceb31e37cbd5f) | Property |

## Type declaration

<a id="api-3827a2d220cf4954"></a>
<!-- api: T:Inno.Core.Serialization.SerializationContext 538004cb3ada7cd8c123767790c3f5d3f3089f7c7d8ea477559401b7378f7e33 -->

```csharp
public sealed class Inno.Core.Serialization.SerializationContext
```

Provides immutable, operation-independent context to serialization converters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Context/SerializationContext.cs#L9).

## ```GetRequired``1```

<a id="api-61674d926170341e"></a>
<!-- api: M:Inno.Core.Serialization.SerializationContext.GetRequired``1 c61d0c7f27493e0c65ea8a0b93d3a6f93e2a6301160ee16a66cd40ee95de6253 -->

```csharp
public TContext Inno.Core.Serialization.SerializationContext.GetRequired<TContext>() where TContext : class
```

Resolves a value registered under the exact context contract type.

**Type parameter `TContext`:** The exact context contract type.

**Returns:** The registered context value.

**Throws `System.InvalidOperationException`:** Thrown when the requested context was not registered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Context/SerializationContext.cs#L97).

## ```TryGet``1```

<a id="api-5a888eef07e65506"></a>
<!-- api: M:Inno.Core.Serialization.SerializationContext.TryGet``1(``0@) c79eeb53db91d441296a75468aa7deacf7f94f952c8a179000bc31632af3447f -->

```csharp
public bool Inno.Core.Serialization.SerializationContext.TryGet<TContext>(out TContext? value) where TContext : class
```

Attempts to resolve a value registered under the exact context contract type.

**Type parameter `TContext`:** The exact context contract type.

**Parameter `value`:** The registered value when available.

**Returns:** `true` when a value is registered; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Context/SerializationContext.cs#L70).

## ```With``1```

<a id="api-aec399826cfbdc2d"></a>
<!-- api: M:Inno.Core.Serialization.SerializationContext.With``1(``0) a7418fd86a90f7c415ae7d3705246bf8f6ba2476c6ed6f9c4764ee9165699d6a -->

```csharp
public Inno.Core.Serialization.SerializationContext Inno.Core.Serialization.SerializationContext.With<TContext>(TContext value) where TContext : class
```

Returns a new context containing the supplied value under its declared context type.

**Type parameter `TContext`:** The exact context contract type.

**Parameter `value`:** The context value to register.

**Returns:** A new context containing the registered value.

**Throws `System.ArgumentNullException`:** Thrown when `value` is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Context/SerializationContext.cs#L38).

## `empty`

<a id="api-f03ceb31e37cbd5f"></a>
<!-- api: P:Inno.Core.Serialization.SerializationContext.empty 5bce9384d0472f991121822e7507dde4feadf69cd2b9cea329897d51ce1fbd96 -->

```csharp
public static Inno.Core.Serialization.SerializationContext Inno.Core.Serialization.SerializationContext.empty { get; }
```

Gets an empty serialization context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Serialization/Context/SerializationContext.cs#L21).
