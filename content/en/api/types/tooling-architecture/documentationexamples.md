---
title: "DocumentationExamples"
description: "Reference for DocumentationExamples in Inno.Tooling.Architecture."
uid: api.inno.tooling.architecture.d59a8ada7dc89988
kind: api
owners:
  - Inno.Tooling.Architecture
apiSurface: source-clr
contracts:
  - project.inno-tooling-architecture#choose-the-evidence-you-need
---
# `DocumentationExamples`

This reference describes `DocumentationExamples` in `Inno.Tooling.Architecture`. Read the [shared contract](../../projects/inno-tooling-architecture.md#choose-the-evidence-you-need) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`ExecuteAsync`](#api-8d85253170d78d86) | Method |

## Type declaration

<a id="api-d59a8ada7dc89988"></a>
<!-- api: T:Inno.Tooling.Architecture.DocumentationExamples 0c860393c726fc1dcb84ae9d64ab1da284d15146e990eafb0ea62a083507d31f -->

```csharp
public static class Inno.Tooling.Architecture.DocumentationExamples
```

Compiles canonical documentation examples against explicit prepared host or script references.
This validator does not parse Markdown again, build products, run example code or certify source provenance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Architecture/DocumentationExamples.cs#L22).

## `ExecuteAsync`

<a id="api-8d85253170d78d86"></a>
<!-- api: M:Inno.Tooling.Architecture.DocumentationExamples.ExecuteAsync(System.String[],System.Threading.CancellationToken) fb49a41a20d0431015fa8cf2f85f45a805c3969a7eefc5269ed60ccc6799bdc7 -->

```csharp
public static System.Threading.Tasks.Task<int> Inno.Tooling.Architecture.DocumentationExamples.ExecuteAsync(string[] arguments, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Validates complete example groups in a prepared snapshot using one evaluated SDK graph.

**Parameter `arguments`:** Required engine-root, cache-root, snapshot, dotnet and output options; optional repeated page identities,
configuration, target, runtime-reference and editor-reference. References must already exist.

**Parameter `cancellationToken`:** Cancels reading, SDK inspection or compilation before atomic report publication.

**Returns:** Zero when every selected example group compiles; one for failed compilation, missing prerequisites,
missing explicit contexts or empty required example discovery. The report preserves each group's status.

**Throws `System.ArgumentException`:** Options are missing, duplicated or unknown, or a requested page does not exist.

**Throws `System.IO.IOException`:** Snapshot integrity, repository inventory or report publication fails.

**Throws `System.OperationCanceledException`:** Validation was canceled; no completed report replaces the previous result.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/20ca428b9354c6ee587679cf323ee30c4fc1410f/tools/Inno.Tooling.Architecture/DocumentationExamples.cs#L47).
