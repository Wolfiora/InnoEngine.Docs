---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9416e8f1740b8c0ced1a2feb3efc29a99c53919e6ee2cdfd9ad23380691a620b
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ManagedProjectGraphCapture.CaptureSelectedAsync(System.String,Inno.Build.Toolchains.DotNetSdkDescriptor,System.Collections.Generic.IReadOnlyList{System.String},System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Boolean,System.Threading.CancellationToken)
title: ManagedProjectGraphCapture.CaptureSelectedAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: d49efb76b18fa4504b08476a4b71919c4d517ed475ee54305c7cb85a9bebbc4f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `engineRoot`:** The checkout owning the evaluator and its temporary request.

**Parameter `sdk`:** The descriptor returned by DotNetSdkResolver for the evaluation owner and its current SDK inputs.

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

**Exception `T:System.InvalidOperationException`:** Evaluator preparation or project evaluation fails.
