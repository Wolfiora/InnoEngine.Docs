---
title: "Time"
description: "Reference for Time in Inno.Runtime."
uid: api.inno.runtime.b97859746caf3165
kind: api
owners:
  - Inno.Runtime
apiSurface: source-clr
contracts:
  - project.inno-runtime
---
# `Time`

This reference describes `Time` in `Inno.Runtime`. Read the [shared contract](../../../projects/inno-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`deltaTime`](#api-6a1da77fbef91a51) | Property |
| [`fixedDeltaTime`](#api-02df7f326429cc93) | Property |
| [`fixedTime`](#api-b90af850734bbcfd) | Property |
| [`frameCount`](#api-081956847d82890b) | Property |
| [`isPaused`](#api-8ceda0eec656c837) | Property |
| [`time`](#api-24abd07269b42912) | Property |
| [`timeScale`](#api-1c1d741254c3dc67) | Property |
| [`unscaledDeltaTime`](#api-00c2364ff406ddfe) | Property |
| [`unscaledTime`](#api-1a9e1607856a5f95) | Property |

## Type declaration

<a id="api-b97859746caf3165"></a>
<!-- api: T:Inno.Runtime.Time b5c143cf5625fe613f4a46edaf6d61be61d953488b4c2ed6c2beabc6ff0eceeb -->

```csharp
public static class Inno.Runtime.Time
```

Provides Unity-style timing values for the runtime session bound to the current execution context.

**Constraints:** This façade owns no process-global timing state. Engine systems update an instance clock and scripts resolve
that clock through the active `Inno.Runtime.RuntimeSession` scope.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Execution/Time.cs#L15).

## `deltaTime`

<a id="api-6a1da77fbef91a51"></a>
<!-- api: P:Inno.Runtime.Time.deltaTime d7074f01975120bc7b1a80fd319b14e24af583c84e755296b4138ab83af4f111 -->

```csharp
public static float Inno.Runtime.Time.deltaTime { get; }
```

Gets the current variable frame interval in seconds.

**Throws `System.InvalidOperationException`:** Thrown when no runtime session is bound to the current execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Execution/Time.cs#L31).

## `fixedDeltaTime`

<a id="api-02df7f326429cc93"></a>
<!-- api: P:Inno.Runtime.Time.fixedDeltaTime a46970652e5b9b940ec1118c654a3a7d37ed9b2106f6778666c876ae13ab7a80 -->

```csharp
public static float Inno.Runtime.Time.fixedDeltaTime { get; }
```

Gets the interval of the active fixed simulation step in seconds.

**Throws `System.InvalidOperationException`:** Thrown when no runtime session is bound to the current execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Execution/Time.cs#L63).

## `fixedTime`

<a id="api-b90af850734bbcfd"></a>
<!-- api: P:Inno.Runtime.Time.fixedTime ce336fa28e4b8e24235ea433cd4778a18b82490f5978ff0ce472e6e11476b7c2 -->

```csharp
public static float Inno.Runtime.Time.fixedTime { get; }
```

Gets the accumulated fixed simulation time in seconds.

**Throws `System.InvalidOperationException`:** Thrown when no runtime session is bound to the current execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Execution/Time.cs#L55).

## `frameCount`

<a id="api-081956847d82890b"></a>
<!-- api: P:Inno.Runtime.Time.frameCount 27d5302947b0a324941ca84a0fe1cca1b685da5e618d7fadbdde29ca4b2456d3 -->

```csharp
public static long Inno.Runtime.Time.frameCount { get; }
```

Gets the number of variable frames begun by this session.

**Throws `System.InvalidOperationException`:** Thrown when no runtime session is bound to the current execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Execution/Time.cs#L95).

## `isPaused`

<a id="api-8ceda0eec656c837"></a>
<!-- api: P:Inno.Runtime.Time.isPaused fb6a26ba576825ba599cca06597955728d6f3e13d9522700fd501e4ce80f3281 -->

```csharp
public static bool Inno.Runtime.Time.isPaused { get; set; }
```

Gets whether scaled simulation is paused.

**Throws `System.InvalidOperationException`:** Thrown when no runtime session is bound to the current execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Execution/Time.cs#L83).

## `time`

<a id="api-24abd07269b42912"></a>
<!-- api: P:Inno.Runtime.Time.time 54020d95d75b49f9f654618b801a73c2bf195036c01450fb2d9e71ab75c23a90 -->

```csharp
public static float Inno.Runtime.Time.time { get; }
```

Gets the total elapsed session time in seconds.

**Throws `System.InvalidOperationException`:** Thrown when no runtime session is bound to the current execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Execution/Time.cs#L23).

## `timeScale`

<a id="api-1c1d741254c3dc67"></a>
<!-- api: P:Inno.Runtime.Time.timeScale 7fd79493d5050a248dd49ddb4c65df9901a4dc6e1feab39d4a8943ddb0ae3710 -->

```csharp
public static float Inno.Runtime.Time.timeScale { get; set; }
```

Gets the current simulation time multiplier.

**Throws `System.InvalidOperationException`:** Thrown when no runtime session is bound to the current execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Execution/Time.cs#L71).

## `unscaledDeltaTime`

<a id="api-00c2364ff406ddfe"></a>
<!-- api: P:Inno.Runtime.Time.unscaledDeltaTime 41fde65f24c6715eeb7e3fe555ae89f542df11590bb27911a182c9848aa96433 -->

```csharp
public static float Inno.Runtime.Time.unscaledDeltaTime { get; }
```

Gets the current frame interval unaffected by pause or time scaling.

**Throws `System.InvalidOperationException`:** Thrown when no runtime session is bound to the current execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Execution/Time.cs#L47).

## `unscaledTime`

<a id="api-1a9e1607856a5f95"></a>
<!-- api: P:Inno.Runtime.Time.unscaledTime 8e2db702d90c9edcc4acb8438ef85d5717beedfaa0278cab8807d4b61f7245cd -->

```csharp
public static float Inno.Runtime.Time.unscaledTime { get; }
```

Gets total elapsed session time unaffected by pause or time scaling.

**Throws `System.InvalidOperationException`:** Thrown when no runtime session is bound to the current execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Execution/Time.cs#L39).
