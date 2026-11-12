---
title: "SerializationContext"
description: "Reference for SerializationContext in Inno.Core.Serialization."
uid: api.inno.core.serialization.runtime-script.9189304a8217c39f
kind: api
owners:
  - Inno.Core.Serialization
apiSurface: runtime-script
contracts:
  - project.inno-core-serialization#operation-and-generation-contract
  - manual.scripting.use-script-api
---
# `SerializationContext`

This reference describes `SerializationContext` in `Inno.Core.Serialization`. Read the [shared contract](../../projects/inno-core-serialization.md#operation-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-323b00f0cc49c0cd) | Method |
| [```GetRequired``1```](#api-1cad0034f481539b) | Method |
| [```TryGet``1```](#api-76ccafff7ff94fb3) | Method |
| [```With``1```](#api-f5b976cbd15f4cae) | Method |
| [`empty`](#api-6716acb04eec8a95) | Property |

## Type declaration

<a id="api-9189304a8217c39f"></a>
<!-- api: T:InnoEngine.Serialization.SerializationContext ae5016b32cb3f904d61aae59bc19951497103feb83babe4151696cf14a138a42 -->

```csharp
public sealed class InnoEngine.Serialization.SerializationContext
```

Provides immutable, operation-independent context to serialization converters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Context/SerializationContext.cs#L9).

## `#ctor`

<a id="api-323b00f0cc49c0cd"></a>
<!-- api: M:InnoEngine.Serialization.SerializationContext.#ctor 1aef3884e304cc00cc46569935e4837e039c80379727b649fd6e39a16292611e -->

```csharp
public InnoEngine.Serialization.SerializationContext.SerializationContext()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Context/SerializationContext.cs#L9).

## ```GetRequired``1```

<a id="api-1cad0034f481539b"></a>
<!-- api: M:InnoEngine.Serialization.SerializationContext.GetRequired``1 1e15bcda4868bcb35c49f2bab29ba4e3963a63d83a19e1936a2f5ec74864b3cd -->

```csharp
public TContext InnoEngine.Serialization.SerializationContext.GetRequired<TContext>() where TContext : class
```

Resolves a value registered under the exact context contract type.

**Type parameter `TContext`:** The exact context contract type.

**Returns:** The registered context value.

**Throws `System.InvalidOperationException`:** Thrown when the requested context was not registered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Context/SerializationContext.cs#L97).

## ```TryGet``1```

<a id="api-76ccafff7ff94fb3"></a>
<!-- api: M:InnoEngine.Serialization.SerializationContext.TryGet``1(``0@) 0c0920ac437ace069279ad6ebd3ecda3435b7dfc5b9cab735756b7e00c5bd20f -->

```csharp
public bool InnoEngine.Serialization.SerializationContext.TryGet<TContext>(out TContext? value) where TContext : class
```

Attempts to resolve a value registered under the exact context contract type.

**Type parameter `TContext`:** The exact context contract type.

**Parameter `value`:** The registered value when available.

**Returns:** `true` when a value is registered; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Context/SerializationContext.cs#L70).

## ```With``1```

<a id="api-f5b976cbd15f4cae"></a>
<!-- api: M:InnoEngine.Serialization.SerializationContext.With``1(``0) bb53219d104b6e385cd150bf8de2d391e751a74e94a6e39223e3d7dd0162d393 -->

```csharp
public InnoEngine.Serialization.SerializationContext InnoEngine.Serialization.SerializationContext.With<TContext>(TContext value) where TContext : class
```

Returns a new context containing the supplied value under its declared context type.

**Type parameter `TContext`:** The exact context contract type.

**Parameter `value`:** The context value to register.

**Returns:** A new context containing the registered value.

**Throws `System.ArgumentNullException`:** Thrown when `value` is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Context/SerializationContext.cs#L38).

## `empty`

<a id="api-6716acb04eec8a95"></a>
<!-- api: P:InnoEngine.Serialization.SerializationContext.empty 5a54f372136d5dbdc26319ed043a3ffd53e9c5aeffd002cd1dd9fe8dcb3abb76 -->

```csharp
public static InnoEngine.Serialization.SerializationContext InnoEngine.Serialization.SerializationContext.empty { get; }
```

Gets an empty serialization context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Serialization/Context/SerializationContext.cs#L21).
