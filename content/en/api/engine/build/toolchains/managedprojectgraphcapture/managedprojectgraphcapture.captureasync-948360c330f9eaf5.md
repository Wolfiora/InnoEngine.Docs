---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.948360c330f9eaf5a442197202d3df6cfd65b38be9c6f395b8fd02bfe7e35ee2
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ManagedProjectGraphCapture.CaptureAsync(System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String},System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Threading.CancellationToken,System.Boolean)
title: ManagedProjectGraphCapture.CaptureAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: d43a8595347f91be566b94e31753a8effacc50d7358856a1305711d29093890e
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

**Parameter `cancellationToken`:** Cancels preparation or evaluation and drains child processes before releasing owners.

**Parameter `resolveReferences`:** Resolves compile references and implicit symbols after restore without building project references or native products.

## Returns

A JSON array of SDK snapshots. An empty request or failed evaluation throws instead of returning partial evidence.

## Exceptions

**Exception `T:System.ArgumentException`:** No projects are supplied or a project path is not absolute.

**Exception `T:System.IO.FileNotFoundException`:** A project or selected SDK input is absent.

**Exception `T:System.OperationCanceledException`:** The caller cancels owned work.

**Exception `T:System.InvalidOperationException`:** SDK discovery or evaluation fails.
