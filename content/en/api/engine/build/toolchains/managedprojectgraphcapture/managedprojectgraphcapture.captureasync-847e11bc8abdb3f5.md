---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.847e11bc8abdb3f570b6b0bb890dfae399959274105114a84a6120a871ada9eb
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ManagedProjectGraphCapture.CaptureAsync(System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String},System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Boolean,System.Threading.CancellationToken)
title: ManagedProjectGraphCapture.CaptureAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: ff7822311711422d3037fdeab06e69a8888dddf53a7daacfa81dfe1508d68451
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `engineRoot`:** The checkout owning the evaluator and its temporary request.

**Parameter `dotnetHost`:** The explicitly selected managed host executable.

**Parameter `projects`:** Existing absolute project paths evaluated together with identical global properties.

**Parameter `properties`:** The complete evaluation properties, including configuration and any explicit output owner.

**Parameter `resolveReferences`:** Resolves compile references and implicit symbols after restore without building project references or native products.

**Parameter `cancellationToken`:** Cancels preparation or evaluation and drains child processes before releasing owners.

## Returns

A JSON array of SDK snapshots. An empty request or failed evaluation throws instead of returning partial evidence.

## Exceptions

**Exception `T:System.ArgumentException`:** No projects are supplied or a project path is not absolute.

**Exception `T:System.IO.FileNotFoundException`:** A project or selected SDK input is absent.

**Exception `T:System.OperationCanceledException`:** The caller cancels owned work.

**Exception `T:System.InvalidOperationException`:** SDK discovery or evaluation fails.
