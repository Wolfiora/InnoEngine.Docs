---
title: "DocumentationResult"
description: "Reference for DocumentationResult in Inno.Tooling.Documentation."
uid: api.inno.tooling.documentation.43fde1f8aa4bab96
kind: api
owners:
  - Inno.Tooling.Documentation
apiSurface: source-clr
contracts:
  - project.inno-tooling-documentation#failure-and-ownership-boundaries
---
# `DocumentationResult`

This reference describes `DocumentationResult` in `Inno.Tooling.Documentation`. Read the [shared contract](../../projects/inno-tooling-documentation.md#failure-and-ownership-boundaries) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Tooling.Documentation.DocumentationResult>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-450201bab5b21e7a) | Method |
| [`Deconstruct`](#api-76b1e0b64b5e03f9) | Method |
| [`Equals`](#api-3af254f09957a0fa) | Method |
| [`Equals`](#api-2bf5734934883866) | Method |
| [`GetHashCode`](#api-5570dd5bf112008d) | Method |
| [`op_Equality`](#api-7e91d6ff32cb2ec3) | Method |
| [`op_Inequality`](#api-96cccf491a9b00c7) | Method |
| [`ToString`](#api-07a2caa078adcd61) | Method |
| [`continuations`](#api-ce1d0aa0f66cddaa) | Property |
| [`hits`](#api-d0e0717af6054820) | Property |
| [`message`](#api-f6cf117b08f09ff7) | Property |
| [`nextRequest`](#api-899237448cd970cf) | Property |
| [`snapshot`](#api-0a3a06fcf3dd23a0) | Property |
| [`sourceApiStatus`](#api-27ef061a7d133c90) | Property |
| [`status`](#api-f9f3e72f58e9b26f) | Property |
| [`timingsMilliseconds`](#api-d3578fba5061c9e4) | Property |

## Type declaration

<a id="api-43fde1f8aa4bab96"></a>
<!-- api: T:Inno.Tooling.Documentation.DocumentationResult 0a28a8b361663d8f77b1e7ae27c89831413e3cf28d6257f3896f39f66f239398 -->

```csharp
public sealed record Inno.Tooling.Documentation.DocumentationResult : System.IEquatable<Inno.Tooling.Documentation.DocumentationResult>
```

Returns transport-independent documentation content with explicit completeness and provenance.

**Parameter `status`:** Found, Empty, Ambiguous, Missing, Partial, Navigation, Mismatched or Ready. Execution failures throw rather than resemble content.

**Parameter `snapshot`:** The immutable documentation generation identity.

**Parameter `sourceApiStatus`:** Source validation state. Unverified never asserts that declarations match current engine source.

**Parameter `message`:** A concise explanation of the result and any required next action.

**Parameter `hits`:** Ordered content or navigation candidates; each identifies its completeness independently.

**Parameter `continuations`:** Remaining content or necessary contracts that must be read before claiming a complete contract.

**Parameter `nextRequest`:** Structured continuation for a result page or content segment, or null when that selection is exhausted.
Associated contracts remain separately listed in continuations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationResult.cs#L31).

## `#ctor`

<a id="api-450201bab5b21e7a"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationResult.#ctor(System.String,System.String,System.String,System.String,System.Collections.Generic.IReadOnlyList{Inno.Tooling.Documentation.DocumentationHit},System.Collections.Generic.IReadOnlyList{Inno.Tooling.Documentation.DocumentationContinuation},Inno.Tooling.Documentation.DocumentationRequest) 970d0c7729296970b8c8a818f28e2237fdf4a5b0fd0812d50ea7c198e2134d34 -->

```csharp
public Inno.Tooling.Documentation.DocumentationResult.DocumentationResult(string status, string snapshot, string sourceApiStatus, string message, System.Collections.Generic.IReadOnlyList<Inno.Tooling.Documentation.DocumentationHit> hits, System.Collections.Generic.IReadOnlyList<Inno.Tooling.Documentation.DocumentationContinuation> continuations, Inno.Tooling.Documentation.DocumentationRequest? nextRequest = null)
```

Returns transport-independent documentation content with explicit completeness and provenance.

**Parameter `status`:** Found, Empty, Ambiguous, Missing, Partial, Navigation, Mismatched or Ready. Execution failures throw rather than resemble content.

**Parameter `snapshot`:** The immutable documentation generation identity.

**Parameter `sourceApiStatus`:** Source validation state. Unverified never asserts that declarations match current engine source.

**Parameter `message`:** A concise explanation of the result and any required next action.

**Parameter `hits`:** Ordered content or navigation candidates; each identifies its completeness independently.

**Parameter `continuations`:** Remaining content or necessary contracts that must be read before claiming a complete contract.

**Parameter `nextRequest`:** Structured continuation for a result page or content segment, or null when that selection is exhausted.
Associated contracts remain separately listed in continuations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationResult.cs#L31).

## `Deconstruct`

<a id="api-76b1e0b64b5e03f9"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationResult.Deconstruct(System.String@,System.String@,System.String@,System.String@,System.Collections.Generic.IReadOnlyList{Inno.Tooling.Documentation.DocumentationHit}@,System.Collections.Generic.IReadOnlyList{Inno.Tooling.Documentation.DocumentationContinuation}@,Inno.Tooling.Documentation.DocumentationRequest@) c24a736e24dc95a58f84c3c98b0ae30d0e35b7f622432ad13cf639ef10330e97 -->

```csharp
public void Inno.Tooling.Documentation.DocumentationResult.Deconstruct(out string status, out string snapshot, out string sourceApiStatus, out string message, out System.Collections.Generic.IReadOnlyList<Inno.Tooling.Documentation.DocumentationHit> hits, out System.Collections.Generic.IReadOnlyList<Inno.Tooling.Documentation.DocumentationContinuation> continuations, out Inno.Tooling.Documentation.DocumentationRequest? nextRequest)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationResult.cs#L31).

## `Equals`

<a id="api-3af254f09957a0fa"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationResult.Equals(Inno.Tooling.Documentation.DocumentationResult) ee901288f870117940fc4c5470ab2543f00fb79ada2a9805b8331c8c07dad2b7 -->

```csharp
public bool Inno.Tooling.Documentation.DocumentationResult.Equals(Inno.Tooling.Documentation.DocumentationResult? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationResult.cs#L31).

## `Equals`

<a id="api-2bf5734934883866"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationResult.Equals(System.Object) 7740c056cd31d341b4a011de11141013efd388d9efe91fa067dbb6efafd452e7 -->

```csharp
public override bool Inno.Tooling.Documentation.DocumentationResult.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationResult.cs#L31).

## `GetHashCode`

<a id="api-5570dd5bf112008d"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationResult.GetHashCode ef2e89e2568b5bd2f6012a57d58116b0d5cc72f6fd57f4c7ec5a6e8f68527541 -->

```csharp
public override int Inno.Tooling.Documentation.DocumentationResult.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationResult.cs#L31).

## `op_Equality`

<a id="api-7e91d6ff32cb2ec3"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationResult.op_Equality(Inno.Tooling.Documentation.DocumentationResult,Inno.Tooling.Documentation.DocumentationResult) 9faafddd5dd7dbfc37086c44440a1884502eb2330b15012589f25778db1fdb55 -->

```csharp
public static bool Inno.Tooling.Documentation.DocumentationResult.operator ==(Inno.Tooling.Documentation.DocumentationResult? left, Inno.Tooling.Documentation.DocumentationResult? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationResult.cs#L31).

## `op_Inequality`

<a id="api-96cccf491a9b00c7"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationResult.op_Inequality(Inno.Tooling.Documentation.DocumentationResult,Inno.Tooling.Documentation.DocumentationResult) d39aa99828e9b324af7dcff941c0380a42ce9dc3e824cc845f664f5fc32299de -->

```csharp
public static bool Inno.Tooling.Documentation.DocumentationResult.operator !=(Inno.Tooling.Documentation.DocumentationResult? left, Inno.Tooling.Documentation.DocumentationResult? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationResult.cs#L31).

## `ToString`

<a id="api-07a2caa078adcd61"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationResult.ToString a22d970cadd0f68de4d997c281782c4bcc29e32d7075f43564dc76c70f556442 -->

```csharp
public override string Inno.Tooling.Documentation.DocumentationResult.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationResult.cs#L31).

## `continuations`

<a id="api-ce1d0aa0f66cddaa"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationResult.continuations dab590f4e2797edfe22f8d987e6cca494c3e314e081240d7c2e5d4b40212c825 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Tooling.Documentation.DocumentationContinuation> Inno.Tooling.Documentation.DocumentationResult.continuations { get; init; }
```

Remaining content or necessary contracts that must be read before claiming a complete contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationResult.cs#L37).

## `hits`

<a id="api-d0e0717af6054820"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationResult.hits b2e001719377a8812c11c4b9754bcb291125c00b1f52d13dfdd8a1c3d3fe0fce -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Tooling.Documentation.DocumentationHit> Inno.Tooling.Documentation.DocumentationResult.hits { get; init; }
```

Ordered content or navigation candidates; each identifies its completeness independently.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationResult.cs#L36).

## `message`

<a id="api-f6cf117b08f09ff7"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationResult.message 4ecc0d61941f99ae370cf0965c11d0b9d4927eeeee9e64928ef0e6d76aa40c83 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationResult.message { get; init; }
```

A concise explanation of the result and any required next action.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationResult.cs#L35).

## `nextRequest`

<a id="api-899237448cd970cf"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationResult.nextRequest 91d2f24e6bbc9fd6750d52edc63623e239f18a9308bcd0e93848a6fa56c2c754 -->

```csharp
public Inno.Tooling.Documentation.DocumentationRequest? Inno.Tooling.Documentation.DocumentationResult.nextRequest { get; init; }
```

Structured continuation for a result page or content segment, or null when that selection is exhausted.
Associated contracts remain separately listed in continuations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationResult.cs#L38).

## `snapshot`

<a id="api-0a3a06fcf3dd23a0"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationResult.snapshot 3f8bafde929c9a8195feb72ff065598e0dcae3f5083d218c1d1f0e60091de1e9 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationResult.snapshot { get; init; }
```

The immutable documentation generation identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationResult.cs#L33).

## `sourceApiStatus`

<a id="api-27ef061a7d133c90"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationResult.sourceApiStatus d475fa2ca91dd6c54ae83edce93c083d0257b58753e5bc1c30edbeac0088d10f -->

```csharp
public string Inno.Tooling.Documentation.DocumentationResult.sourceApiStatus { get; init; }
```

Source validation state. Unverified never asserts that declarations match current engine source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationResult.cs#L34).

## `status`

<a id="api-f9f3e72f58e9b26f"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationResult.status f1200f3245ff3eb0a95382c6a991e7236fe56a401fdd450bad8affa5a73ad734 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationResult.status { get; init; }
```

Found, Empty, Ambiguous, Missing, Partial, Navigation, Mismatched or Ready. Execution failures throw rather than resemble content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationResult.cs#L32).

## `timingsMilliseconds`

<a id="api-d3578fba5061c9e4"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationResult.timingsMilliseconds d519542b5c7d539ce1caa3cbff790456b6468b412d7b398becce259f35469517 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, double>? Inno.Tooling.Documentation.DocumentationResult.timingsMilliseconds { get; init; }
```

Gets measured preparation phases in milliseconds, or null for an ordinary read.
Total and PagePreparation are inclusive; MarkdownParsing and OwnerRegistration are subsets
of PagePreparation. These observations are not performance or execution certificates.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/tools/Inno.Tooling.Documentation/DocumentationResult.cs#L46).
